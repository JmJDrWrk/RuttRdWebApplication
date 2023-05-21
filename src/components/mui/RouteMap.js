import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';

const RouteMap = () => {
  const [markers, setMarkers] = useState([]);
  const [coordinates, setCoordinates] = useState([]);
  const [center, setCenter] = useState([0, 0]);
  const [mapKey, setMapKey] = useState(0);

  useEffect(() => {
    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log('YOUR POSITION: ', latitude, longitude);
          setCenter([latitude, longitude]);
          setMapKey((prevKey) => prevKey + 1); // Update the map key to force re-render
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }, []);

  const handleMapClick = (event) => {
    const { lat, lng } = event.latlng;
    const newMarker = {
      latlng: event.latlng,
      id: new Date().getTime(), // Generate a unique ID for the marker
    };

    setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
    setCoordinates((prevCoordinates) => [...prevCoordinates, [lat, lng]]);
  };

  const centerToCurrentLocation = () => {
    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCenter([latitude, longitude]);
          setMapKey((prevKey) => prevKey + 1); // Update the map key to force re-render
        },
        (error) => {
          console.error(error);
        }
      );
    }
  };

  return (
    <div>
      <MapContainer
        key={mapKey} // Use a unique key to force re-render when center changes
        center={center} // Set the initial center of the map
        zoom={13} // Set the initial zoom level
        style={{ height: '500px', width: '100%' }}
        onClick={handleMapClick}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {markers.map((marker) => (
          <Marker position={marker.latlng} key={marker.id} />
        ))}

        {coordinates.length > 1 && <Polyline positions={coordinates} />}
      </MapContainer>

      <button onClick={centerToCurrentLocation}>Center to Current Location</button>
    </div>
  );
};

export default RouteMap;
