import React, { useEffect} from "react";

import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Header from "../components/mui/Header";
import Footer from "../components/mui/Footer";
import Loading from "../components/mui/Loading";
import { useLocation, useNavigate } from "react-router-dom";
import State from "../api/state";

const CheckingAuth = () => {
  const navigate = useNavigate();
  const location = useLocation()
  useEffect(() => {
    const timeout = setTimeout(() => {
      State.setUserIntention(location.pathname)
      navigate("/");
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <>
      <Header blockLoad={true} />
      <Loading label="Checking your authentication..." />
      <Footer />
    </>
  );
};

export default CheckingAuth;
