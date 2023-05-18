import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialHeader2 from "../components/MaterialHeader2";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";
import MaterialUnderlineTextbox6 from "../components/MaterialUnderlineTextbox6";
import MaterialIconTextbox3 from "../components/MaterialIconTextbox3";
import MaterialIconTextbox4 from "../components/MaterialIconTextbox4";
import MaterialIconTextbox5 from "../components/MaterialIconTextbox5";
import MaterialCheckboxWithLabel from "../components/MaterialCheckboxWithLabel";
import MaterialCheckboxWithLabel1 from "../components/MaterialCheckboxWithLabel1";
import MaterialButtonShare1 from "../components/MaterialButtonShare1";

function UploadRutt(props) {
  return (
    <>
      <MaterialHeader2
        style={{
          height: 56,
          width: 375,
          marginTop: 42
        }}
      ></MaterialHeader2>
      <MaterialIconTextButtonsFooter
        style={{
          height: 56,
          width: 375,
          marginTop: 637
        }}
      ></MaterialIconTextButtonsFooter>
      <Group>
        <Rect>
          <SetAImage>Set a image</SetAImage>
        </Rect>
      </Group>
      <MaterialUnderlineTextbox6
        style={{
          height: 43,
          width: 264,
          marginTop: -229,
          marginLeft: 56
        }}
      ></MaterialUnderlineTextbox6>
      <MaterialIconTextbox3
        style={{
          height: 43,
          width: 264,
          marginTop: 195,
          marginLeft: 56
        }}
      ></MaterialIconTextbox3>
      <MaterialIconTextbox4
        style={{
          height: 43,
          width: 264,
          marginTop: 12,
          marginLeft: 56
        }}
      ></MaterialIconTextbox4>
      <MaterialIconTextbox5
        style={{
          height: 43,
          width: 264,
          marginTop: 17,
          marginLeft: 56
        }}
      ></MaterialIconTextbox5>
      <Rect2>
        <LoremIpsum>A summary of the activity...</LoremIpsum>
      </Rect2>
      <MaterialCheckboxWithLabelRow>
        <MaterialCheckboxWithLabel
          style={{
            height: 40,
            width: 90
          }}
        ></MaterialCheckboxWithLabel>
        <MaterialCheckboxWithLabel1
          style={{
            height: 40,
            width: 90,
            marginLeft: 10
          }}
        ></MaterialCheckboxWithLabel1>
        <MaterialButtonShare1
          style={{
            height: 56,
            width: 56,
            marginLeft: 50,
            marginTop: 24
          }}
        ></MaterialButtonShare1>
      </MaterialCheckboxWithLabelRow>
    </>
  );
}

const Group = styled.div`
  width: 264px;
  height: 165px;
  flex-direction: column;
  display: flex;
  margin-top: -602px;
  margin-left: 56px;
`;

const Rect = styled.div`
  width: 264px;
  height: 165px;
  background-color: #E6E6E6;
  flex-direction: column;
  display: flex;
`;

const SetAImage = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 83px;
  margin-left: 95px;
`;

const Rect2 = styled.div`
  width: 272px;
  height: 91px;
  background-color: #E6E6E6;
  border-radius: 17px;
  flex-direction: column;
  display: flex;
  margin-top: 21px;
  margin-left: 56px;
`;

const LoremIpsum = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 72px;
  width: 246px;
  margin-top: 10px;
  margin-left: 12px;
`;

const MaterialCheckboxWithLabelRow = styled.div`
  height: 80px;
  flex-direction: row;
  display: flex;
  margin-top: 8px;
  margin-left: 63px;
  margin-right: 16px;
`;

export default UploadRutt;
