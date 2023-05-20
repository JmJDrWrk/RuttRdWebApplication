import React, { Component } from "react";
import styled, { css } from "styled-components";
import Header from "../components/mui/Header";
import Footer from "../components/mui/Footer";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";
import MaterialButtonShare from "../components/MaterialButtonShare";
import MaterialCardWithImageAndTitle1 from "../components/MaterialCardWithImageAndTitle1";
import MaterialRightIconTextbox1 from "../components/MaterialRightIconTextbox1";
import { useParams } from "react-router-dom";
import DetailViewComponent from "../components/mui/DetailViewComponent";

function Published(props) {
    
    const { publishid } = useParams();
    return (
        <>
            <Header />
                <DetailViewComponent publishId={publishid}></DetailViewComponent>
            <Footer />
        </>
    );
}


export default Published;
