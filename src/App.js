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
const checkAuth = () => {
  return !(!localStorage.getItem('auth-token'))
}
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple, teal } from '@mui/material/colors';

// Define your dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: purple[500],
    },
    secondary: {
      main: teal[500],
    },
  },
});
const lightBlackTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#000',
      paper: '#111',
    },
    text: {
      primary: '#FFF',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
});
export default function App() {
  const isAuthenticated = checkAuth(); // Replace checkAuth with your authentication logic

  return (
    <ThemeProvider theme={darkTheme}>
      {!isAuthenticated ?

        <StrictMode>
          <BrowserRouter>
            <Routes>
              <Route path="/" exact element=<Auth />></Route>
              <Route path="/Auth" exact element=<Auth />></Route>
              <Route path="/SignUp" exact element=<SignUp />></Route>
              <Route path='*' exact={true} element=<NotFoundError /> />
            </Routes>
          </BrowserRouter>
        </StrictMode>

        :

        <StrictMode>
          <BrowserRouter>
            <Routes>
              <Route path="/" exact element=<InitialView />></Route>
              <Route path="/Auth/" exact element=<Auth />></Route>
              {/* <Route path="/RuttView/" exact element=<RuttView />></Route> */}
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
            </Routes>
          </BrowserRouter>
        </StrictMode>

      }
    </ThemeProvider>
  )
}
