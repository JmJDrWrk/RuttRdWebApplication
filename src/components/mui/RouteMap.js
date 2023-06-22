import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Polyline, useMapEvents, Popup } from 'react-leaflet';
import Button from "@mui/material/Button";
import { IconButton, Tooltip, Box, TextField, FormControl, Grid, Menu, MenuItem, Modal, Typography, InputLabel, Select } from '@mui/material';
import { CenterFocusStrong, Save, Delete, CloudUpload, Architecture, Undo } from '@mui/icons-material';

import L from 'leaflet';
import markerIcon from './src/marker1.png';
import 'leaflet/dist/leaflet.css';
import RuttApi from '../../api/RuttApi';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import FloatingAction from './utils/FloatingAction';

const RouteMap = ({ rutt, belongsToUser }) => {
  const [drawMode, setDrawMode] = useState('polyline')
  const [markers, setMarkers] = useState([]);
  const [coordinates, setCoordinates] = useState([]);
  const [center, setCenter] = useState([0, 0]);
  const [mapKey, setMapKey] = useState(0);
  let mapRef = useRef(null)
  const [drawingRoute, setDrawingRoute] = useState(false);
  const customIcon = L.icon({
    iconUrl: markerIcon,
    iconSize: [32, 32], // Adjust the size as needed
    iconAnchor: [16, 32], // Adjust the anchor point if necessary
  });

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

    console.log('documentHeight', documentHeight)
    console.log('headerHeight', headerHeight)
    console.log('footerHeight', footerHeight)
    console.log('finalSizeInPx', finalSizeInPx)

    return finalSizeInPx
    // return '200px'
  })

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
          console.error('USING DEFAULT COORDINATES')
          setCenter([43.370731, -8.395850]);
          setMapKey((prevKey) => prevKey + 1); // Update the map key to force re-render
        }
      );
    }
    if (rutt) {
      console.log('RENDERING CHANGES', rutt)
      setCoordinates(rutt.coordinates || []);
      setMarkers(rutt.markers || []);
      setCenter(rutt.center);
      setNonPolylineMarkers(rutt.nonPolylineMarkers || []);

      //ruttData
      setRuttName(rutt.ruttData.name)
      setAccessType(rutt.ruttData.accessType)
      setEventType(rutt.ruttData.eventType)
      setDuration(rutt.ruttData.duration)
      setPrice(rutt.ruttData.price)
      setRuttDateTimeFrom(rutt.ruttData.datetimefrom || '2023-05-19:22:14')
      setRuttDateTimeTo(rutt.ruttData.datetimeto || '2023-05-19:22:14')
      setPolylineKey((prevKey) => prevKey + 1); // Trigger re-render of Polyline
      setMapKey((prevKey) => prevKey + 1);
    }

  }, []);
  const [nonPolylineMarkers, setNonPolylineMarkers] = useState([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMapClick = (event) => {
    //Right Click
    if (event.originalEvent.button === 0) {
      console.log('draw mode: ' + drawMode)
      if (drawMode == 'polyline') {
        if (!drawingRoute) {
          const { lat, lng } = event.latlng;
          const newMarker = {
            latlng: event.latlng,
            id: new Date().getTime(), // Generate a unique ID for the marker
          };

          setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
          setCoordinates((prevCoordinates) => [...prevCoordinates, [lat, lng]]);
        }
      } else if (drawMode == 'point') {
        const newMarker = {
          latlng: event.latlng,
          id: new Date().getTime(), // Generate a unique ID for the marker
          text: 'unnamed',
          color: 'default'
        };
        setNonPolylineMarkers((prevMarkers) => [...prevMarkers, newMarker]);
      } else {
        console.error('invalid drawMode!')
      }
    } else {
      console.log('LeftClick')
    }
  };

  const handleMouseDown = () => {
    console.log('mouse down', mapRef)
    setDrawingRoute(true);
  };

  const handleMouseUp = () => {
    console.log('mouse up')
    setDrawingRoute(false);
  };
  const handleMapMove = () => {

  };
  const handleMouseMove = (event) => {
  };

  const handleDeleteLastPoint = () => {
    console.log('deleting last point')
    if (coordinates.length > 0) {
      setMarkers((prevMarkers) => prevMarkers.slice(0, -1));
      setCoordinates((prevCoordinates) => prevCoordinates.slice(0, -1));
    }
  };

  const polylineRef = useRef(null);
  const [polylineKey, setPolylineKey] = useState(0);

  const handleSaveRutt = () => {
    let ruttFile = {
      coordinates: coordinates,
      markers: markers,
      nonPolylineMarkers: nonPolylineMarkers,
      center: center,
      ruttData: {
        name: ruttName,
        datetimefrom: ruttDateTimeFrom,
        datetimeto: ruttDateTimeTo,
        duration: duration,
        eventType: eventType,
        accessType: accessType,
        price: price
      }
    };
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
        setCoordinates(data.coordinates || []);
        setMarkers(data.markers || []);
        setCenter(data.center);
        setNonPolylineMarkers(data.nonPolylineMarkers || []);
        setPolylineKey((prevKey) => prevKey + 1); // Trigger re-render of Polyline
        setMapKey((prevKey) => prevKey + 1); // Update the map key to force re-render
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
  const [clickedMarker, setClickedMarker] = useState(null);
  const [menuAnchor, setMenuAnchor] = useState(null);
  const handleMenuClose = () => {
    setClickedMarker(null);
    setMenuAnchor(null);
  };
  const [markerId, setMarkerId] = useState()
  const handleMarkerClick = (markerId, event) => {
    setMarkerId(markerId)
    setMousePosition({ x: event.originalEvent.clientX, y: event.originalEvent.clientY });
    setClickedMarker(markerId);
    setMenuAnchor(event.currentTarget);
  };
  const [isRenameModalOpen, setIsRenameModalOpen] = useState(false);
  const [newMarkerName, setNewMarkerName] = useState('');
  const handleRenameMarker = () => {
    const marker = markers.find((marker) => marker.id === markerId);
    if (marker) {
      setClickedMarker(marker.id);
      setIsRenameModalOpen(true);
      setNewMarkerName(marker.text);
    } else {
      console.error('MARKER NOT FOUND')
    }
    setMenuAnchor(null);
  }

  const handleRenameMarkerSubmit = () => {
    const updatedMarkers = markers.map((marker) => {
      if (marker.id === clickedMarker) {
        return { ...marker, text: newMarkerName };
      }
      return marker;
    });
    setMarkers(updatedMarkers);
    setIsRenameModalOpen(false);
  };
  const handleDeleteCoordinate = () => {
    const selectedMarker = markers.find((marker) => marker.id === markerId);
    setMarkers((prevMarkers) => prevMarkers.filter((marker) => marker.id !== clickedMarker));
    setCoordinates((prevCoordinates) =>
      prevCoordinates.filter((coordinate) => {
        const [lat, lng, markerId] = coordinate;
        return !(lat === selectedMarker.latlng.lat && lng === selectedMarker.latlng.lng);
      })
    );
    setMenuAnchor(null);
  };
  const handleDeleteOnlyMarker = () => {
    setMarkers((prevMarkers) => prevMarkers.filter((marker) => marker.id !== clickedMarker));
    setCoordinates((prevCoordinates) =>
      prevCoordinates.filter((coordinate) => coordinate[2] !== clickedMarker)
    );
    setMenuAnchor(null);
  };
  //DRAW MODE MENU
  const [menuDrawAnchor, setMenuDrawAnchor] = useState(null);
  const handleDrawModeChange = (mode) => {
    setDrawMode(mode);
    setMenuDrawAnchor(null);
  };

  const handleMenuDrawOpen = (event) => {
    setMenuDrawAnchor(event.currentTarget);
  };

  const handleMenuDrawClose = () => {
    setMenuDrawAnchor(null);
  };

  const [ruttName, setRuttName] = useState(' ')
  const [ruttDateTimeFrom, setRuttDateTimeFrom] = useState(' ')
  const [ruttDateTimeTo, setRuttDateTimeTo] = useState(' ')
  const [eventType, setEventType] = useState(' '); // private or public
  const [accessType, setAccessType] = useState(' '); // private, public, pay
  const [price, setPrice] = useState(' ');
  const [duration, setDuration] = useState(' ');

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  const handleEventTypeChange = (event) => {
    setEventType(event.target.value);
  };

  const handleAccessTypeChange = (event) => {
    setAccessType(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const navigate = useNavigate()
  const ruttApi = new RuttApi()
  async function handleUploadRutt() {
    let ruttFile = {
      coordinates: coordinates,
      markers: markers,
      nonPolylineMarkers: nonPolylineMarkers,
      center: center,
      ruttData: {
        name: ruttName,
        datetimefrom: ruttDateTimeFrom,
        datetimeto: ruttDateTimeTo,
        duration: duration,
        eventType: eventType,
        accessType: accessType,
        price: price
      }
    };
    const { data, succeeded } = (await ruttApi.uploadRutt(ruttFile))
    navigate('/RuttView/' + data.ruttId)

  }

  function handlePublishRutt() {

  }

  function handleUpdateRutt() {
    let ruttFile = {
      coordinates: coordinates,
      markers: markers,
      nonPolylineMarkers: nonPolylineMarkers,
      center: center,
      ruttData: {
        name: ruttName,
        datetimefrom: ruttDateTimeFrom,
        datetimeto: ruttDateTimeTo,
        duration: duration,
        eventType: eventType,
        accessType: accessType,
        price: price
      }
    };
    new RuttApi().updateRutt(ruttFile, rutt._id)
  }
  const handleFloatingClick = (event) => {
    event.preventDefault()
  }
  return (
    <div>
      <Modal open={isRenameModalOpen} onClose={() => setIsRenameModalOpen(false)}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <Box sx={{ width: 300, p: 2, backgroundColor: 'white' }}>
            <Typography variant="h6" gutterBottom>
              Rename Marker
            </Typography>
            <TextField
              label="New Marker Name"
              value={newMarkerName}
              onChange={(event) => setNewMarkerName(event.target.value)}
              fullWidth
            />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
              <Button onClick={handleRenameMarkerSubmit} variant="contained" color="primary">
                Save
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
      {/* {belongsToUser ?
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Tooltip title="Change Draw Mode">
            <Button
              onClick={handleMenuDrawOpen}
              variant="contained"
              color="inherit"
              startIcon={<CenterFocusStrong />}
              style={{ backgroundColor: 'white' }}
            >
              {drawMode}
            </Button>
          </Tooltip>
          <Menu
            anchorEl={menuDrawAnchor}
            open={Boolean(menuDrawAnchor)}
            onClose={handleMenuDrawClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <MenuItem onClick={() => handleDrawModeChange('polyline')}>Polyline</MenuItem>
            <MenuItem onClick={() => handleDrawModeChange('point')}>Point</MenuItem>
            <MenuItem onClick={() => handleDrawModeChange('Something')}>Something</MenuItem>
          </Menu>

          <Tooltip title="Center to Current Location">
            <IconButton onClick={centerToCurrentLocation} style={{ backgroundColor: 'white' }}>
              <CenterFocusStrong />
            </IconButton>
          </Tooltip>
          <Tooltip title="Save Polyline Reference">
            <IconButton onClick={handleSaveRutt} style={{ backgroundColor: 'white' }}>
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
        </Box> : false} */}

      <MapContainer
        key={mapKey} // Use a unique key to force re-render when center changes
        center={center} // Set the initial center of the map
        zoom={13} // Set the initial zoom level
        style={{ height: optHeightPx, width: '100%' }}
        ref={(map) => (mapRef = map)}
      >
        <MapEvents />

        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {markers.map((marker) => (
          <Marker icon={customIcon} position={marker.latlng} key={marker.id}
            eventHandlers={{
              click: (event) => handleMarkerClick(marker.id, event),
            }}
          >
            <Popup>{marker.text}</Popup>
          </Marker>
        ))}

        {nonPolylineMarkers.map((marker) => (
          <Marker
            icon={customIcon}
            position={marker.latlng}
            key={marker.id}
            eventHandlers={{
              click: (event) => handleMarkerClick(marker.id, event),
            }}
          >
            <Popup>{marker.text}</Popup>

          </Marker>
        ))}

        <Polyline positions={coordinates} key={polylineKey} ref={(ref) => (polylineRef.current = ref)} />

        {belongsToUser ? <Menu
          open={menuAnchor !== null}
          anchorEl={menuAnchor}
          onClose={handleMenuClose}
          style={{
            position: 'fixed',
            left: mousePosition.x,
            top: mousePosition.y,
          }}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <MenuItem onClick={handleDeleteOnlyMarker}>Remove marker</MenuItem>
          <MenuItem onClick={handleDeleteCoordinate}>Remove point</MenuItem>
          <MenuItem onClick={handleRenameMarker}>Rename</MenuItem>
        </Menu> : false}

      </MapContainer>

      <FloatingAction bottomSpacing={8} rightSpacing={1} clickHandler={() => { }} btref="drawmode" place="3" undecorated={false}>
        <Tooltip title="Change Draw Mode">
          <Button
            onClick={handleMenuDrawOpen}
            variant="contained"
            color="inherit"
            // icon={}
            style={{ backgroundColor: 'transparent', boxShadow: 'none' }}
          >
            <Architecture />
            {/* <Typography fontSize={4}>{drawMode}</Typography> */}
          </Button>
        </Tooltip>

        <Menu
          anchorEl={menuDrawAnchor}
          open={Boolean(menuDrawAnchor)}
          onClose={handleMenuDrawClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <MenuItem onClick={() => handleDrawModeChange('polyline')}>Polyline</MenuItem>
          <MenuItem onClick={() => handleDrawModeChange('point')}>Point</MenuItem>
          <MenuItem onClick={() => handleDrawModeChange('polygon')}>Polygon</MenuItem>
        </Menu>
      </FloatingAction>

      <FloatingAction bottomSpacing={8} rightSpacing={1} clickHandler={handleFloatingClick} btref="save" place="2">
      <Tooltip title="Delete Last Point">
            <IconButton onClick={handleDeleteLastPoint} style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
              <Undo style={{color:'white'}}/>
            </IconButton>
          </Tooltip>
      </FloatingAction>

      <FloatingAction bottomSpacing={8} rightSpacing={1} clickHandler={handleFloatingClick} btref="center" place="1">
        <Tooltip title="Center to Current Location">
          <IconButton onClick={centerToCurrentLocation} style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
            <CenterFocusStrong  style={{color:'white'}} />
          </IconButton>
        </Tooltip>
      </FloatingAction>


      {belongsToUser ?
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <Box width={400}>
            <TextField label="Rutt Name" variant="outlined" fullWidth margin="normal" value={ruttName} onChange={(e) => setRuttName(e.target.value)} />

            <TextField
              label="From Date & Time"
              type="datetime-local"
              variant="outlined"
              fullWidth
              margin="normal"
              value={ruttDateTimeFrom}
              onChange={(e) => setRuttDateTimeFrom(e.target.value)}
            />

            <TextField
              label="To Date & Time"
              type="datetime-local"
              variant="outlined"
              fullWidth
              margin="normal"
              value={ruttDateTimeTo}
              onChange={(e) => setRuttDateTimeTo(e.target.value)}
            />

            <TextField
              label="Duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              fullWidth
              margin="normal"
            />

            <FormControl fullWidth margin="normal">
              <InputLabel id="event-type-label">Event Type</InputLabel>
              <Select
                labelId="event-type-label"
                id="event-type-select"
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
              >
                <MenuItem value="private">Private</MenuItem>
                <MenuItem value="public">Public</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth margin="normal">
              <InputLabel id="access-type-label">Access Type</InputLabel>
              <Select
                labelId="access-type-label"
                id="access-type-select"
                value={accessType}
                onChange={(e) => setAccessType(e.target.value)}
              >
                <MenuItem value="private">Private</MenuItem>
                <MenuItem value="public">Public</MenuItem>
                <MenuItem value="pay">Pay</MenuItem>
              </Select>
            </FormControl>

            {accessType === 'pay' && (
              <TextField
                label="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                fullWidth
                margin="normal"
              />
            )}
            <Button onClick={handleUpdateRutt} variant="contained" color="primary">
              Save Changes
            </Button>
            <Button onClick={handleUploadRutt} variant="contained" color="primary">
              Create
            </Button>
            <Button onClick={handlePublishRutt} variant="contained" color="primary">
              Publish
            </Button>
          </Box>
        </Box> : <></>

      }

    </div>
  );
};

export default RouteMap;
