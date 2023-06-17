import React, { Component } from "react";
import styled, { css } from "styled-components";
import Header from "../components/mui/Header";
import Footer from "../components/mui/Footer";


function Nearby(props) {
  return (
    <>
<Header/>
<Footer/>
      <MaterialMapView
        style={{
          width: 375,
          height: 637,
          marginTop: -693
        }}
      ></MaterialMapView>
    </>
  );
}

export default Nearby;
