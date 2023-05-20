import React, { Component, useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Header from "../components/mui/Header";
import Footer from "../components/mui/Footer";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";
import MaterialButtonShare from "../components/MaterialButtonShare";
import MaterialCardWithImageAndTitle1 from "../components/MaterialCardWithImageAndTitle1";
import MaterialRightIconTextbox1 from "../components/MaterialRightIconTextbox1";
import { useParams } from "react-router-dom";
import DetailViewComponent2 from "../components/mui/DetailViewComponent2";
import ProfileAPI from "../api/ProfileAPI";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import PublishAPI from "../api/PublishAPI";
function Published(props) {

    const { publishid } = useParams();
    const { email } = useParams();
    const [profile, setProfile] = useState({ user: { name: "unknown", bio: "unknown", attachments: [] } });
    const [isLoading, setIsLoading] = useState(true);
    const [published, setPublished] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const fetchedProfile = await ProfileAPI.getProfileByEmail(email);
                setProfile(fetchedProfile.profile);

                // const fetchedPublish = await PublishAPI.getPublishById(email);
                // setPublished(fetchedPublish);

                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching profile:", error);
                setIsLoading(false);
            }
        };

        fetchProfile();
    }, []);


    return (
        <>
            <Header />
            {isLoading ? (
                <Container maxWidth="sm">
                    <Box display="flex" justifyContent="center" alignItems="center" height="70vh">
                        <CircularProgress />
                    </Box>
                </Container>
            ) : (
                <DetailViewComponent2 publishId={publishid} email={email} profile={profile} published={published}></DetailViewComponent2>
            )}

            <Footer />
        </>
    );
}


export default Published;
