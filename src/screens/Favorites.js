import React, { Component } from "react";
import styled, { css } from "styled-components";
import Header from "../components/mui/Header";
import Footer from "../components/mui/Footer";
import { Typography } from "@mui/material";
import FloatingAction from "../components/mui/utils/FloatingAction";
import Notification from "../components/mui/utils/Notification";
function Favorites(props) {
  return (
    <>
      <FloatingAction bottomSpacing={8}></FloatingAction>
      <Notification vertical="top" spacing={8} message="Not coded" displayForEver={false}></Notification>
    </>
  );
}

export default Favorites;
