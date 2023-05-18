import React, { Component } from "react";
import styled, { css } from "styled-components";
import Header from "../components/mui/Header";
import MaterialSearchBar from "../components/MaterialSearchBar";
import Footer from "../components/mui/Footer";
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
<Footer/>
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
