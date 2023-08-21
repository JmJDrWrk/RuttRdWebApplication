import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
  Grid,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';


const MAX_DESCRIPTION_LINES = 4; // Change this value to the desired maximum lines



const RuttGalleryPrototype = ({ routes }) => {
  const navigate = useNavigate();
  const handleRuttClick = (e) => {
    navigate('/ExploreView/' + e.target.getAttribute('accessKey'))
  }

  return (
    <Grid container spacing={2}>
      {routes.map((route) => (
        <Grid item key={route._id} xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={route.photos[route.photos.length - 1].imageUrl}
              alt={route.photos[route.photos.length - 1].altText}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {route.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{
                  maxHeight: `${MAX_DESCRIPTION_LINES * 1.5}em`, // Approximate line height
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: MAX_DESCRIPTION_LINES,
                }}
              >
                {route.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={handleRuttClick} accessKey={route._id} target="_blank">
                View Route
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default RuttGalleryPrototype;
