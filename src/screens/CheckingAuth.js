import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Header from "../components/mui/Header";
import Footer from "../components/mui/Footer";
import Loading from "../components/mui/Loading";

const CheckingAuth = () => {
  return (
    <>
      <Header blockLoad={true} />
        <Loading label="Checking your authentication..."></Loading>
      <Footer />
    </>
  );
};

export default CheckingAuth;
