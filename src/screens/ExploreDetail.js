import React, { useEffect, useState} from "react";
import RouteMap from '../components/mui/RouteMap';
import RuttGalleryPrototype from '../components/mui/RuttGalleryPrototype.js'
import 'leaflet/dist/leaflet.css'
// import Header from "../components/mui/Header"
// import Footer from "../components/mui/Footer"
// import { useParams } from "react-router-dom";
// import CircularProgress from "@mui/material/CircularProgress";
// import Container from "@mui/material/Container";
// import Box from "@mui/material/Box";
// import RuttApi from "../api/RuttApi";
import ExploreApi from "../api/ExploreApi"
// import State from "../api/state";
// import { Typography } from "@mui/material";
import Loading from "../components/mui/Loading";
import RuttGalleryDetail from "../components/mui/RuttGalleryDetail";
import { useParams } from "react-router-dom";
// import { NotificationContext } from "../NotificationContext";
// import { useContext } from "react";
const ExploreDetail = (props) => {
    var exploreApi = new ExploreApi()
    const { ruttId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [rutt, setRutt] = useState({})

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const result = await exploreApi.findRuttById(ruttId)
                setRutt(result);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching rutt:", error);
                // setIsLoading(true);
            }
        };

        fetchProfile();
    }, []);
    return (
        <>
            {isLoading ? (
                <Loading></Loading>
            ) : (
                <RuttGalleryDetail route={rutt}/>
            )}
        </>
    );
}

export default ExploreDetail;
