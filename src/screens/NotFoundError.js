import React from "react";
// import styled from "styled-components";
import MaterialHeader2 from "../components/MaterialHeader2";
import Header from "../components/mui/Header";
import Footer from "../components/mui/Footer";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";
import { styled } from "@mui/system";
const StyledHeader = styled(MaterialHeader2)`
  height: 56px;
  width: 375px;
  margin-top: 42px;
`;

const StyledFooter = styled(MaterialIconTextButtonsFooter)`
  height: 56px;
  width: 375px;
  margin-top: 637px;
`;

function NotFoundError(props) {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default NotFoundError;
