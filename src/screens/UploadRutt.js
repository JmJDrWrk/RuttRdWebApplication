import React, { Component } from "react";
import styled, { css } from "styled-components";
import Header from "../components/mui/Header";
import Footer from "../components/mui/Footer";
import UploadPhotoForm from "../components/mui/UploadPhotoForm"
import CreateEventForm from "../components/mui/CreateEventForm"
function UploadRutt(props) {
  return (
    <>
      <Header />
        {/* <UploadPhotoForm></UploadPhotoForm> */}
        <CreateEventForm></CreateEventForm>
      <Footer />
    </>
  );
}



export default UploadRutt;
