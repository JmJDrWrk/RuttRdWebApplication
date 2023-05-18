import React, { Component } from "react";
import styled, { css } from "styled-components";

function WantToDoSomething(props) {
  return <Container {...props}></Container>;
}

const Container = styled.div`
  background-color: #E6E6E6;
  border-radius: 9px;
`;

export default WantToDoSomething;
