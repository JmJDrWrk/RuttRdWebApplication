import React, { Component } from "react";
import styled, { css } from "styled-components";
import Header from "../components/mui/Header";
import Footer from "../components/mui/Footer";
import SignInForm from "../components/mui/SignIn"
function SignIn(props) {
  return (
    <>
        <SignInForm></SignInForm>
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
