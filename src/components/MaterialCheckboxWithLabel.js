import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";

function MaterialCheckboxWithLabel(props) {
  return (
    <Container {...props}>
      <MaterialCommunityIconsIcon
        name={props.checked ? "checkbox-marked" : "checkbox-blank-outline"}
        style={{
          color: "#3F51B5",
          fontSize: 28,
          lineHeight: "28px"
        }}
      ></MaterialCommunityIconsIcon>
      <Free4All>{props.label || "Free4All"}</Free4All>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: transparent;
  flex-direction: row;
`;

const Free4All = styled.span`
  font-family: Arial;
  margin-left: 2px;
  font-size: 16px;
  color: rgba(0,0,0,0.87);
`;

export default MaterialCheckboxWithLabel;
