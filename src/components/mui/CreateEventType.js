import React from 'react';
import { Button, Box } from '@mui/material';

const CreateEventType = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Button variant="contained" color="primary">
        Organizar quedada
      </Button>
      <Button variant="contained" color="primary">
        Subir Ruta
      </Button>
      <Button variant="contained" color="primary">
        Option3
      </Button>
      <Button variant="contained" color="primary">
        Option4
      </Button>
    </Box>
  );
};

export default CreateEventType;
