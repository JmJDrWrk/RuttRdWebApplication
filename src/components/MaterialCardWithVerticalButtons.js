import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";

function MaterialCardWithVerticalButtons(props) {
  return (
    <Container {...props}>
      <CardItemImagePlace
        src={require("../assets/images/cardImage7.png")}
      ></CardItemImagePlace>
      <Body>
        <TopBtn>
          <ButtonOverlay>
            <MaterialCommunityIconsIcon
              name="heart"
              style={{
                fontSize: 24,
                color: "#000",
                opacity: 0.5
              }}
            ></MaterialCommunityIconsIcon>
          </ButtonOverlay>
        </TopBtn>
        <CenterBtn>
          <ButtonOverlay>
            <MaterialCommunityIconsIcon
              name="book"
              style={{
                fontSize: 24,
                color: "#000",
                opacity: 0.5
              }}
            ></MaterialCommunityIconsIcon>
          </ButtonOverlay>
        </CenterBtn>
        <BottomBtn>
          <ButtonOverlay>
            <MaterialCommunityIconsIcon
              name="share"
              style={{
                fontSize: 24,
                color: "#000",
                opacity: 0.5
              }}
            ></MaterialCommunityIconsIcon>
          </ButtonOverlay>
        </BottomBtn>
      </Body>
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
  flex-direction: row;
  padding: 16px;
  justify-content: space-between;
  overflow: hidden;
  border-style: solid;
  box-shadow: -2px 2px 1.5px  0.1px #000 ;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const CardItemImagePlace = styled.img`
  background-color: #ccc;
  min-height: 240px;
  min-width: 240px;
  flex: 1 1 0%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  padding: 8px;
  padding-left: 16px;
  flex-direction: column;
  display: flex;
`;

const TopBtn = styled.div`
  padding: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
  flex-direction: column;
  display: flex;
  border: none;
`;

const CenterBtn = styled.div`
  padding: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
  flex-direction: column;
  display: flex;
  border: none;
`;

const BottomBtn = styled.div`
  padding: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
  flex-direction: column;
  display: flex;
  border: none;
`;

export default MaterialCardWithVerticalButtons;
