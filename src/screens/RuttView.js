import React, { useEffect, useState } from "react";
import RouteMap from '../components/mui/RouteMap';
import 'leaflet/dist/leaflet.css'
import Header from "../components/mui/Header"
import Footer from "../components/mui/Footer"
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import RuttApi from "../api/RuttApi";
import State from "../api/state";
import { Typography } from "@mui/material";
import Loading from "../components/mui/Loading";
function RuttView(props) {
    var ruttApi = new RuttApi();
    const { ruttId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [rutt, setRutt] = useState({})
    const [belongsToUser, setBelongsToUser] = useState(false)
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const result = await ruttApi.findById(ruttId);
                setBelongsToUser(State.getMe().user.rutts.find(rutt => rutt == result._id))
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
                <RouteMap rutt={rutt} belongsToUser={belongsToUser} />
            )}
        </>
    );
}

export default RuttView;
