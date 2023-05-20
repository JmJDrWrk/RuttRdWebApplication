import React, { useState, useRef, useEffect } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import Webcam from 'react-webcam';
import ServerApi from '../../api/api';
import PublishAPI from '../../api/PublishAPI';
const UploadPhotoForm = () => {
  const [title, setTitle] = useState('');
  const [photo, setPhoto] = useState(null);
  const [photoURL, setPhotoURL] = useState('');
  const [location, setLocation] = useState('');
  const [fileInput, setFileInput] = useState(null)
  const webcamRef = useRef(null);
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


  const handlePhotoChange = (event) => {
    console.log('photo changed')
    const selectedPhoto = event.target.files[0];
    setFileInput(event.target.files[0])
    setPhoto(selectedPhoto);
    setPhotoURL(URL.createObjectURL(selectedPhoto));
  };

  const handleCapture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    const base64Img = imageSrc.split(',')[1];

    // Create a File object from the base64 image data
    const blob = b64toBlob(base64Img, 'image/png');
    const file = new File([blob], 'photo.png', { type: 'image/png' });

    setPhoto(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append('title', title);
    formData.append('file', fileInput, fileInput.name);
    formData.append('location', 'location');
    // Make a POST request to /file/upload endpoint with formData
    for (const entry of formData.entries()) {
      console.log('FORMDATA: ' + entry[0] + ', ' + entry[1]);
    }

    // ServerApi.doPost('/users/photo/upload', formData)
    // PublishAPI.publishPhoto(formData); NOt working no idea
    fetch("https://ruttradarvalkiria.jmjdrwrk.repl.co/users/photo/upload", {
      method: "POST",
      body: formData,
      headers : {
        "auth-token": localStorage.getItem('auth-token')
      }
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle response from the server
        console.log(data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  }
  // Convert base64 image data to Blob
  const b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
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

        <Box display="flex" flexDirection="column" alignItems="center" marginBottom={2}>
          {photoURL ? (
            <Box marginBottom={2}>
              <img src={photoURL} alt="Selected" width="200" height="200" />
            </Box>
          ) : (
            <Box marginBottom={2} display="flex" justifyContent="center">
              {photo ? (
                <Button onClick={() => setPhoto(null)} variant="outlined" color="primary">
                  Retake Photo
                </Button>
              ) : (
                <>
                  <Button onClick={handleCapture} variant="outlined" color="primary">
                    Take Photo
                  </Button>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    style={{ display: 'none' }}
                    id="upload-photo"
                  />
                  <label htmlFor="upload-photo">
                    <Button variant="contained" color="primary" component="span">
                      Upload Photo
                    </Button>
                  </label>
                </>
              )}
            </Box>
          )}

          {!photoURL && !photo && (
            <Typography variant="caption" color="textSecondary">
              No photo selected
            </Typography>
          )}
        </Box>
        <TextField
          label="Location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          fullWidth
          margin="normal"
          disabled={!!location} // Disable the input if location is automatically filled
        />

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default UploadPhotoForm;