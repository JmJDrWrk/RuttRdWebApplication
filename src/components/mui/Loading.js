import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const Loading = ({ label }) => {
    return (
        <Container maxWidth="sm">
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                height="70vh"
            >
                <Typography variant="h6" component="div" mb={2}>
                    {label}
                </Typography>
                <CircularProgress />
            </Box>
        </Container>
    )
}
export default Loading