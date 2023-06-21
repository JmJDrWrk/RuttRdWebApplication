import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { BrowserRouter as Route, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Main from "./Main.js";
import Auth from "./screens/Auth";
import RuttView from "./screens/RuttView";
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
import { NotificationProvider } from "./NotificationContext";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <NotificationProvider>
    <App />
  </NotificationProvider>
);
