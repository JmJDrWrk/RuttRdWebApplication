import React from 'react';
import 'leaflet/dist/leaflet.css'
import { NotificationContext } from "../NotificationContext";
import { useContext } from "react";
import ImageUploadForm from '../components/mui/ImageUploadForm';
const PublishContent = () => {
    // const { show } = useContext(NotificationContext);
    return (
        <>
            <div style={{ marginTop: '20px' }}>
                <ImageUploadForm></ImageUploadForm>
            </div>
        </>
    )
};

export default PublishContent;