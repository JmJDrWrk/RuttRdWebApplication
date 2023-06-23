import React, { useEffect, useState } from "react";
import RouteMap from '../components/mui/RouteMap';
import 'leaflet/dist/leaflet.css'
import Header from "../components/mui/Header"
import Footer from "../components/mui/Footer"
import { useLocation, useNavigate, useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import RuttApi from "../api/RuttApi";
import Loading from "../components/mui/Loading";
import FloatingAction from "../components/mui/utils/FloatingAction";
import { Tooltip } from "leaflet";
import { IconButton } from "@mui/material";
import { Edit } from "@mui/icons-material";
import State from "../api/state";
const CreateRutt = () => {
    var ruttApi = new RuttApi();
    const { ruttId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [rutt, setRutt] = useState({})
    const [belongsToUser, setBelongsToUser] = useState(false)
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const result = await ruttApi.findByOthersId(ruttId);
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
                <>
                    {belongsToUser ?
                        <FloatingAction bottomSpacing={8} rightSpacing={1} clickHandler={() => { }} btref="center" place="2">
                            <IconButton onClick={() => {navigate(`/RuttView/${ruttId}`)}} style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                                <Edit style={{ color: 'white' }} />
                            </IconButton>
                        </FloatingAction>
                        :
                        false
                    }
                    <RouteMap rutt={rutt} />
                </>

            )}
        </>
    );
};

export default CreateRutt;