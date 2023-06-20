import React, { Component } from "react";
import styled, { css } from "styled-components";
import Header from "../components/mui/Header";
import Footer from "../components/mui/Footer";
import UploadPhotoForm from "../components/mui/UploadPhotoForm"
import CreateEventForm from "../components/mui/CreateEventForm"
import CreateEventType from "../components/mui/CreateEventType"
function UploadRutt(props) {
  return (
    <>
        {/* <UploadPhotoForm></UploadPhotoForm> */}
        {/* <CreateEventType></CreateEventType> */}
        <CreateEventForm></CreateEventForm>
    </>
  );
}



export default UploadRutt;
