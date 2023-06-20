import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import EventTypesEnum from '../../models/EventTypesEnum';
import { useNavigate } from 'react-router-dom';
import NavigationPaths from '../../models/NavigationPaths';
const CreateEventType = () => {
  const navigate = useNavigate();
  const handleEventTypeCreateBt = (event) => {
    const eventTypeEnum = event.target.id
    console.log('target_:? ' + eventTypeEnum)
    if(eventTypeEnum == EventTypesEnum.concentration){
      navigate(NavigationPaths.uploadConcentration)
    }
    if(eventTypeEnum == EventTypesEnum.ruttwithfriends){
      navigate(NavigationPaths.uploadRutt)
      
    }
    if(eventTypeEnum == EventTypesEnum.importfrommaps){
      navigate(NavigationPaths.uploadImportedFromMaps)
      
    }
    if(eventTypeEnum == EventTypesEnum.newapplicationrutt){
      navigate(NavigationPaths.uploadNewApplicationRutt)
      
    }
  }
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Typography variant="h4" gutterBottom>
        Elige un tipo de evento
      </Typography>
      <br></br>
      <Button variant="contained" color="primary" sx={{ mb: 2 }} onClick={handleEventTypeCreateBt} id={EventTypesEnum.concentration} disabled>
        Concentración de motos
      </Button>
      <Button variant="contained" color="primary" sx={{ mb: 2 }} onClick={handleEventTypeCreateBt} id={EventTypesEnum.ruttwithfriends}>
        Ruta con amigos
      </Button>
      <Button variant="contained" color="primary" sx={{ mb: 2 }} onClick={handleEventTypeCreateBt} id={EventTypesEnum.importfrommaps} disabled>
        Importar ruta de GoogleMaps
      </Button>
      <Button variant="contained" color="primary" onClick={handleEventTypeCreateBt} id={EventTypesEnum.newapplicationrutt} disabled>
        Crear una ruta para la aplicación
      </Button>
    </Box>
  );
};

export default CreateEventType;
