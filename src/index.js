import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { BrowserRouter as Route, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Main from "./Main.js";
import Auth from "./screens/Auth";
import DetailView from "./screens/DetailView";
import Favorites from "./screens/Favorites";
import InitialView from "./screens/InitialView";
import Nearby from "./screens/Nearby";
import NotFoundError from "./screens/NotFoundError";
import Profile from "./screens/Profile";
import Recent from "./screens/Recent";
import Search from "./screens/Search";
import Settings from "./screens/Settings";
import SignIn from "./screens/SignIn";
import UploadRutt from "./screens/UploadRutt";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element=<Auth />></Route>
        <Route path="/Auth/" exact element=<Auth />></Route>
        <Route path="/DetailView/" exact element=<DetailView />></Route>
        <Route path="/Favorites/" exact element=<Favorites />></Route>
        <Route path="/InitialView/" exact element=<InitialView />></Route>
        <Route path="/Nearby/" exact element=<Nearby />></Route>
        <Route path="/NotFoundError/" exact element=<NotFoundError />></Route>
        <Route path="/Profile/" exact element=<Profile />></Route>
        <Route path="/Recent/" exact element=<Recent />></Route>
        <Route path="/Search/" exact element=<Search />></Route>
        <Route path="/Settings/" exact element=<Settings />></Route>
        <Route path="/SignIn/" exact element=<SignIn />></Route>
        <Route path="/UploadRutt/" exact element=<UploadRutt />></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
