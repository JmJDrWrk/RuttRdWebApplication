import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Polyline, useMapEvents, Popup, useMap } from 'react-leaflet';
import Button from "@mui/material/Button";
import { IconButton, Tooltip, Box, TextField, FormControl, Grid, Menu, MenuItem, Modal, Typography, InputLabel, Select } from '@mui/material';
import { CenterFocusStrong, Save, Delete, CloudUpload, Architecture, Undo, Edit } from '@mui/icons-material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import L from 'leaflet';
import markerIcon from './src/marker1.png';
import 'leaflet/dist/leaflet.css';
import RuttApi from '../../api/RuttApi';
import { useNavigate } from 'react-router-dom';
import FloatingAction from './utils/FloatingAction';


const CreateRouteMapStage1 = ({ isBeingCreated, show }) => {
  //Set some chismas de react here
  const [ruttName, setRuttName] = useState('your rutt name here')
  const [ruttDateTimeFrom, setRuttDateTimeFrom] = useState(' ')
  const [ruttDateTimeTo, setRuttDateTimeTo] = useState(' ')
  const [eventType, setEventType] = useState(' '); // private or public
  const [accessType, setAccessType] = useState(' '); // private, public, pay
  const [price, setPrice] = useState(' ');
  const [duration, setDuration] = useState(' ');

  const ruttApi = new RuttApi()

  async function handleUploadRutt() {
    const ruttObj = {
      "title": ruttName,
      "description": "This is a upload rutt test fullfilled",
      "data": {
        "distance": "String",
        "elevationGain": "String",
        "typeOfRoute": [
          {
            "type": "motorcycle",
            "typeLegible": "Motorcycle"
          }
        ],
        "technicalDifficulty": [
          {
            "type": "4",
            "typeLegible": "Type 4",
            "diffLevel": "Diff Level"
          }
        ],
        "duration": duration,
        "access": accessType,
        "minAltitude": "String",
        "maxAltitude": "String",
        "minMates": "String",
        "elevationNegative": "String",
        "elevationPositive": "String",
        "weather": [
          {
            "type": "1",
            "typeLegible": "Type 1"
          }
        ],
        "season": [
          {
            "type": "1"
          }
        ],
        "cost": price,
        "routeDirection": "onlyoneway"
      },
      "author": "jcoder",
      "raw": {},
      "isPublic": eventType
    }

    const { data, succeeded } = (await ruttApi.notificationContext(show).uploadRutt(ruttObj))
    // navigate('/RuttView/' + data.ruttId)

  }

  function handlePublishRutt() {

  }

  function handleUpdateRutt() {
    // let ruttFile = {
    //   coordinates: coordinates,
    //   markers: markers,
    //   nonPolylineMarkers: nonPolylineMarkers,
    //   center: center,
    //   zoom: mapZoom,
    //   ruttData: {
    //     name: ruttName,
    //     datetimefrom: ruttDateTimeFrom,
    //     datetimeto: ruttDateTimeTo,
    //     duration: duration,
    //     eventType: eventType,
    //     accessType: accessType,
    //     price: price
    //   }
    // };
    // new RuttApi().notificationContext(show).updateRutt(ruttFile, rutt._id)
  }

  return (<Box display="flex" justifyContent="center" alignItems="center" height="100vh">
    <Box width={400}>
      <Typography variant="h4" gutterBottom>
        Fill the form for your new rutt
      </Typography>
      <TextField label="Rutt Name" variant="outlined" fullWidth margin="normal" value={ruttName} onChange={(e) => setRuttName(e.target.value)} />

      {/* <TextField
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
      /> */}

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
          <MenuItem value={false}>Private</MenuItem>
          <MenuItem value={true}>Public</MenuItem>
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
      {isBeingCreated ?
        <Button onClick={handleUploadRutt} variant="contained" color="primary">
          Create
        </Button>
        :
        <>
          <Button onClick={handlePublishRutt} variant="contained" color="primary">
            Publish
          </Button><Button onClick={handleUpdateRutt} variant="contained" color="primary">
            Save Changes
          </Button>
        </>
      }
    </Box>
  </Box>
  )
};

export default CreateRouteMapStage1;
