import React from 'react';
import RouteMap from '../components/mui/RouteMap';
import 'leaflet/dist/leaflet.css'
import Header from "../components/mui/Header"
import Footer from "../components/mui/Footer"
const CreateRutt = () => {
    return (
        <>
            <RouteMap belongsToUser={true}/>
        </>
    )
};

export default CreateRutt;