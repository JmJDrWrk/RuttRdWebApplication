import React, { useState, useEffect } from "react";
import { styled } from "@mui/system";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";
import CommentIcon from "@mui/icons-material/ChatBubbleOutline";
import SendIcon from "@mui/icons-material/SendOutlined";
import State from "../../api/state";
const PostCard = styled(Card)(({ theme }) => ({
    marginBottom: theme.spacing(4),
    boxShadow: "none"
}));

const PostCardHeader = styled(CardHeader)(({ theme }) => ({
    paddingBottom: 0,
}));

const PostCardMedia = styled(CardMedia)(({ theme }) => ({
    paddingTop: "100%",
    display: "flex",
    justifySelf: "center", // Center horizontally
}));

const PostCardContent = styled(CardContent)(({ theme }) => ({
    paddingTop: 10,
}));

const PostCardAvatar = styled(Avatar)(({ theme }) => ({
    marginRight: theme.spacing(2),
}));

const PublishedPhoto = ({ publishId, email, profile}) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const attachment = profile.attachments.find(att=>att.src==publishId);
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        // Add event listener to update the screen width on resize
        window.addEventListener("resize", handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });

    return (
        <PostCard>
            <PostCardHeader
                avatar={<PostCardAvatar alt="User Avatar" src={State.fileshost+profile.profilePhoto}/>}
                title={attachment.title}
                subheader={attachment.location}
            />

            <PostCardContent>

                <PostCardMedia
                    sx={{ width: screenWidth - 50 }}
                    image={State.fileshost + publishId}
                    title="Photo"
                />
                <Typography variant="body2" color="textSecondary" style={{ marginRight: "10px" }}>
                    {attachment.desc}
                </Typography>
                <div style={{ display: "flex" }}>
                    <FavoriteIcon color="white" style={{ marginRight: "10px" }} />
                    <CommentIcon style={{ marginRight: "10px" }} />
                    <SendIcon />
                </div>
                {/* Likes, comments, and other details */}
            </PostCardContent>
        </PostCard>
    );
};

export default PublishedPhoto;
