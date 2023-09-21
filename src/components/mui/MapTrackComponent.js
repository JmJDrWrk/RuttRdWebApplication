import React, { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import io from "socket.io-client";
import State from '../../api/state';
import 'leaflet/dist/leaflet.css';
import { Typography } from '@mui/material';
import markerIcon from './src/marker1.png';
import L from 'leaflet';
const socket = io("https://locationsocket.jmjdrwrk.repl.co/", {
  transports: ["websocket"],
  secure: true,
  rejectUnauthorized: false,
  auth: {
    token: State.getToken()
  }
});

const MapTrackComponent = () => {
  const [position, setPosition] = useState({latitude: 43.354232, longitude: -8.3949293});
  let mapRef = useRef(null)
  const [center, setCenter] = useState([0, 0]);
  const [mapKey, setMapKey] = useState(0);
  const [mapZoom, setMapZoom] = useState(13);
  const [optHeightPx, setOptHeightPx] = useState(() => {
    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );


    const headerHeight = document.getElementById('appheader').offsetHeight
    const footerHeight = document.getElementById('appfooter').offsetHeight

    const finalSizeInPx = documentHeight - headerHeight - footerHeight

    return finalSizeInPx
  })
  const customIcon = L.icon({
    iconUrl: markerIcon,
    iconSize: [32, 32], // Adjust the size as needed
    iconAnchor: [16, 32], // Adjust the anchor point if necessary
  });
  useEffect(() => {
    const handleLocationResponse = (bucket) => {
      console.log('bucket', bucket);
      // Assuming bucket is in the format you provided
      const latitude = parseFloat(bucket.latitude);
      const longitude = parseFloat(bucket.longitude);
      console.log('position is', { latitude, longitude })
      setPosition({ latitude, longitude });
      // toast.dismiss(); // You may want to uncomment this if you have a toast component
      // toast.success(`${bucket.requested} is in ${bucket.address}`, {
      //   position: toast.POSITION.TOP_RIGHT,
      // });
      // setCurrentLocation(bucket.address) // Make sure you have this function defined
    };

    socket.on('locationResponse', handleLocationResponse);

    // Clear the event listener when the component is unmounted
    return () => {
      socket.off('locationResponse', handleLocationResponse);
    };
  }, []);

  // Function to request location every 5 seconds
  const requestLocationOneTime = () => {
    console.log('Emitting event...')
    socket.emit('requestLocation', { requested: 'localizable@ruttradar.com' });
  }

  // Start requesting location every 5 seconds
  // useEffect(() => {
  //   const interval = setInterval(requestLocationEvery5Seconds, 5000);
  //   return () => clearInterval(interval); // Clear the interval on component unmount
  // }, []);

  return (
    <>
      <MapContainer
        key={mapKey}
        center={L.latLng(position.latitude, position.longitude) || [0,0]}
        zoom={mapZoom}
        style={{ height: optHeightPx, width: '100%' }}
        ref={(map) => (mapRef = map)}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {position && (
          <Marker
          icon={customIcon}
           position={L.latLng(position.latitude, position.longitude)}>
            <Popup>
              A marker at the specified position.
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </>
  );
};

export default MapTrackComponent;
