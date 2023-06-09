import React, { useState } from "react";
import { styled } from "@mui/system";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Menu, MenuItem, IconButton} from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader"
import { useNavigate } from "react-router-dom";
import { MoreVert } from "@mui/icons-material";

import State from "../../api/state";

const ProfileContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: theme.spacing(4),
}));

const ProfileAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(10),
  height: theme.spacing(10),
  marginBottom: theme.spacing(2),
}));

const ProfileUsername = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  marginBottom: theme.spacing(1),
}));

const ProfileBio = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const EditProfileButton = styled(Button)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));
const PhotoGallery = ({attachments}) => {
  // Replace with actual photo data for the profile
  console.log(attachments)
  if(!attachments || attachments.length<1){
    return <Typography variant="body1">User has not uploaded anything yet.</Typography>;
  }
  const navigate = useNavigate();
  const handlePhotoClick = (event) => {
    console.log(event.target.getAttribute('itemid'))
    navigate(location.pathname+'/published/'+event.target.getAttribute('itemid'))
  }

  return (
    <Grid container spacing={2}>
      {attachments.map((photo) => (
        <Grid item key={photo.id} xs={12} sm={6} md={4} onClick={handlePhotoClick}>
          {/* <CardHeader>
            <Typography variant="subtitle1" align="center">
                {photo.title}
              </Typography>
          </CardHeader> */}
          <Card style={{ border: "1px solid #fff" }}>
            <img
              // src={photo.src}
              itemID={photo.src}
              src={State.fileshost +  photo.src}
              alt="Profile Photo"
              style={{ width: "100%", height: "250px", objectFit: "cover" }}
            />
            {/* <CardContent>
              <Typography variant="subtitle1" align="center">
                {photo.title}
              </Typography>
            </CardContent> */}
          </Card>
        </Grid>
      ))}
    </Grid>

  );
};

const RuttGallery = ({ rutts }) => {
  if (!rutts || rutts.length < 1) {
    return <Typography variant="body1">User has not uploaded any rutt yet.</Typography>;
  }

  const navigate = useNavigate();
  const handleRuttClick = (event) => {
    console.log(event.currentTarget.getAttribute('itemid'));
    navigate('/Rutt/' + event.currentTarget.getAttribute('itemid'));
  };

  const handleDeleteRutt = (ruttId) => {
    // Call the API method to delete the rutt
    new RuttApi()
      .deleteRutt(ruttId)
      .then(() => {
        // Handle successful deletion, such as refreshing the gallery
        console.log('Rutt deleted successfully');
      })
      .catch((error) => {
        // Handle error, such as displaying an error message
        console.error('Error deleting rutt:', error);
      });
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container spacing={2}>
      {rutts.map((rutt) => (
        // <Grid item key={rutt._id} xs={12} sm={6} md={4} onClick={handleRuttClick}>
        <Grid item key={rutt._id} xs={12} sm={6} md={4}>
          <CardHeader>
            <Typography variant="subtitle1" align="center">
              {rutt.ruttData.name} ehh
            </Typography>
          </CardHeader>
          <div style={{ position: 'relative', top: '10px', right: '10px' }}>
              <IconButton onClick={handleClick}>
                <MoreVert />
              </IconButton>
              <Menu
                id={`menu-${rutt._id}`}
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={() => handleDeleteRutt(rutt._id)}>Delete</MenuItem>
              </Menu>
            </div>
          <Card style={{ border: '1px solid #fff' }}>
            <img
              src="https://zonegis.es/wp-content/uploads/2020/08/Imagen_05-699x556.jpg"
              itemID={rutt._id}
              alt="Profile Photo"
              style={{ width: '100%', height: '250px', objectFit: 'cover' }}
            />
            <CardContent>
              <Typography variant="subtitle1" align="center">
                {rutt.ruttData.name}
              </Typography>
            </CardContent>

          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

const ProfileComponent = ({ profile, rutts }) => {
  const me = profile
  const [username, setUsername] = useState(profile.name)
  const [profilePhoto, setProfilePhoto] = useState(`https://ruttradarvalkiria.jmjdrwrk.repl.co/file/${profile.profilePhoto}`);
  const [bio, setBio] = useState(profile.bio)
  const [attachments, setAttachments] = useState(profile.attachments)
  const [othersrutts, setOthersrutts] = useState(rutts)


  return (
    <ProfileContainer maxWidth="sm">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <ProfileAvatar alt="Profile Picture" src={profilePhoto} />
        </Grid>
        <Grid item xs={8} container direction="column">
          <Grid item>
            <ProfileUsername variant="h6">{username}</ProfileUsername>
          </Grid>
          <Grid item>
            <ProfileBio variant="body1">{bio}</ProfileBio>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item>
              <Typography variant="subtitle1">
                Followers: {profile.followers}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                Following: {profile.following}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                Total Posts: {profile.totalPosts}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <input
        accept="image/*"
        id="profile-photo-upload"
        type="file"
        contentEditable="false"
        style={{ display: "none" }}
        disabled
      />
      <Paper elevation={0}>
      <RuttGallery rutts={othersrutts}/>
      <PhotoGallery attachments={attachments} />
      </Paper>
    </ProfileContainer>
  );
};

export default ProfileComponent;
