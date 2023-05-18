import React, { Component } from "react";
import styled, { css } from "styled-components";
import WantToDoSomething from "../components/WantToDoSomething";
import MaterialButtonSuccess from "../components/MaterialButtonSuccess";
import MaterialUnderlineTextbox2 from "../components/MaterialUnderlineTextbox2";
import MaterialUnderlineTextbox3 from "../components/MaterialUnderlineTextbox3";
import MaterialButtonViolet from "../components/MaterialButtonViolet";
import MaterialUnderlineTextbox4 from "../components/MaterialUnderlineTextbox4";
import Header from "../components/mui/Header";
import Footer from "../components/mui/Footer";
import SignInForm from "../components/mui/SignIn"
function SignIn(props) {
  return (
    <>
      <Header/>
        <SignInForm></SignInForm>
      <Footer/>
    </>
  );
}

const Group = styled.div`
  width: 281px;
  height: 58px;
  flex-direction: column;
  display: flex;
  margin-top: 530px;
  margin-left: 47px;
`;

const AlreadyRegistered = styled.span`
  font-family: Roboto;
  top: 21px;
  left: 15px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
`;

const WantToDoSomethingStack = styled.div`
  width: 281px;
  height: 58px;
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
  margin-top: -551px;
  margin-left: 66px;
`;

export default SignIn;
