import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // Import useHistory hook
import Header from "../components/mui/Header";
import Footer from "../components/mui/Footer";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

import ProfileSearchResult from "../components/mui/ProfileSearchResult";
import State from "../api/state";
import ProfileAPI from "../api/ProfileAPI";

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

function Search(props) {
  const [profiles, setProfiles] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const fetchedProfiles = await new ProfileAPI().getProfilesIncluding('email')
        setProfiles(fetchedProfiles.profiles);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching profile:", error);
        // setIsLoading(false);
      }
    };

    fetchProfile();
  }, []);
  return (
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
      {isLoading ? (
        <Container maxWidth="sm">
          <Box display="flex" justifyContent="center" alignItems="center" height="70vh">
            <CircularProgress />
          </Box>
        </Container>
      ) : (
        <ResultsContainer>

          {profiles.map((profile) => (
            <ProfileSearchResult
              key={profile.email}
              profile={profile}
            />
          ))}
        </ResultsContainer>
      )}
    </>
  );
}

export default Search;
