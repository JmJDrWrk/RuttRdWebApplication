import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";

function MaterialButtonShare(props) {
  return (
    <Container {...props}>
      <MaterialCommunityIconsIcon
        name="cards-heart"
        style={{
          color: "rgba(206,29,29,1)",
          fontSize: 24,
          alignSelf: "center"
        }}
      ></MaterialCommunityIconsIcon>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 28px;
  min-width: 40px;
  min-height: 40px;
  flex-direction: column;
`;

export default MaterialButtonShare;
