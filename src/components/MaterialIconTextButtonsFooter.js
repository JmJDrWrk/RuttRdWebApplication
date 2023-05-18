import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialIconTextButtonsFooter4 from "./MaterialIconTextButtonsFooter4";

function MaterialIconTextButtonsFooter(props) {
  return (
    <Container {...props}>
      <MaterialIconTextButtonsFooter4
        style={{
          height: 56,
          width: 375
        }}
      ></MaterialIconTextButtonsFooter4>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: #FFF;
  flex-direction: column;
  box-shadow: 0px -2px 1.2px  0.2px #111 ;
`;

export default MaterialIconTextButtonsFooter;
