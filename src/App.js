import "./styles.css";
import { StrictMode } from "react";
// import { BrowserRouter as Route, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./screens/Auth";
import Favorites from "./screens/Favorites";
import InitialView from "./screens/InitialView";
import Nearby from "./screens/Nearby";
import NotFoundError from "./screens/NotFoundError";
import Profile from "./screens/Profile";
import Recent from "./screens/Recent";
import Search from "./screens/Search";
import Settings from "./screens/Settings";
import SignIn from "./screens/SignUp";
import UploadRutt from "./screens/UploadRutt";
import SignUp from "./components/mui/SignIn";
import ProfileOther from "./screens/ProfileOther";
import Published from "./screens/Published"
import CreateRutt from "./screens/CreateRutt";
import EditRutt from "./screens/EditRutt"
import CreateEvent from "./screens/CreateEvent";
import RuttView from "./screens/RuttView";
import Explore from "./screens/Explore.js"
import ExploreDetail from "./screens/ExploreDetail.js"
import CheckingAuth from "./screens/CheckingAuth"
import { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple, teal } from '@mui/material/colors';
import UsersAPI from "./api/UsersAPI";
import Header from "./components/mui/Header";
import Footer from "./components/mui/Footer";

//TOastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Define your dark theme
const lightBlack = createTheme({
  palette: {
    primary: {
      main: '#000000', // black color
    },
    background: {
      default: '#FFFFFF', // white color
    },
  },
});
const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#212121', // darker black color
    },
    background: {
      default: '#000000', // black color
    },
    text: {
      primary: '#FFFFFF', // white color for text
    },
  },
});

const checkAuth = async () => {
  if(!(!localStorage.getItem('auth-token'))){
    const { succeeded } = await new UsersAPI().getMe();
    if (!succeeded) {
      localStorage.removeItem('auth-token')
      return false;
    }
  }
  return !(!localStorage.getItem('auth-token'));
};

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    
    const authenticate = async () => {
      const authenticated = await checkAuth();
      setIsAuthenticated(authenticated);
    };

    authenticate();
  }, []);
  return (
    <ThemeProvider theme={lightBlack}>
      
      <ToastContainer />

      {!isAuthenticated ?

        <StrictMode>
          <BrowserRouter>
            <Routes>
              <Route path="/" exact element=<Auth />></Route>
              <Route path="/Auth" exact element=<Auth />></Route>
              <Route path="/SignUp" exact element=<SignUp />></Route>
              <Route path="/*" element=<CheckingAuth /> />
            </Routes>
          </BrowserRouter>
        </StrictMode>

        :

        <StrictMode>
          <BrowserRouter>
          <Header></Header>
            <Routes>
              <Route path="/" exact element=<InitialView />></Route>
              <Route path="/Auth/" exact element=<Auth />></Route>
              <Route path="/Favorites/" exact element=<Favorites />></Route>
              <Route path="/InitialView/" exact element=<InitialView />></Route>
              <Route path="/Nearby/" exact element=<Nearby />></Route>
              <Route path="/NotFoundError/" exact element=<NotFoundError />></Route>
              <Route path="/Profile/" exact element=<Profile />></Route>
              <Route path="/ProfileOther/:email" exact element=<ProfileOther />></Route>
              <Route path="/ProfileOther/:email/published/:publishid" exact element=<Published />></Route>
              <Route path="/Recent/" exact element=<Recent />></Route>
              <Route path="/Search/" exact element=<Search />></Route>
              <Route path="/Settings/" exact element=<Settings />></Route>
              <Route path="/SignIn/" exact element=<SignIn />></Route>
              <Route path="/UploadRutt/" exact element=<UploadRutt />></Route>
              <Route path="/CreateRutt/" exact element=<CreateRutt />></Route>
              <Route path="/CreateEvent/" exact element=<CreateEvent />></Route>
              <Route path="/Rutt/:ruttId" exact element=<EditRutt />></Route>
              <Route path="/RuttView/:ruttId" exact element=<RuttView />></Route>
              // Prototype
              <Route path="/Explore/" exact element=<Explore />></Route>
              <Route path="/ExploreView/:ruttId" exact element=<ExploreDetail />></Route>
            </Routes>
            <Footer></Footer>
          </BrowserRouter>
        </StrictMode>

      }

    </ThemeProvider>
  )
}
