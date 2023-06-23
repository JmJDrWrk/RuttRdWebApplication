import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert from '@mui/material/Alert';

const Notification = ({ properties }) => {
  const [open, setOpen] = useState(false);
  const {
    vertical = 'bottom',
    horizontal = 'center',
    message = 'Default notification message!!',
    severity = 'error',
    spacing = 2,
    handleTheClose = () => {console.debug('[NotificationComponent] handleCloseIsDefaultHandleCloseException')}
  } = properties;

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  useEffect(() => {
    console.log('[NotificationComponent] useEffect opens')
    setOpen(true);
  }, [open]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    handleTheClose()
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
        action={action}
        sx={{ mb: spacing }}
      >
        {severity && (
          <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
            {message}
          </Alert>
        )}
      </Snackbar>
    </div>
  );
};

export default Notification;
