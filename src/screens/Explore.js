import React, { useEffect, useState } from "react";
import RouteMap from '../components/mui/RouteMap';
import RuttGalleryPrototype from '../components/mui/RuttGalleryPrototype.js'
import styled from "styled-components";
import 'leaflet/dist/leaflet.css'
// import Header from "../components/mui/Header"
// import Footer from "../components/mui/Footer"
// import { useParams } from "react-router-dom";
// import CircularProgress from "@mui/material/CircularProgress";
// import Container from "@mui/material/Container";
// import Box from "@mui/material/Box";
// import RuttApi from "../api/RuttApi";
import ExploreApi from "../api/ExploreApi"
// import State from "../api/state";
// import { Typography } from "@mui/material";
import Loading from "../components/mui/Loading";
// import { NotificationContext } from "../NotificationContext";
// import { useContext } from "react";

import { Container } from "@mui/system";

import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

const SearchContainer = styled(Container)`
  margin-top: 2rem;
  margin-bottom: 2rem;
  background-color: transparent;
  border-radius: 17px;
`;

const ResultsContainer = styled(Container)`
  background-color: transparent;
  border-radius: 17px;
  padding: 1rem;
  margin-top: 1rem;
`;


const Explore = (props) => {
    var exploreApi = new ExploreApi()

    const [isLoading, setIsLoading] = useState(true);
    const [rutts, setRutts] = useState({})

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const result = await exploreApi.findAllRuttsWithPhotos()
                setRutts(result);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching rutt:", error);
                // setIsLoading(true);
            }
        };

        fetchProfile();
    }, []);
    return (
        <>
            {isLoading ? (
                <Loading></Loading>
            ) : (
                <>
                    <SearchContainer maxWidth="sm">
                        <TextField
                            sx={{ backgroundColor: "white", display: { xs: "flex", md: "flex" } }}
                            label="Search"
                            fullWidth
                            variant="outlined"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton>
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </SearchContainer>
                    <RuttGalleryPrototype routes={rutts.routes} />
                </>
            )}
        </>
    );
}

export default Explore;
