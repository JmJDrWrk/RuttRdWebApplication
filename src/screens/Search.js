import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialHeader2 from "../components/MaterialHeader2";
import MaterialSearchBar from "../components/MaterialSearchBar";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";
import MaterialCard3 from "../components/MaterialCard3";

function Search(props) {
  return (
    <>
      <MaterialHeader1Stack>
        <MaterialHeader2
          style={{
            height: 56,
            width: 375,
            position: "absolute",
            left: 0,
            top: 0
          }}
        ></MaterialHeader2>
        <MaterialSearchBar
          style={{
            height: 56,
            width: 375,
            position: "absolute",
            left: 0,
            top: 0
          }}
        ></MaterialSearchBar>
      </MaterialHeader1Stack>
      <MaterialIconTextButtonsFooter
        style={{
          height: 56,
          width: 375,
          marginTop: 637
        }}
      ></MaterialIconTextButtonsFooter>
      <MaterialCard3
        style={{
          height: 344,
          width: 361,
          borderRadius: 17,
          marginTop: -679,
          marginLeft: 7
        }}
      ></MaterialCard3>
    </>
  );
}

const MaterialHeader1Stack = styled.div`
  width: 375px;
  height: 56px;
  margin-top: 42px;
  position: relative;
`;

export default Search;
