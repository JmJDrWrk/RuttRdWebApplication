import React, { useState } from 'react';
import 'leaflet/dist/leaflet.css'
import { NotificationContext } from "../NotificationContext";
import { useContext, useEffect } from "react";
import CommunityView from '../components/mui/CommunityView.js';
import API_community from '../api/API_community';
import Loading from "../components/mui/Loading";
import { useParams } from 'react-router-dom';
const communityAPI = new API_community();
const CommunityDetail = () => {
    const [communityData, setCommunityData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { communityName } = useParams();

    // const communityId = '653f9d609a392c01477009b3';
    useEffect(() => {
        const CallTheApi = async () => {
            try {
                const data = await communityAPI.getCommunityByName(communityName)

                setCommunityData(data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching profile:", error);

            }
        };
        CallTheApi();
    }, []);
    return (
        <>
            <div style={{ marginTop: '20px' }}>
                {isLoading ? (
                    <Loading label="Searching..."></Loading>
                ) : (
                    <CommunityView
                        communityData={communityData}
                        photos={communityData.contents.filter(c => c.contentType == 'photo')}
                        events={communityData.contents.filter(c => c.contentType == 'motomeeting')}
                    />)}

            </div>
        </>
    )
};

export default CommunityDetail;
