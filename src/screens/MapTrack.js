import React from 'react';
import RouteMap from '../components/mui/RouteMap';
import 'leaflet/dist/leaflet.css'
import Header from "../components/mui/Header"
import Footer from "../components/mui/Footer"
import { NotificationContext } from "../NotificationContext";
import { useContext } from "react";
import MapTrackComponent from '../components/mui/MapTrackComponent';
const MapTrack = () => {
    const { show } = useContext(NotificationContext);
    return (
        <>
            <MapTrackComponent></MapTrackComponent>
        </>
    )
};

export default MapTrack;