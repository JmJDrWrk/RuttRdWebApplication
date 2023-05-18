import React, { Component } from "react";
import styled, { css } from "styled-components";
import Header from "../components/mui/Header";
import WantToDoSomething from "../components/WantToDoSomething";
import MaterialButtonSuccess from "../components/MaterialButtonSuccess";
import MaterialUnderlineTextbox2 from "../components/MaterialUnderlineTextbox2";
import MaterialUnderlineTextbox3 from "../components/MaterialUnderlineTextbox3";
import MaterialButtonViolet from "../components/MaterialButtonViolet";
import MaterialUnderlineTextbox4 from "../components/MaterialUnderlineTextbox4";
import Footer from "../components/mui/Footer";

function SignIn(props) {
  return (
    <>
      <MaterialHeader2
        style={{
          height: 56,
          width: 375,
          marginTop: 42
        }}
      ></MaterialHeader2>
      <Group>
        <WantToDoSomethingStack>
          <WantToDoSomething
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: 58,
              width: 281
            }}
          ></WantToDoSomething>
          <AlreadyRegistered>Already Registered?</AlreadyRegistered>
          <MaterialButtonSuccess
            style={{
              height: 36,
              width: 100,
              position: "absolute",
              backgroundColor: "rgba(58,58,58,1)",
              top: 11,
              left: 174
            }}
          ></MaterialButtonSuccess>
        </WantToDoSomethingStack>
      </Group>
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
          marginTop: 34,
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
          marginTop: 53,
          marginLeft: 87,
          borderStyle: "solid"
        }}
      ></MaterialUnderlineTextbox3>
      <MaterialButtonViolet
        style={{
          height: 36,
          width: 100,
          backgroundColor: "rgba(255,255,255,1)",
          borderRadius: 9,
          marginTop: 29,
          marginLeft: 135
        }}
      ></MaterialButtonViolet>
      <MaterialUnderlineTextbox4
        style={{
          height: 36,
          width: 195,
          backgroundColor: "rgba(237,237,237,1)",
          borderWidth: 1,
          borderColor: "rgba(217,211,211,1)",
          borderRadius: 10,
          marginTop: -143,
          marginLeft: 87,
          borderStyle: "solid"
        }}
      ></MaterialUnderlineTextbox4>
      <MaterialIconTextButtonsFooter
        style={{
          height: 56,
          width: 375,
          marginTop: 436
        }}
      ></MaterialIconTextButtonsFooter>
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
