import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialButtonViolet(props) {
  return (
    <Container {...props}>
      <SignIn>Sign In</SignIn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(255,255,255,1);
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 2px;
  min-width: 88px;
  padding-left: 16px;
  padding-right: 16px;
  border-width: 1px;
  border-color: #000000;
  border-style: solid;
  box-shadow: 0px 1px 5px  0.35px #000 ;
`;

const SignIn = styled.span`
  font-family: Roboto;
  color: rgba(0,0,0,1);
  font-size: 14px;
`;

export default MaterialButtonViolet;
