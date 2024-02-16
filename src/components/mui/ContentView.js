import React from 'react';
import { Container, Grid, Typography, Card, CardContent, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ContentView = ({ communityData, content }) => {
    const navigate = useNavigate();
    const handleContentClick = (id) => {
        navigate(`/content/${id}`);
    }

    return (
        <Container maxWidth="md">
            <Grid container spacing={2}>
                {/* <Grid container style={{ position: 'relative' }}>
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
                </Grid> */}

                <Grid item xs={12}>
                    {/* <div style={{ position: 'relative', textAlign: 'center' }}>
                        <img
                            src={communityData.bannerPhoto}
                            alt="logo"
                            style={{
                                height: '200px',
                                width: '100%',
                                display: 'block',
                                objectFit: 'cover'
                            }}
                        />
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', textAlign: 'center', color:'whi' }}>

                        </div>
                    </div>
                    <Typography variant="h4" gutterBottom>
                                {communityData.name}
                            </Typography>
                    <Typography variant="body1">
                        {communityData.description}
                    </Typography> */}
                    {/* <Typography variant="body1" color="textSecondary">
                        Location: {communityData.location}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        Tagged People: {communityData.taggedPeople}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        Join Type: {communityData.joinType === 'allowEveryone' ? 'Allow Everyone' : 'Accept Manually'}
                    </Typography> */}

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
                                marginTop: '30px',
                                marginBottom: '30px'
                            }}
                        />
                    </Grid>
                </Grid>

                {/* {events.map((event, index) => ( */}
                <Grid item xs={12} style={{marginTop:'40px'}}>
                    <Card variant="outlined" >
                        <CardContent>
                            <Typography variant="h6">
                                {content.title}
                            </Typography>
                            <Typography variant="body1">
                                {content.description}
                            </Typography>
                            <img
                                src={content.photo}
                                alt="Banner"
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                            <Typography variant="body1">
                                {content.summary}
                            </Typography>
                        </CardContent>
                        <Button variant="contained" component="span" style={{ float: 'right', marginRight: '10px', marginBottom: '10px' }}>
                            unirse
                        </Button>
                    </Card>
                </Grid>


            </Grid>
        </Container>
    );
};

export default ContentView;
