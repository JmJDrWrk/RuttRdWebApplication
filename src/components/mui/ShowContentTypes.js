import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import EventTypesEnum from '../../models/EventTypesEnum';
import { useNavigate, useParams } from 'react-router-dom';
import NavigationPaths from '../../models/NavigationPaths';
const ShowContentTypes = () => {
  const navigate = useNavigate();
  const { communityName } = useParams();
  const handleEventTypeCreateBt = (event) => {
    const eventTypeEnum = event.target.id
    console.log('target_:? ' + eventTypeEnum)
    if (eventTypeEnum == "motomeeting") {
      navigate(`/weare/${communityName}/content/create/motomeeting`)
    }
    if (eventTypeEnum == "announcenew") {
      navigate(`/weare/${communityName}/content/create/announcenew`)
    }
    // if(eventTypeEnum == EventTypesEnum.importfrommaps){
    //   navigate(NavigationPaths.uploadImportedFromMaps)

    // }
    // if(eventTypeEnum == EventTypesEnum.publishcontent){
    //   navigate(NavigationPaths.content)

    // }
    // if(eventTypeEnum == EventTypesEnum.community){
    //   navigate(NavigationPaths.createCommunity)

    // }
    // if(eventTypeEnum == EventTypesEnum.newapplicationrutt){
    //   navigate(NavigationPaths.uploadNewApplicationRutt)

    // }
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
        Elige un tipo de contenido
      </Typography>
      <br></br>
      <Button variant="contained" color="primary" sx={{ mb: 2 }} onClick={handleEventTypeCreateBt} id="motomeeting" >
        Quedada de motos
      </Button>
      <Button variant="contained" color="primary" sx={{ mb: 2 }} onClick={handleEventTypeCreateBt} id="announcenew" disabled>
        Anunciar noticia
      </Button>
      {/* <Button variant="contained" color="primary" sx={{ mb: 2 }} onClick={handleEventTypeCreateBt} id={EventTypesEnum.publishcontent}>
        Image Content
      </Button>
      <Button variant="contained" color="primary" onClick={handleEventTypeCreateBt} id={EventTypesEnum.newapplicationrutt} disabled>
        Crear una ruta para la aplicación
      </Button> */}
    </Box>
  );
};

export default ShowContentTypes;
