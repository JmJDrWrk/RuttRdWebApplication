import React from "react";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";

const styles = {
    avatar: {
        width: "48px",
        height: "48px",
        fontSize: "24px",
        fontWeight: "bold",
    },
};

const AvatarLetter = ({ letter }) => {
    const colorIndex = letter.charCodeAt(0) % 2 === 0 ? 500 : 300;
    let backgroundColor = letter.charCodeAt(0) % 2 === 0 ? deepPurple[colorIndex] : deepOrange[colorIndex];
    if(letter=='0'){
        letter=' '
        backgroundColor = 'transparent'
    }
    return (
        <Avatar sx={{ ...styles.avatar, backgroundColor }}>
            {letter}
        </Avatar>
    );
};

export default AvatarLetter;
