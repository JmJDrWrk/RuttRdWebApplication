import React, { useState } from "react";
import { styled } from "@mui/system";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader"
import { useNavigate } from "react-router-dom";

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
    navigate('/ProfileOther/published/'+event.target.getAttribute('itemid'))
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
              itemID={photo.id}
              src={"https://source.unsplash.com/random?" +photo.id}
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
const ProfileComponent = ({ profile }) => {
  const me = profile
  const [username, setUsername] = useState(profile.user.name)
  const [profilePhoto, setProfilePhoto] = useState(`https://ruttradarvalkiria.jmjdrwrk.repl.co/file/${me.user.profilePhoto}`);
  const [bio, setBio] = useState(profile.user.bio)
  const [attachments, setAttachments] = useState(profile.user.attachments)


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
        <PhotoGallery attachments={attachments} />
      </Paper>
    </ProfileContainer>
  );
};

export default ProfileComponent;
