import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";

function MaterialChipWithCloseButton(props) {
  return (
    <Container {...props}>
      <ChipText>Example Chip</ChipText>
      <MaterialCommunityIconsIcon
        name="close-circle"
        style={{
          color: "#9E9E9E",
          fontSize: 24,
          marginLeft: 4,
          marginRight: 4
        }}
      ></MaterialCommunityIconsIcon>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #E0E0E0;
  padding-left: 12px;
  border-radius: 50px;
`;

const ChipText = styled.span`
  font-family: Arial;
  font-size: 13px;
  color: rgba(0,0,0,0.87);
`;

export default MaterialChipWithCloseButton;
