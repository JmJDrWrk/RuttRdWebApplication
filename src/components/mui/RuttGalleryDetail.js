import React, { useState, useEffect } from 'react';
import {
  Card, CardContent, Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Collapse
} from '@mui/material';
import { ExpandMoreOutlined } from '@mui/icons-material';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './RuttGalleryDetail.css';
import markerIcon from './src/marker1.png';
import { width } from '@mui/system';
const formatDistance = (distance) => {
  return `${distance} km`;
};

const formatAltitude = (altitude) => {
  return `${altitude} m`;
};


const RuttGalleryDetail = ({ route }) => {

  const handleShareWithGoogleMaps = () => {

  }

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === route.photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevClick = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === 0 ? route.photos.length - 1 : prevIndex - 1
    );
  };
  const customIcon = L.icon({
    iconUrl: markerIcon,
    iconSize: [32, 32], // Adjust the size as needed
    iconAnchor: [16, 32], // Adjust the anchor point if necessary
  });
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="div">
          {route.title}
        </Typography>
        <Button
          onClick={handleShareWithGoogleMaps}
        >
          <img src='https://logodownload.org/wp-content/uploads/2018/01/google-maps-logo-1-1.png' style={width="20px"}></img>
        </Button>
        {route.coordinatesWithNames && (
          <MapContainer
            center={[route.coordinatesWithNames[0].latitude, route.coordinatesWithNames[0].longitude]}
            zoom={20}
            style={{ width: '100%', height: '300px' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Polyline
              positions={route.coordinatesWithNames.map(coordinate => [coordinate.latitude, coordinate.longitude])}
              color="blue"
            />
            {route.coordinatesWithNames.map((coordinate, index) => (
              <Marker
                icon={customIcon}
                key={index}
                position={[coordinate.latitude, coordinate.longitude]}
              >
                <Popup>{coordinate.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        )}
        <Typography variant="body2" color="text.secondary">
          <Button
            onClick={handleExpandClick}
            endIcon={<ExpandMoreOutlined />}
          >
            Show Description
          </Button>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            {route.description}
          </Collapse>
        </Typography>

        <div className="image-carousel">
          <img
            src={route.photos[currentPhotoIndex].imageUrl}
            alt={route.photos[currentPhotoIndex].altText}
          />
          <div className="carousel-controls">
            <button onClick={handlePrevClick}>&lt;</button>
            <button onClick={handleNextClick}>&gt;</button>
          </div>
        </div>

        <TableContainer component={Paper}>
          <Table aria-label="Route Details">
            <TableHead>
              <TableRow>
                <TableCell>Attribute</TableCell>
                <TableCell>Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Route Type</TableCell>
                <TableCell><strong>{route.routeType}</strong></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Distance</TableCell>
                <TableCell><strong>{formatDistance(route.distance)}</strong></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Elevation Gain</TableCell>
                <TableCell><strong>{formatAltitude(route.elevationGain)}</strong></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Rating</TableCell>
                <TableCell><strong>{route.rating}</strong></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Max Altitude</TableCell>
                <TableCell><strong>{formatAltitude(route.maxAltitude)}</strong></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Min Altitude</TableCell>
                <TableCell><strong>{formatAltitude(route.minAltitude)}</strong></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Technical Difficulty</TableCell>
                <TableCell><strong>{route.technicalDifficulty}</strong></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Type of Route</TableCell>
                <TableCell><strong>{route.typeOfRoute}</strong></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>

    </Card>
  );
};

export default RuttGalleryDetail;
