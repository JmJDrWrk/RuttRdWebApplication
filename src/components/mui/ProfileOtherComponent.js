import React, { useContext, useState } from "react";
import { styled } from "@mui/system";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Menu, MenuItem, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader"
import { useNavigate } from "react-router-dom";
import { MoreVert } from "@mui/icons-material";

import State from "../../api/state";
import RuttApi from "../../api/RuttApi";


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
const PhotoGallery = ({ attachments }) => {
  // Replace with actual photo data for the profile
  console.log(attachments)
  if (!attachments || attachments.length < 1) {
    return <Typography variant="body1">User has not uploaded anything yet.</Typography>;
  }
  const navigate = useNavigate();
  const handlePhotoClick = (event) => {
    console.log(event.target.getAttribute('itemid'))
    navigate(location.pathname + '/published/' + event.target.getAttribute('itemid'))
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
              src={State.fileshost + photo.src}
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


const ProfileComponent = ({ profile, rutts, show }) => {
  const me = profile
  const [username, setUsername] = useState(profile.name)
  const [profilePhoto, setProfilePhoto] = useState(`https://ruttradarvalkiria.jmjdrwrk.repl.co/file/${profile.profilePhoto}`);
  const [bio, setBio] = useState(profile.bio)
  const [attachments, setAttachments] = useState(profile.attachments)
  const [othersrutts, setOthersrutts] = useState(rutts)


  const RuttGallery = ({ rutts, profile, show }) => {
    if (!rutts || rutts.length < 1) {
      return <Typography variant="body1">User has not uploaded any rutt yet.</Typography>;
    }

    function ruttsBelongsMe() {
      return State.getMe().user.email === profile.email
    }
    const belongsMe = ruttsBelongsMe()
    const navigate = useNavigate();
    const handleRuttClick = (event) => {
      //If belongs or not to user will be checked in the Screen with the RouteMap Component and let user go to Rutt === 'the edit view'
      navigate('/Rutt/' + event.currentTarget.getAttribute('itemid'));
    };

    const handleDeleteRutt = async (ruttId) => {
      // Call the API method to delete the rutt
      const { data, succeeded } = await new RuttApi().notificationContext(show).deleteById(ruttId);
      setOthersrutts((await new RuttApi().findOthersRuttsByEmail(profile.email)).rutts)
      console.log('Rutt deletion: ', data, succeeded)
    };

    const [anchorEl, setAnchorEl] = useState(null);

    const handleContextMenu = (event) => {
      event.preventDefault(); // Prevent the default context menu from appearing
      setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = (event) => {
      const action = event.target.id

      const actions = {
        delete: (ruttId) => { handleDeleteRutt(ruttId) },
        share: (ruttId) => { navigator.clipboard.writeText('/RuttView/' + ruttId) },
        // export : (ruttId) => {alert('Export is not avaliable')},
        edit: (ruttId) => { navigate('/RuttView/' + ruttId); }
      }
      if (action) { actions[action](event.target.getAttribute('itemID')) }
      setAnchorEl(null);
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);



    const closeMenu = () => {
      setIsMenuOpen(false);
    };
    return (
      <Grid container spacing={2}>
        {rutts.map((rutt) => (
          <Grid item key={rutt._id} xs={12} sm={6} md={4}>
            <CardHeader>
              <Typography variant="subtitle1" align="center">
                {rutt.ruttData.name} ehh
              </Typography>
            </CardHeader>

            <Card style={{ border: '1px solid #fff' }}>
              <img
                src="https://zonegis.es/wp-content/uploads/2020/08/Imagen_05-699x556.jpg"
                itemID={rutt._id}
                alt="Profile Photo"
                style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                onContextMenu={handleContextMenu}
                onClick={handleRuttClick}

              />
              <CardContent>
                <Typography variant="subtitle1" align="center">
                  {rutt.ruttData.name}
                </Typography>
              </CardContent>
            </Card>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{
                elevation: 3,
                style: {
                  width: '200px',
                  marginTop: '10px',
                },
              }}
            >
              <MenuItem onClick={handleMenuClose} id='share' itemID={rutt._id}>share</MenuItem>
              <MenuItem onClick={handleMenuClose} id='delete' itemID={rutt._id}>delete</MenuItem>
              {/* <MenuItem onClick={handleMenuClose} id='export' itemID={rutt._id} disabled>export</MenuItem> */}
              {belongsMe ?
                <MenuItem onClick={handleMenuClose} id='edit' itemID={rutt._id}>edit</MenuItem> :
                false
              }

            </Menu>
          </Grid>
        ))}
      </Grid>
    );
  };
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
        <RuttGallery rutts={othersrutts} profile={profile} show={show} />
        <PhotoGallery attachments={attachments} />
      </Paper>
    </ProfileContainer>
  );
};

export default ProfileComponent;
