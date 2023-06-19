import React, { Component } from "react";
import styled, { css } from "styled-components";
import Header from "../components/mui/Header";
import Footer from "../components/mui/Footer";
import SignIn from "../components/mui/SignIn"
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";
import ProfileComponent from '../components/mui/ProfileComponent'
function Profile(props) {
  // String(JSON.parse(localStorage.getItem('me')).user.email).charAt(0).toLocaleUpperCase
  return (
    <>
        <ProfileComponent letter=""></ProfileComponent>
    </>
  );
}

export default Profile;
