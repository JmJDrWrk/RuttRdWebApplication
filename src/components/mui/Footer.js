import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate, useLocation } from "react-router-dom";
export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");
  const navigate = useNavigate();
  const actions = {
    "home": () => { navigate("/InitialView") },
    "explore": () => { navigate("/Search") },
    "me": () => { navigate("/UploadRutt") },
    "favorite": () => { navigate("/Favorites") },
    "profile": () => { navigate("/Profile") }
  }
  const handleChange = (event, newValue) => {
    window.localStorage.setItem('newValue', newValue)
    setValue(newValue);
    actions[newValue]()
  };

  return (
    <BottomNavigation
      sx={{ width: "auto", position: "fixed", bottom: 0, left: 0, right: 0 }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Explore" value="explore" icon={<SearchIcon />}/>
      <BottomNavigationAction label="Me" value="me" icon={<AddIcon />} />
      <BottomNavigationAction label="Favorites" value="favorite" icon={<FavoriteIcon />}/>
      <BottomNavigationAction label="Profile" value="profile" icon={<AccountCircleIcon />}/>
    </BottomNavigation>
  );
}
