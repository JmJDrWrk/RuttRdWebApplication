import React, { Component } from "react";
import styled, { css } from "styled-components";
import Header from "../components/mui/Header";
import Footer from "../components/mui/Footer";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";
import MaterialButtonShare from "../components/MaterialButtonShare";
import MaterialCardWithImageAndTitle1 from "../components/MaterialCardWithImageAndTitle1";
import MaterialRightIconTextbox1 from "../components/MaterialRightIconTextbox1";

function DetailView(props) {
  return (
    <>
<Header/>
<Footer/>
      <Image1Stack>
        <Image1 src={require("../assets/images/TodosEnLaGorra1.png")}></Image1>
        <Rect>
          <DescriptionRow>
            <Description>Description</Description>
            <EntypoIcon
              name="chevron-small-down"
              style={{
                color: "rgba(128,128,128,1)",
                fontSize: 25,
                height: 27,
                width: 25,
                marginLeft: 12
              }}
            ></EntypoIcon>
          </DescriptionRow>
        </Rect>
        <MaterialButtonShare
          style={{
            height: 51,
            width: 51,
            position: "absolute",
            left: 312,
            top: 160
          }}
        ></MaterialButtonShare>
      </Image1Stack>
      <LoremIpsum>TITLE OF THE THING AND THE .</LoremIpsum>
      <MaterialCardWithImageAndTitle1
        style={{
          height: 102,
          width: 350,
          borderRadius: 23,
          marginTop: 404,
          marginLeft: 13
        }}
      ></MaterialCardWithImageAndTitle1>
      <MaterialRightIconTextbox1
        style={{
          height: 56,
          width: 350,
          marginTop: 9,
          marginLeft: 13
        }}
      ></MaterialRightIconTextbox1>
      <Rect2>
        <Summary1>
          Descubre la hermosa región de Galicia en una emocionante ruta en moto.
          Desde sus impresionantes paisajes costeros hasta sus encantadores
          pueblos y su rica historia, Galicia ofrece un escenario perfecto para
          los amantes de las dos ruedas. Disfruta de curvas sinuosas, vistas
          panorámicas y la hospitalidad gallega mientras exploras esta tierra
          llena de magia y tradiciones.
        </Summary1>
      </Rect2>
    </>
  );
}

const Image1 = styled.img`
  top: 0px;
  left: 0px;
  width: 375px;
  height: 192px;
  position: absolute;
  object-fit: contain;
`;

const Rect = styled.div`
  top: 166px;
  left: 13px;
  width: 350px;
  height: 38px;
  position: absolute;
  background-color: rgba(247,247,247,1);
  border-radius: 17px;
  flex-direction: row;
  display: flex;
`;

const Description = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 5px;
`;

const DescriptionRow = styled.div`
  height: 27px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 217px;
  margin-left: 25px;
  margin-top: 6px;
`;

const Image1Stack = styled.div`
  width: 375px;
  height: 211px;
  margin-top: -628px;
  position: relative;
`;

const LoremIpsum = styled.span`
  font-family: Arial;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 22px;
  margin-top: -249px;
  margin-left: 17px;
`;

const Rect2 = styled.div`
  width: 350px;
  height: 156px;
  background-color: rgba(245,245,245,1);
  border-radius: 10px;
  flex-direction: column;
  display: flex;
  margin-top: -343px;
  margin-left: 13px;
`;

const Summary1 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 144px;
  width: 329px;
  margin-top: 6px;
  margin-left: 13px;
`;

export default DetailView;
