import React, { useEffect, useState } from 'react';
import { Button, Box, Typography, Dialog, DialogTitle, DialogContent, Select, MenuItem, DialogActions } from '@mui/material';
import EventTypesEnum from '../../models/EventTypesEnum';
import { useNavigate } from 'react-router-dom';
import NavigationPaths from '../../models/NavigationPaths';
import API_community from '../../api/API_community';
const CreateEventType = () => {
  const navigate = useNavigate();

  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const handleEventTypeCreateBt = (event) => {
    const eventTypeEnum = event.target.id
    console.log('target_:? ' + eventTypeEnum)
    if (eventTypeEnum == EventTypesEnum.concentration) {
      navigate(NavigationPaths.uploadConcentration)
    }
    if (eventTypeEnum == EventTypesEnum.ruttwithfriends) {
      navigate(NavigationPaths.uploadRutt)

    }
    if (eventTypeEnum == EventTypesEnum.importfrommaps) {
      navigate(NavigationPaths.uploadImportedFromMaps)

    }
    if (eventTypeEnum == EventTypesEnum.publishcontent) {
      // navigate(NavigationPaths.content)
      navigate(`/weare/${communityName}/content/create`)

    }
    if (eventTypeEnum == EventTypesEnum.community) {
      navigate(NavigationPaths.createCommunity)

    }
    if (eventTypeEnum == EventTypesEnum.newapplicationrutt) {
      navigate(NavigationPaths.uploadNewApplicationRutt)

    }
  }

  const handleConfirmationClose = () => {
    setIsConfirmationOpen(false);
  };

  const [selectedCommunity, setSelectedCommunity] = useState('');
  const [communities, setCommunities] = useState([]);


  useEffect(() => {
    // Fetch communities from API
    new API_community().getMyCommunities()
      .then(data => {
        setCommunities(data); // Assuming data is an array of communities
      })
      .catch(error => {
        console.error('Error fetching communities:', error);
      });
  }, []);

  const handleChange = (event) => {
    setSelectedCommunity(event.target.value);
  };

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
      <Button variant="contained" color="primary" sx={{ mb: 2 }} onClick={handleEventTypeCreateBt} id={EventTypesEnum.community}>
        Crear Comunidad
      </Button>
      {/* <Button variant="contained" color="primary" sx={{ mb: 2 }} onClick={handleEventTypeCreateBt} id={EventTypesEnum.ruttwithfriends} disabled>
        Ruta con amigos
      </Button> */}
      {/* <Button variant="contained" color="primary" sx={{ mb: 2 }} onClick={handleEventTypeCreateBt} id={EventTypesEnum.publishcontent} >
        Contenido Comunidad
      </Button> */}
      <Button variant="contained" color="primary" onClick={(event) => { setIsConfirmationOpen(true); handleEventTypeCreateBt(event); }}>
        Contenido comunidad
      </Button>
      <Dialog open={isConfirmationOpen} onClose={handleConfirmationClose}>
        <DialogTitle>Seleccione una comunidad</DialogTitle>
        <DialogContent>
          <Select
            value={selectedCommunity}
            onChange={handleChange}
            fullWidth
            label="Comunidad"
          >
            {communities.map(community => (
              <MenuItem key={community.name} value={community.name} onClick={()=>{navigate(`/weare/${community.name}/content/create`)}}>
                {community.name}
              </MenuItem>
            ))}
          </Select>
        </DialogContent>

        {/* <DialogActions>
          <Button onClick={()=>{navigate(`/weare/${}`)}} color="primary">
            Navegar hasta
          </Button>
        </DialogActions> */}
      </Dialog>
    </Box>
  );
};

export default CreateEventType;
