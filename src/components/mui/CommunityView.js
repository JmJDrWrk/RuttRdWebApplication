import React from 'react';
import { Container, Grid, Typography, Card, CardContent, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { MoreVert } from '@mui/icons-material';

const CommunityView = ({ communityData, photos, events }) => {
    const navigate = useNavigate();

    const handleContentClick = (id) => {
        navigate(`content/${id}`);
    }
    return (
        <Container maxWidth="md">
            <Grid container spacing={2}>
                <Grid container style={{ position: 'relative' }}>
                    <img
                        src={communityData.bannerPhoto}
                        alt="Banner"
                        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                    />

                    <img
                        src={communityData.logoPhoto}
                        alt="logo"
                        style={{
                            width: '200px',
                            height: '200px',
                            objectFit: 'cover',
                            borderRadius: '100px',
                            position: 'absolute',
                            left: '50%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                            paddingTop: '10px',
                            paddingBottom: '10px'
                        }}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom>
                        {communityData.name}
                    </Typography>
                    <Typography variant="body1">
                        {communityData.description}
                    </Typography>
                    {/* <Typography variant="body1" color="textSecondary">
                        Location: {communityData.location}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        Tagged People: {communityData.taggedPeople}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        Join Type: {communityData.joinType === 'allowEveryone' ? 'Allow Everyone' : 'Accept Manually'}
                    </Typography> */}
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5" gutterBottom>
                        Eventos
                    </Typography>
                </Grid>
                {events.map((event, index) => (
                    <Grid item xs={12} key={index} >
                        <Card variant="outlined" onClick={() => handleContentClick(event._id)}>
                            <CardContent>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography variant="h6">
                                        {event.title}
                                    </Typography>
                                    <IconButton onClick={()=>{console.log('niidea')}}>
                                        <MoreVert />
                                    </IconButton>
                                </div>
                                <Typography variant="body1">
                                    {event.description}
                                </Typography>
                                <img
                                    src={event.photo}
                                    alt="Banner"
                                    style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                ))}


                <Grid item xs={12}>
                    <Typography variant="h5" gutterBottom>
                        Publicaciones
                    </Typography>
                </Grid>
                {photos.map((photo, index) => (
                    <Grid item xs={12} key={index}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant="h6">
                                    {photo.title}
                                </Typography>
                                <Typography variant="body1">
                                    {photo.description}
                                </Typography>
                                <img
                                    src={photo.photo}
                                    alt="Banner"
                                    style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                                />
                            </CardContent>
                        </Card>
                    </Grid>

                ))}
            </Grid>
        </Container>
    );
};

export default CommunityView;
