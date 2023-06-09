import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/mui/Header";
import Footer from "../components/mui/Footer";
import ProfileOtherComponent from "../components/mui/ProfileOtherComponent";
import ProfileAPI from "../api/ProfileAPI";
import RuttApi from "../api/RuttApi";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

function ProfileOther() {
  const { email } = useParams();
  const [profile, setProfile] = useState({ user: { name: "unknown", bio: "unknown", attachments: [] } });
  const [isLoading, setIsLoading] = useState(true);
  const [rutts, setRutts] = useState(0);
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const fetchedProfile = await ProfileAPI.getProfileByEmail(email);
        const fetchedRutts = await new RuttApi().findOthersRuttsByEmail(email);
        console.log('PROFILE_> ' + JSON.stringify(fetchedProfile))
        setProfile(fetchedProfile.profile);
        setRutts(fetchedRutts.rutts)
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
        <ProfileOtherComponent letter={email.charAt(0)} profile={profile} rutts={rutts}/>
      )}
      <Footer />
    </>
  );
}

export default ProfileOther;
