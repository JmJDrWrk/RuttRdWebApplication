import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/mui/Header";
import Footer from "../components/mui/Footer";
import ProfileOtherComponent from "../components/mui/ProfileOtherComponent";
import ProfileAPI from "../api/ProfileAPI";
import RuttApi from "../api/RuttApi";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Loading from "../components/mui/Loading";
import { NotificationContext } from "../NotificationContext";

function ProfileOther() {
  const {show} = useContext(NotificationContext)
  const { email } = useParams();
  const [profile, setProfile] = useState({ user: { name: "unknown", bio: "unknown", attachments: [] } });
  const [isLoading, setIsLoading] = useState(true);
  const [rutts, setRutts] = useState(0);
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const fetchedProfile = await new ProfileAPI().getProfileByEmail(email);
        const fetchedRutts = await new RuttApi().findOthersRuttsByEmail(email);
        console.log('??',fetchedRutts)
        setProfile(fetchedProfile);
        setRutts(fetchedRutts)
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
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <ProfileOtherComponent letter={email.charAt(0)} profile={profile} rutts={rutts} show={show}/>
      )}
    </>
  );
}

export default ProfileOther;
