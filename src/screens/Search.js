import React, { Component } from "react";
import styled, { css } from "styled-components";
import Header from "../components/mui/Header";
import MaterialSearchBar from "../components/MaterialSearchBar";
import Footer from "../components/mui/Footer";
import MaterialCard3 from "../components/MaterialCard3";

function Search(props) {
  return (
    <>
    <Header/>
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
