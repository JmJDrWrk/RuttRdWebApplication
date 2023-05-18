import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialHeader2 from "../components/MaterialHeader2";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";

function Recent(props) {
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

export default Recent;
