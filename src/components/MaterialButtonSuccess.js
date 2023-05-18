import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialButtonSuccess(props) {
  return (
    <Container {...props}>
      <LogIn>{props.logIn || "Log In"}</LogIn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: #009688;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 12px;
  min-width: 88px;
  padding-left: 16px;
  padding-right: 16px;
  box-shadow: 0px 1px 5px  0.35px #000 ;
`;

const LogIn = styled.span`
  font-family: Roboto;
  color: #fff;
  font-size: 14px;
  margin: 0px;
`;

export default MaterialButtonSuccess;
