import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";

function RuttPreview(props) {
  return (
    <Container {...props}>
      <CardItem1Style>
        <HeaderStyle>
          <LeftImage
            src={require("../assets/images/cardImage10.png")}
          ></LeftImage>
          <HeaderContent>
            <TextStyle>Title</TextStyle>
            <NoteTextStyle>Subhead</NoteTextStyle>
          </HeaderContent>
        </HeaderStyle>
      </CardItem1Style>
      <CardItemImagePlace
        src={require("../assets/images/cardImage11.png")}
      ></CardItemImagePlace>
      <ButtonGroup1>
        <LeftBtn1>
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
        </LeftBtn1>
        <CenterBtn1>
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
        </CenterBtn1>
        <RightBtn1>
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
        </RightBtn1>
      </ButtonGroup1>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const CardItem1Style = styled.div`
  flex-direction: row;
  align-items: center;
  padding: 16px;
  height: 72px;
  display: flex;
`;

const HeaderStyle = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  align-items: center;
  display: flex;
`;

const LeftImage = styled.img`
  height: 40px;
  width: 100%;
  background-color: #CCC;
  border-radius: 20px;
`;

const HeaderContent = styled.div`
  padding-left: 16px;
  justify-content: center;
  flex-direction: column;
  display: flex;
`;

const TextStyle = styled.span`
  font-family: Roboto;
  font-size: 16px;
  color: #000;
  line-height: 20px;
`;

const NoteTextStyle = styled.span`
  font-family: Roboto;
  font-size: 14px;
  color: #000;
  line-height: 16px;
  opacity: 0.5;
`;

const CardItemImagePlace = styled.img`
  background-color: #ccc;
  flex: 1 1 0%;
  min-height: 210px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ButtonGroup1 = styled.div`
  padding: 8px;
  flex-direction: row;
  align-self: flex-end;
  display: flex;
`;

const LeftBtn1 = styled.div`
  padding: 8px;
  margin-left: 8px;
  margin-right: 8px;
  flex-direction: column;
  display: flex;
  border: none;
`;

const CenterBtn1 = styled.div`
  padding: 8px;
  margin-left: 8px;
  margin-right: 8px;
  flex-direction: column;
  display: flex;
  border: none;
`;

const RightBtn1 = styled.div`
  padding: 8px;
  margin-left: 8px;
  margin-right: 8px;
  flex-direction: column;
  display: flex;
  border: none;
`;

export default RuttPreview;
