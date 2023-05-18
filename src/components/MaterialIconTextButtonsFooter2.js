import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";

function MaterialIconTextButtonsFooter2(props) {
  return (
    <Container {...props}>
      <ButtonWrapper1>
        <ButtonOverlay>
          <MaterialCommunityIconsIcon
            name="timer"
            style={{
              backgroundColor: "transparent",
              color: "#616161",
              fontSize: 24,
              opacity: 0.8
            }}
          ></MaterialCommunityIconsIcon>
        </ButtonOverlay>
      </ButtonWrapper1>
      <ActiveButtonWrapper>
        <ButtonOverlay>
          <MaterialCommunityIconsIcon
            name="heart"
            style={{
              backgroundColor: "transparent",
              color: "#3f51b5",
              fontSize: 24,
              opacity: 0.8
            }}
          ></MaterialCommunityIconsIcon>
        </ButtonOverlay>
      </ActiveButtonWrapper>
      <ButtonWrapper2>
        <ButtonOverlay>
          <MaterialCommunityIconsIcon
            name="map-marker-radius"
            style={{
              backgroundColor: "transparent",
              color: "#616161",
              fontSize: 24,
              opacity: 0.8
            }}
          ></MaterialCommunityIconsIcon>
        </ButtonOverlay>
      </ButtonWrapper2>
      <ActiveButtonWrapper2>
        <ButtonOverlay>
          <MaterialCommunityIconsIcon
            name="magnify"
            style={{
              backgroundColor: "transparent",
              color: "#3f51b5",
              fontSize: 24,
              opacity: 0.8
            }}
          ></MaterialCommunityIconsIcon>
        </ButtonOverlay>
      </ActiveButtonWrapper2>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: #FFF;
  flex-direction: row;
  box-shadow: 0px -2px 1.2px  0.2px #111 ;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const ButtonWrapper1 = styled.div`
  flex: 1 1 0%;
  padding-top: 8px;
  padding-bottom: 10px;
  padding-horizontal: 12px;
  min-width: 80px;
  max-width: 168px;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  border: none;
  display: flex;
`;

const ActiveButtonWrapper = styled.div`
  flex: 1 1 0%;
  padding-top: 6px;
  padding-bottom: 10px;
  padding-horizontal: 12px;
  min-width: 80px;
  max-width: 168px;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  border: none;
  display: flex;
`;

const ButtonWrapper2 = styled.div`
  flex: 1 1 0%;
  padding-top: 8px;
  padding-bottom: 10px;
  padding-horizontal: 12px;
  min-width: 80px;
  max-width: 168px;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  border: none;
  display: flex;
`;

const ActiveButtonWrapper2 = styled.div`
  flex: 1 1 0%;
  padding-top: 6px;
  padding-bottom: 10px;
  padding-horizontal: 12px;
  min-width: 80px;
  max-width: 168px;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  border: none;
  display: flex;
`;

export default MaterialIconTextButtonsFooter2;
