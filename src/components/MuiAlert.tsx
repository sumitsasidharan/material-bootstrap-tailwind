import React from 'react';
import { Stack, Alert, AlertTitle, Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export const MuiAlert = () => {
  return (
     <Stack spacing={2}>
        {/* ALERT SEVERITY CAN BE 'error', 'warning', 'info' or 'success' */}
        <Alert severity="error" onClose={() => alert('Close Alert')}>
           This is an Error Alert
        </Alert>
        <Alert variant="outlined" severity="warning">
           <AlertTitle>Warning</AlertTitle>
           Warning Alert, variant: outlined
        </Alert>
        <Alert variant="filled" severity="info">
           Info Alert, variant: filled
        </Alert>
        <Alert variant="filled" severity="success">
           This is an Success Alert
        </Alert>

        <Alert
           severity="success"
           variant="filled"
           icon={<CheckIcon fontSize="inherit" />}
           action={
            <Button color='inherit' size='small' >
               UNDO
            </Button>
           }
           >
           Success Alert, different Icon, 'undo' action button
        </Alert>
     </Stack>
  );
}
