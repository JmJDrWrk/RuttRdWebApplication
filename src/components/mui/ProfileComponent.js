import React, { useState } from "react";
import { styled } from "@mui/system";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

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

const ProfileComponent = () => {
  const me = JSON.parse(localStorage.getItem('me'))
  const [username, setUsername] = useState(me.user.name);
  const [password, setPassword] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(`https://ruttradarvalkiria.jmjdrwrk.repl.co/file/${me.user.profilePhoto}`);
  const [bio, setBio] = useState(me.user.bio || "Type here your bio");
  const [fileInput, setFileInput] = useState(null)
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleProfilePhotoChange = (event) => {
    setProfilePhoto(URL.createObjectURL(event.target.files[0]));
    setFileInput(event.target.files[0])
    console.log('event.target.files[0]', event.target.files[0])
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  // const updateFileInput = (event) => {
  //   console.log('event.target.value', value)
  //   setFileInput(event.target.value)
  // }

  const handleSubmit = (event) => {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    formData.append("bio", bio);
    formData.append("profilePhoto", fileInput, profilePhoto);
    formData.append("me",localStorage.getItem('me'))
    console.log(event.target)
    
    fetch("https://ruttradarvalkiria.jmjdrwrk.repl.co/users/profile", {
      method: "POST",
      body: formData,
      headers : {
        "auth-token": localStorage.getItem('auth-token')
      }
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle response from the server
        console.log(data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };
  

  return (
    <ProfileContainer maxWidth="sm">
      <ProfileAvatar alt="Profile Picture" src={profilePhoto} />
      <ProfileUsername variant="h6">{username}</ProfileUsername>
      <ProfileBio variant="body1">{bio}</ProfileBio>
      <input
        accept="image/*"
        id="profile-photo-upload"
        type="file"
        style={{ display: "none" }}
        onChange={handleProfilePhotoChange}
      />
      <label htmlFor="profile-photo-upload">
        <Button variant="outlined" component="span">
          Change Profile Photo
        </Button>
      </label>
      <TextField
        label="Username"
        value={username}
        onChange={handleUsernameChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Bio"
        multiline
        rows={4}
        value={bio}
        onChange={handleBioChange}
        fullWidth
        margin="normal"
      />
      <Button variant="outlined" color="primary" fullWidth onClick={handleSubmit}>
        Save Changes
      </Button>
      <Paper elevation={0}>
        {/* Additional profile information or posts */}
      </Paper>
    </ProfileContainer>
  );
};

export default ProfileComponent;
