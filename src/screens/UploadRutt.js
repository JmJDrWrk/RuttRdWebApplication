import React, { Component } from "react";
import styled, { css } from "styled-components";
import Header from "../components/mui/Header";
import Footer from "../components/mui/Footer";
import MaterialUnderlineTextbox6 from "../components/MaterialUnderlineTextbox6";
import MaterialIconTextbox3 from "../components/MaterialIconTextbox3";
import MaterialIconTextbox4 from "../components/MaterialIconTextbox4";
import MaterialIconTextbox5 from "../components/MaterialIconTextbox5";
import MaterialCheckboxWithLabel from "../components/MaterialCheckboxWithLabel";
import MaterialCheckboxWithLabel1 from "../components/MaterialCheckboxWithLabel1";
import MaterialButtonShare1 from "../components/MaterialButtonShare1";
import UploadPhotoForm from "../components/mui/UploadPhotoForm"
import CreateEventForm from "../components/mui/CreateEventForm"
function UploadRutt(props) {
  return (
    <>
      <Header />
        {/* <UploadPhotoForm></UploadPhotoForm> */}
        <UploadEventForm></UploadEventForm>
      <Footer />
    </>
  );
}



export default UploadRutt;
