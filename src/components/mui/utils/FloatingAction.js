import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
const FloatingAction = ({clickHandler=()=>{alert('Floating action clicked')}, bottomSpacing=5, rightSpacing=2}) => {
    return (
        <Fab
            color="secondary"
            sx={{
                position: 'absolute',
                bottom: (theme) => theme.spacing(bottomSpacing),
                right: (theme) => theme.spacing(rightSpacing),
            }}
            onClick={clickHandler}
            >
            <AddIcon />
        </Fab>
    );

}

export default FloatingAction