import React, { Component } from "react";
import styled, { css } from "styled-components";
import Header from "../components/mui/Header";
import Footer from "../components/mui/Footer";
import MaterialButtonViolet from "../components/MaterialButtonViolet";
import MaterialButtonSuccess from "../components/MaterialButtonSuccess";
import MaterialUnderlineTextbox2 from "../components/MaterialUnderlineTextbox2";
import MaterialUnderlineTextbox3 from "../components/MaterialUnderlineTextbox3";

function Auth(props) {
  return (
    <>
<Header/>
<Footer/>
      <Rect>
        <NotRegisteredRow>
          <NotRegistered>Not registered?</NotRegistered>
          <MaterialButtonViolet
            style={{
              height: 36,
              width: 100,
              backgroundColor: "rgba(255,255,255,1)",
              borderRadius: 9,
              marginLeft: 62
            }}
          ></MaterialButtonViolet>
        </NotRegisteredRow>
      </Rect>
      <MaterialButtonSuccessStack>
        <MaterialButtonSuccess
          style={{
            height: 36,
            width: 100,
            position: "absolute",
            backgroundColor: "rgba(58,58,58,1)",
            top: 0,
            left: 0
          }}
        ></MaterialButtonSuccess>
        <MaterialButtonSuccess
          style={{
            height: 36,
            width: 100,
            position: "absolute",
            backgroundColor: "rgba(58,58,58,1)",
            top: 0,
            left: 0
          }}
        ></MaterialButtonSuccess>
      </MaterialButtonSuccessStack>
      <RuttRadar>RuttRadar</RuttRadar>
      <MaterialUnderlineTextbox2
        style={{
          height: 35,
          width: 195,
          backgroundColor: "rgba(230, 230, 230,0.42)",
          borderRadius: 10,
          borderWidth: 1,
          borderColor: "rgba(217,211,211,1)",
          borderStyle: "solid",
          marginTop: 58,
          marginLeft: 87
        }}
      ></MaterialUnderlineTextbox2>
      <MaterialUnderlineTextbox3
        style={{
          height: 33,
          width: 195,
          backgroundColor: "rgba(230, 230, 230,0.64)",
          borderRadius: 10,
          overflow: "visible",
          borderWidth: 1,
          borderColor: "rgba(205,205,205,1)",
          marginTop: 14,
          marginLeft: 87,
          borderStyle: "solid"
        }}
      ></MaterialUnderlineTextbox3>
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
