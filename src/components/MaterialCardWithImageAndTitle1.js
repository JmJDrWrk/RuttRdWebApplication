import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialCardWithImageAndTitle1(props) {
  return (
    <Container {...props}>
      <CardBody>
        <BodyContent>
          <PosteLuzAmperio>Poste Luz Amperio</PosteLuzAmperio>
          <SubtitleStyle>
            Fue increible, pudimos ver queso de la{"\n"}cueva y vacas
          </SubtitleStyle>
        </BodyContent>
        <CardItemImagePlace
          src={require("../assets/images/cardImage16.png")}
        ></CardItemImagePlace>
      </CardBody>
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

const CardBody = styled.div`
  flex-direction: row;
  justify-content: space-between;
  display: flex;
`;

const BodyContent = styled.div`
  padding: 16px;
  padding-top: 24px;
  flex: 1 1 0%;
  flex-direction: column;
  display: flex;
`;

const PosteLuzAmperio = styled.span`
  font-family: Roboto;
  font-size: 15px;
  color: #000;
  padding-bottom: 12px;
`;

const SubtitleStyle = styled.span`
  font-family: Roboto;
  font-size: 14px;
  color: #000;
  line-height: 16px;
  opacity: 0.5;
`;

const CardItemImagePlace = styled.img`
  background-color: #ccc;
  height: 45px;
  width: 100%;
  margin: 16px;
  border-radius: 73px;
`;

export default MaterialCardWithImageAndTitle1;
