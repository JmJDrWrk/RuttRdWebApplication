import React, { Component } from "react";
import styled, { css } from "styled-components";
import Header from "../components/mui/Header";
import Footer from "../components/mui/Footer";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";

function Profile(props) {
  return (
    <>
      <Header/>
      <Footer/>
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
    </>
  );
}

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
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

export default Profile;
