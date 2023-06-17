import React from 'react';
import RouteMap from '../components/mui/RouteMap';
import 'leaflet/dist/leaflet.css'
import Header from "../components/mui/Header"
import Footer from "../components/mui/Footer"
import CreateEventType from '../components/mui/CreateEventType';
const CreateEvent = () => {
    return (
        <>
            <Header></Header>
            <CreateEventType />
            <Footer></Footer>
        </>
    )
};

export default CreateEvent;