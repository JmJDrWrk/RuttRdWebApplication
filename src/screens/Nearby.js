import React, { Component } from "react";
import styled, { css } from "styled-components";
import Header from "../components/mui/Header";
import Footer from "../components/mui/Footer";
import MaterialMapView from "../components/MaterialMapView";

function Nearby(props) {
  return (
    <>
      <MaterialHeader2
        style={{
          height: 56,
          width: 375,
          marginTop: 42
        }}
      ></MaterialHeader2>
      <MaterialIconTextButtonsFooter
        style={{
          height: 56,
          width: 375,
          marginTop: 637
        }}
      ></MaterialIconTextButtonsFooter>
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
