import React, { Component } from "react";
import styled, { css } from "styled-components";
import Header from "../components/mui/Header";
import Footer from "../components/mui/Footer";
import LogIn from "../components/mui/LogIn";


function Auth(props) {
  return (
    <>
      <LogIn></LogIn>
    </>
  );
}

const Rect = styled.div`
  width: 281px;
  height: 58px;
  background-color: #E6E6E6;
  border-radius: 9px;
  flex-direction: row;
  display: flex;
  margin-top: -162px;
  margin-left: 47px;
`;

const NotRegistered = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 10px;
`;

const NotRegisteredRow = styled.div`
  height: 36px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 6px;
  margin-left: 18px;
  margin-top: 11px;
`;

const MaterialButtonSuccessStack = styled.div`
  width: 100px;
  height: 36px;
  margin-top: -330px;
  margin-left: 135px;
  position: relative;
`;

const RuttRadar = styled.span`
  font-family: Inconsolata;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 51px;
  width: 243px;
  text-align: center;
  font-size: 49px;
  margin-top: -258px;
  margin-left: 66px;
`;

export default Auth;
