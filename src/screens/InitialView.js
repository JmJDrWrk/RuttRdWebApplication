import React, { Component, useEffect, useContext } from "react";
import styled, { css } from "styled-components";
import Header from "../components/mui/Header";
import Footer from "../components/mui/Footer";
import "../skuba.css";
import { IconButton, Typography } from "@mui/material";
import PositionedSnackbar from "../components/mui/utils/PositionedSnackbar";
import Notidication from '../components/mui/utils/Notification'
import FloatingAction from "../components/mui/utils/FloatingAction";
import RuttApi from "../api/RuttApi";
import { NotificationContext } from "../NotificationContext";
import { Button } from "react-native-web";
import { Box } from "@mui/system";
import State from "../api/state";
import { useNavigate } from "react-router-dom";

function InitialView(props) {
  const { show } = useContext(NotificationContext);
  const navigate = useNavigate()
  useEffect(() => {
    async function doFetch() {
      const { data, succeeded } = await (new RuttApi().notificationContext(show).findMyRutts())
      if(State.getUserIntention()){
        navigate(State.consumeUserIntention())
      }
    }
    doFetch()
  }, []);

  return (
    <>
    </>
  );
}

export default InitialView;
