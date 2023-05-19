import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function NotFoundError() {


  const redirectToHomePage = () => {
    window.location.href = '/'
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Box>
        <Typography
          variant="h4"
          component="h1"
          align="center"
          color="gray"
          fontWeight="bold"
          letterSpacing={2}
          textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
        >
          Oops! Error 404: Page Not Found
          <br />
          Sign in to use the app
        </Typography>
        <Box mt={2} textAlign="center">
          <Button variant="contained" color="error" onClick={redirectToHomePage}>
            return home
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default NotFoundError;
