import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import FontAwesomeIcon from "react-native-vector-icons/dist/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";

function MaterialHeader2(props) {
  return (
    <Container {...props} id="header">
      <LeftIconButtonRow>
        <Link to="/InitialView">
          <LeftIconButton>
            <ButtonOverlay>
              <FontAwesomeIcon
                name="motorcycle"
                style={{
                  backgroundColor: "transparent",
                  color: "#FFFFFF",
                  fontSize: 24
                }}
              ></FontAwesomeIcon>
            </ButtonOverlay>
          </LeftIconButton>
        </Link>
        <TextWrapper>
          <ScreenView numberOfLines={1}>ScreenView</ScreenView>
        </TextWrapper>
      </LeftIconButtonRow>
      <LeftIconButtonRowFiller></LeftIconButtonRowFiller>
      <RightIconsWrapper>
        <Link to="/Search">
          <IconButton>
            <ButtonOverlay>
              <MaterialCommunityIconsIcon
                name="magnify"
                style={{
                  backgroundColor: "transparent",
                  color: "#FFFFFF",
                  fontSize: 24
                }}
              ></MaterialCommunityIconsIcon>
            </ButtonOverlay>
          </IconButton>
        </Link>
        <Link to="/Settings">
          <IconButton>
            <ButtonOverlay>
              <MaterialCommunityIconsIcon
                name="dots-vertical"
                style={{
                  backgroundColor: "transparent",
                  color: "#FFFFFF",
                  fontSize: 24
                }}
              ></MaterialCommunityIconsIcon>
            </ButtonOverlay>
          </IconButton>
        </Link>
      </RightIconsWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(70, 125, 166, 1);
  flex-direction: row;
  align-items: center;
  padding: 4px;
  justify-content: space-between;
  box-shadow: 0px 2px 1.2px 0.2px #111;
`;

const ButtonOverlay = styled.button`
  display: block;
  background: none;
  height: 100%;
  width: 100%;
  border: none;
`;
const LeftIconButton = styled.div`
  padding: 11px;
  flex-direction: column;
  display: flex;
  border: none;
`;

const TextWrapper = styled.div`
  flex-direction: column;
  display: flex;
  align-self: flex-end;
  margin-left: 45px;
`;

const ScreenView = styled.span`
  font-family: Roboto;
  font-size: 18px;
  color: #ffffff;
  background-color: transparent;
  line-height: 18px;
  font-weight: 600;
`;

const LeftIconButtonRow = styled.div`
  flex-direction: row;
  margin-left: 5px;
  margin-top: 5px;
  margin-bottom: 19px;
  display: flex;
`;

const LeftIconButtonRowFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  display: flex;
`;

const RightIconsWrapper = styled.div`
  flex-direction: row;
  align-items: center;
  margin-right: 5px;
  margin-top: 5px;
  display: flex;
`;

const IconButton = styled.div`
  padding: 11px;
  flex-direction: column;
  display: flex;
  border: none;
`;

export default MaterialHeader2;
