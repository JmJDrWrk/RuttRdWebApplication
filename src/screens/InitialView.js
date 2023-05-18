import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";
import MaterialHeader2 from "../components/MaterialHeader2";
import "../skuba.css";
function InitialView(props) {
  return (
    <>
      <Rect></Rect>
      <MaterialIconTextButtonsFooter
        style={{
          height: 56,
          width: 375,
          marginTop: 472
        }}
      ></MaterialIconTextButtonsFooter>
      <MaterialHeader2
        style={{
          height: 56,
          width: 375,
          marginTop: -749
        }}
      ></MaterialHeader2>
    </>
  );
}

const Rect = styled.div`
  width: 100px;
  height: 100px;
  background-color: #e6e6e6;
  margin-top: 163px;
  margin-left: -318px;
`;

export default InitialView;
