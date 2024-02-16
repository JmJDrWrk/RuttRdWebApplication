import React from 'react';
import RouteMap from '../components/mui/RouteMap';
import 'leaflet/dist/leaflet.css'
import Header from "../components/mui/Header"
import Footer from "../components/mui/Footer"
import ShowContentTypes from '../components/mui/ShowContentTypes';
import { useParams } from 'react-router-dom';
import ImageUploadForm from '../components/mui/ImageUploadForm';
const CreateCommunityContent = () => {
    const {communityName, contentType} = useParams();
    return (
        <>
            {
                contentType ? <ImageUploadForm contentType={contentType} communityName={communityName}/> : <ShowContentTypes />
            }

        </>
    )
};

export default CreateCommunityContent;