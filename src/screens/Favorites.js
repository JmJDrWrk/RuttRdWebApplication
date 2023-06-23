import React, { Component } from "react";
import styled, { css } from "styled-components";
import Header from "../components/mui/Header";
import Footer from "../components/mui/Footer";
import { Typography } from "@mui/material";
import FloatingAction from "../components/mui/utils/FloatingAction";
import Notification from "../components/mui/utils/Notification";
function Favorites(props) {
  const opt = {
    vertical: 'bottom',
    spacing: 8,
    message: 'Not coded',
    displayForEver: false,
    lifetime: 1000,
    severity: 'info'
  }
  return (
    <>
      <Notification properties={opt}></Notification>
    </>
  );
}

export default Favorites;
