import React, { useEffect, useState } from "react";
import styled from "styled-components";
import State from "../../api/state";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import { Menu, MenuItem } from "@mui/material";
import { MoreVert as MoreVertIcon } from "@mui/icons-material";
import { ToastContainer, toast } from 'react-toastify';


//Prototype
import io from "socket.io-client"; // Import the socket.io-client library
const socket = io("https://locationsocket.jmjdrwrk.repl.co/", {
  transports: ["websocket"],
  secure: true,
  rejectUnauthorized: false,
  auth: {
    token: State.getToken()
  }
});
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
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null)
  const handleProfileClick = (profileName) => {
    console.log("Navigating");
    navigate(`/ProfileOther/${profileName}`);
  };

  const handleContextMenuOpen = (e) => {
    e.preventDefault();
    setMenuAnchorEl(e.currentTarget);
  };

  const handleContextMenuClose = (e) => {
    try {
      const actions = {
        'requestposition': (bucket) => {
          requestUserPosition(bucket)
        },
        'trackinmap': (accessKey) => {
          
        }
      }
      const accessKey = e.target.getAttribute('accessKey')
      actions[e.target.getAttribute('itemID')](accessKey)
      setMenuAnchorEl(null);
    } catch (err) {
      console.error('[Search][Menu] MissClick')
    }
  };

  //ACTIONS
  const requestUserPosition = (to) => {
    console.log('Requesting someone location', to)
    socket.emit('requestLocation', { 'requested': to })
  }


  const playBeep = () => {
    var audioCtx = new (window.AudioContext || window.webkitAudioContext || window.audioContext);
    var oscillator = audioCtx.createOscillator();
    var gainNode = audioCtx.createGain();
    var duration = 1000
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    //if (volume){gainNode.gain.value = 10;}
    //if (frequency){oscillator.frequency.value = 400;}
    // if (type){oscillator.type = type;}
    //if (callback){oscillator.onended = callback;}
    oscillator.frequency.value = 900;
    oscillator.start(audioCtx.currentTime);
    oscillator.stop(audioCtx.currentTime + ((duration || 500) / 1000));
  };
  useEffect(() => {
    const handleLocationResponse = (bucket) => {
      console.log('bucket', bucket);
      toast.dismiss(); // Dismiss any existing toasts
      toast.success(`${bucket.requested} is in ${bucket.address}`, {
        position: toast.POSITION.TOP_RIGHT,
        // Other options
      });
      setCurrentLocation(bucket.address)
    };

    socket.on('locationResponse', handleLocationResponse);

    return () => {
      socket.off('locationResponse', handleLocationResponse);
    };
  }, []);

  return (
    <ProfileCard

      onContextMenu={handleContextMenuOpen}
    >
      <Avatar src={State.fileshost + profile.profilePhoto} alt={profile.username} />
      <CardContent className="profile-info"
        onClick={() => {
          handleProfileClick(profile.email);
        }}>
        <Typography variant="h6" component="h3">
          {profile.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {currentLocation}
        </Typography>
      </CardContent>
      <MoreVertIcon
        style={{ marginLeft: "auto", cursor: "pointer" }}
        onClick={handleContextMenuOpen}
      />
      <Menu
        anchorEl={menuAnchorEl}
        open={Boolean(menuAnchorEl)}
        onClose={handleContextMenuClose}
      >
        {/* <MenuItem onClick={handleContextMenuClose}>Follow</MenuItem> */}
        {/* <MenuItem onClick={handleContextMenuClose}>Message</MenuItem> */}
        <MenuItem onClick={handleContextMenuClose} itemID="requestposition" accessKey={profile.email}>Request position</MenuItem>
        <MenuItem onClick={handleContextMenuClose} itemID="trackinmap" accessKey={profile.email}>Track in map</MenuItem>
        {/* <MenuItem onClick={handleContextMenuClose}>Report</MenuItem> */}
      </Menu>
    </ProfileCard>
  );
}

export default ProfileSearchResult;


// .put("Lat", lastLat)
// .put("Lng", lastLng)
// .put("Address", lastAddress)
// .put("Vacc", lastVacc)
// .put("Hacc", lastHacc)
// .put("Alt", lastAlt)
// .put("Speed", lastSpeed)
// .put("SpeedAcc", lastSpeedAcc)