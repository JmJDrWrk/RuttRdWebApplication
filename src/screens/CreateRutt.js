import React from 'react';
import RouteMap from '../components/mui/RouteMap';
import 'leaflet/dist/leaflet.css'
import Header from "../components/mui/Header"
import Footer from "../components/mui/Footer"
import { NotificationContext } from "../NotificationContext";
import { useContext } from "react";
const CreateRutt = () => {
    const { show } = useContext(NotificationContext);
    return (
        <>
            <RouteMap belongsToUser={true} show={show}/>
        </>
    )
};

export default CreateRutt;