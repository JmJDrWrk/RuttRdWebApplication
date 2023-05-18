import React, { Component } from "react";
import styled, { css } from "styled-components";
import Header from "../components/mui/Header";
import Footer from "../components/mui/Footer";

function Favorites(props) {
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
    </>
  );
}

export default Favorites;
