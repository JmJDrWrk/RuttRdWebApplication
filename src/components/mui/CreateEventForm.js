import React, { useState, useRef, useEffect } from 'react';
import {
  TextField,
  Button,
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import ServerApi from '../../api/api';
import PublishAPI from '../../api/PublishAPI';

const CreateEventForm = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [duration, setDuration] = useState('');
  const [eventType, setEventType] = useState(''); // private or public
  const [accessType, setAccessType] = useState(''); // private, public, pay
  const [price, setPrice] = useState('');

  useEffect(() => {
    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          // Call a function to reverse geocode the coordinates and get the location name
          reverseGeocode(latitude, longitude)
            .then((result) => {
              setLocation(result);
            })
            .catch((error) => {
              console.error(error);
            });
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }, []);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

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

  const handleSubmit = (event) => {
    event.preventDefault();

    const eventData = {
      title,
      date,
      location,
      duration,
      eventType,
      accessType,
      price,
    };

    // Make a POST request to create the event
    ServerApi.createEvent(eventData)
      .then((response) => {
        // Handle response from the server
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };

  // Function to reverse geocode coordinates and get location name
  const reverseGeocode = async (latitude, longitude) => {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=YOUR_API_KEY`
    );
    const data = await response.json();
    const location = data[0]?.name || '';

    return location;
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          value={title}
          onChange={handleTitleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Date"
          type="date"
          value={date}
          onChange={handleDateChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Location"
          value={location}
          onChange={handleLocationChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Duration"
          value={duration}
          onChange={handleDurationChange}
          fullWidth
          margin="normal"
        />

        <FormControl fullWidth margin="normal">
          <InputLabel id="event-type-label">Event Type</InputLabel>
          <Select
            labelId="event-type-label"
            id="event-type-select"
            value={eventType}
            onChange={handleEventTypeChange}
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
            onChange={handleAccessTypeChange}
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
            onChange={handlePriceChange}
            fullWidth
            margin="normal"
          />
        )}

        <Button type="submit" variant="contained" color="primary">
          Create Event
        </Button>
      </form>
    </Box>
  );
};

export default CreateEventForm;
