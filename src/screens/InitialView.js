import React, { Component } from "react";
import styled, { css } from "styled-components";
import Header from "../components/mui/Header";
import Footer from "../components/mui/Footer";
import "../skuba.css";
import Auth from "./Auth";


function InitialView(props) {

  return (
    <>
      <Header/>
      <Rect></Rect>
      <Footer />
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
