import * as React from "react";
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { ArrowBack } from "@mui/icons-material";
import LetterAvatar from "./LetterAvatar";
import { useNavigate, useLocation } from "react-router-dom";
import ServerApi from "../../api/api";
import { ImageBackground } from "react-native-web";
import { minHeight } from "@mui/system";
import State from "../../api/state";
function ResponsiveAppBar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [current, setCurrent] = React.useState({
    user : {
      email : '0'
    }
  })
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Fetch the user data from the /me endpoint and update the user name
    const fetchData = async() => {
      const res = await ServerApi.doGet('/users/me')
      if(!res.error){
        
        State.setMe(res)
        setCurrent(res)
      }
    }
    fetchData()
    .catch(console.error)
    
  }, []);
  const handleGoBack = () => {
    navigate(-1)
  }
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleProfileClick = (event) => {
    navigate('/Profile');
    handleCloseUserMenu();
  }
  const handleAccountClick = (event) => {
    navigate('/Account');
    handleCloseUserMenu();
  }
  const handleDashboardClick = (event) => {
    navigate('/Dashboard');
    handleCloseUserMenu();
  }
  const handleLogoutClick = (event) => {
    // navigate('/Logout');
    localStorage.removeItem('auth-token')
    State.logout()
    window.location.reload()
    handleCloseUserMenu();
  }
  const settings = [
  {
    name : "Profile",
    handler: handleProfileClick
  },
  {
    name : "Account",
    handler: handleAccountClick
  },
  {
    name : "Dashboard",
    handler: handleDashboardClick
  },
  {
    name :  "Logout",
    handler: handleLogoutClick
  },
];
  return (
    <AppBar position="static" sx={{backgroundColor: "black"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <TwoWheelerIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Consolas, monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
             RUTTRADAR
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              {/* <FavoriteBorderIcon /> */}
              <ArrowBack onClick={handleGoBack}></ArrowBack>
            </IconButton>

          </Box>
          <TwoWheelerIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Consolas, monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            RuttRadar
          </Typography>
          {/* <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box> */}

          <Box sx={{ flexGrow: 1, borderRadius:"17px", display: { xs: "none", md: "flex" }}}>
          {/* <Box sx={{ flexGrow: 1, backgroundColor: "#F9F9F9", margin: "20px", borderRadius: "17px", padding: "0px" ,display: { xs: "none", md: "flex" }}}> */}
            {/* <Typography
              variant="p"
              sx={{
                fontFamily: "Arial",
                fontWeight: 200,
                letterSpacing: ".3rem",
                color: "inherit",
              }}
            >
              {location.pathname}
            </Typography> */}
            {props.component}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                 */}
                 <LetterAvatar letter={current.user.email.charAt(0).toLocaleUpperCase()}></LetterAvatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting.name}
                  onClick={setting.handler}
                >
                  <Typography textAlign="center">{setting.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
