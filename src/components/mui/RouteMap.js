import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Polyline, useMapEvents } from 'react-leaflet';
import Button from "@mui/material/Button";
import { IconButton, Tooltip, Box } from '@mui/material';
import { CenterFocusStrong, Save, Delete, CloudUpload } from '@mui/icons-material';

import L from 'leaflet';
import markerIcon from './src/marker1.png';
import 'leaflet/dist/leaflet.css';

const RouteMap = () => {
  const [markers, setMarkers] = useState([]);
  const [coordinates, setCoordinates] = useState([]);
  const [center, setCenter] = useState([0, 0]);
  const [mapKey, setMapKey] = useState(0);
  
  const [drawingRoute, setDrawingRoute] = useState(false);
  const customIcon = L.icon({
    iconUrl: markerIcon,
    iconSize: [32, 32], // Adjust the size as needed
    iconAnchor: [16, 32], // Adjust the anchor point if necessary
  });

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
    if (!drawingRoute) {
      const { lat, lng } = event.latlng;
      const newMarker = {
        latlng: event.latlng,
        id: new Date().getTime(), // Generate a unique ID for the marker
      };

      setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
      setCoordinates((prevCoordinates) => [...prevCoordinates, [lat, lng]]);
    }
  };

  const handleMouseDown = () => {
    setDrawingRoute(true);
  };

  const handleMouseUp = () => {
    setDrawingRoute(false);
  };

  const handleMouseMove = (event) => {

  };

  const handleDeleteLastPoint = () => {
    if (coordinates.length > 0) {
      setMarkers((prevMarkers) => prevMarkers.slice(0, -1));
      setCoordinates((prevCoordinates) => prevCoordinates.slice(0, -1));
    }
  };

  const polylineRef = useRef(null);
  const [polylineKey, setPolylineKey] = useState(0);

  const handleSavePolylineRef = () => {
    console.log('Polyline reference:', coordinates);
    let ruttFile = {
      coordinates : coordinates,
      markers : markers,
      center : center
    }
    const data = JSON.stringify(ruttFile);
    const blob = new Blob([data], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'rutt.json';
    link.click();
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

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const fileName = file.name;
    const fileExtension = fileName.split('.').pop().toLowerCase();
  

      const reader = new FileReader();
      reader.onload = (e) => {
        const contents = e.target.result;
        try {
          const data = JSON.parse(contents);
          console.log('YOU UPLOADED:', data);
          setCoordinates(data.coordinates);
          setMarkers(data.markers)
          setCenter(data.center)
          setPolylineKey((prevKey) => prevKey + 1); // Trigger re-render of Polyline
          // Extract the coordinates from the JSON data
          // Set the coordinates and markers state accordingly
        } catch (error) {
          console.error('Failed to parse JSON:', error);
        }
      };
      reader.readAsText(file);

  };
  


  const MapEvents = () => {
    useMapEvents({
      click: handleMapClick,
      mousedown: handleMouseDown,
      mouseup: handleMouseUp,
      mousemove: handleMouseMove,
    });

    return null;
  };

  return (
    <div>
      <MapContainer
        key={mapKey} // Use a unique key to force re-render when center changes
        center={center} // Set the initial center of the map
        zoom={13} // Set the initial zoom level
        style={{ height: '500px', width: '100%' }}
      >
        <MapEvents />

        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {markers.map((marker) => (
          <Marker icon={customIcon} position={marker.latlng} key={marker.id} />
        ))}

      <Polyline positions={coordinates} key={polylineKey} ref={(ref) => (polylineRef.current = ref)}/>
      </MapContainer>

      <Box display="flex" justifyContent="space-between" mt={2}>
        <Tooltip title="Center to Current Location">
          <IconButton onClick={centerToCurrentLocation} style={{ backgroundColor: 'white' }}>
            <CenterFocusStrong />
          </IconButton>
        </Tooltip>
        <Tooltip title="Save Polyline Reference">
          <IconButton onClick={handleSavePolylineRef} style={{ backgroundColor: 'white' }}>
            <Save />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete Last Point">
          <IconButton onClick={handleDeleteLastPoint} style={{ backgroundColor: 'white' }}>
            <Delete />
          </IconButton>
        </Tooltip>
        <Tooltip title="Load Polyline from File">
          <IconButton component="label" style={{ backgroundColor: 'white' }}>
            <CloudUpload />
            <input type="file" accept=".json" style={{ display: 'none' }} onChange={handleFileUpload} />
          </IconButton>
        </Tooltip>
      </Box>
    </div>
  );
};

export default RouteMap;
