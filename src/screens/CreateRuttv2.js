import React from 'react';
import RouteMap from '../components/mui/RouteMap';
import 'leaflet/dist/leaflet.css'
import Header from "../components/mui/Header"
import Footer from "../components/mui/Footer"
import { NotificationContext } from "../NotificationContext";
import { useContext } from "react";
import CreateRouteMapStage1 from '../components/mui/CreateRouteMapStage1';
const CreateRutt = () => {
    const { show } = useContext(NotificationContext);
    return (
        <>
            <CreateRouteMapStage1 isBeingCreated={true} show={show}/>
        </>
    )
};

export default CreateRutt;