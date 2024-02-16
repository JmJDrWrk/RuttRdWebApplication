import React from 'react';
import 'leaflet/dist/leaflet.css'
import { NotificationContext } from "../NotificationContext";
import { useContext } from "react";
import CommunityCreateForm from '../components/mui/CommunityCreateForm';
const CreateCommunity = () => {
    // const { show } = useContext(NotificationContext);
    return (
        <>
            <div style={{ marginTop: '20px' }}>
                <CommunityCreateForm></CommunityCreateForm>
            </div>
        </>
    )
};

export default CreateCommunity;