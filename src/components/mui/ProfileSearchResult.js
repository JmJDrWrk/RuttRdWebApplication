import React from "react";
import styled from "styled-components";
import State from "../../api/state";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";

const ProfileCard = styled(Card)`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;

  .profile-info {
    flex-grow: 1;
    margin-left: 1rem;

    h3 {
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 0.25rem;
    }

    p {
      font-size: 0.875rem;
      color: #888888;
    }
  }
`;

function ProfileSearchResult({ profile }) {
  const navigate = useNavigate();
  // Function to handle profile click and redirect
  const handleProfileClick = (profileName) => {
    console.log('Navigating')
    navigate(`/ProfileOther/${profileName}`);
  };
  return (
    <ProfileCard onClick={()=>{handleProfileClick(profile.email)}}>
      <Avatar src={State.fileshost + profile.profilePhoto} alt={profile.username} />
      <CardContent className="profile-info">
        <Typography variant="h6" component="h3">
          {profile.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {profile.surname}
        </Typography>
      </CardContent>
      {/* Add additional actions or information as needed */}
    </ProfileCard>
  );
}

export default ProfileSearchResult;
