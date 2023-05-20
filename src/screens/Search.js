import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // Import useHistory hook
import Header from "../components/mui/Header";
import Footer from "../components/mui/Footer";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

import ProfileSearchResult from "../components/mui/ProfileSearchResult";
import State from "../api/state";

const SearchContainer = styled(Container)`
  margin-top: 2rem;
  margin-bottom: 2rem;
  background-color: transparent;
  border-radius: 17px;
`;

const ResultsContainer = styled(Container)`
  background-color: #f2f2f2;
  border-radius: 17px;
  padding: 1rem;
  margin-top: 1rem;
`;

function Search(props) {
  const profiles = [State.getMe()];
  return (
    <>
      <Header></Header>
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

      <ResultsContainer>
        {profiles.map((profile) => (
          <ProfileSearchResult
            key={profile.user.email}
            profile={profile}
          />
        ))}
      </ResultsContainer>
      <Footer />
    </>
  );
}

export default Search;
