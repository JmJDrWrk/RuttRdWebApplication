import React, { Component } from "react";
import styled, { css } from "styled-components";
import RuttPreview from "./RuttPreview";

function MaterialCard3(props) {
  return (
    <Container {...props}>
      <RuttPreview
        style={{
          height: 398,
          width: 357
        }}
      ></RuttPreview>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  border-width: 1px;
  border-radius: 2px;
  border-color: #CCC;
  flex-wrap: nowrap;
  background-color: #FFF;
  overflow: hidden;
  flex-direction: column;
  border-style: solid;
  box-shadow: -2px 2px 1.5px  0.1px #000 ;
`;

export default MaterialCard3;
