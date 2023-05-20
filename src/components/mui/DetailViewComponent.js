import React, { useState, useEffect } from "react";
import { styled } from "@mui/system";
import Dialog from "@mui/material/Dialog";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const DialogContainer = styled(Dialog)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const CardContainer = styled(Card)(({ theme }) => ({
    maxWidth: 600,
    width: "100%",
}));
const Media = styled(CardMedia)(({ theme }) => ({
    height: 600, // Adjust the height as needed
    paddingTop: "100%", // Maintain a square aspect ratio (1:1)
    // width: screenWidth
}));
const Content = styled("div")(({ theme }) => ({
    padding: theme.spacing(2),
}));

const DetailView = ({ open = true, onClose, photo }) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
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
    })

    const handleClose = () => {
        if (onClose) {
          onClose();
        }
      };
    return (
        <DialogContainer open={open} onClose={handleClose} BackdropProps={{ onClick: handleClose }}>
            <CardContainer>
                <Media sx={{width:screenWidth-50}} image="https://source.unsplash.com/random?1" title="{photo.title}" />
                <Content>
                    <Typography variant="subtitle1">title</Typography>
                    <Typography variant="body2">description</Typography>
                    {/* Other photo details like likes, comments, etc. */}
                </Content>
            </CardContainer>
        </DialogContainer>
    );
};

export default DetailView;
