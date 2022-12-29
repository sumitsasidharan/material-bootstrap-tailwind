import React, { useState } from 'react';
import { Stack, TextField, InputAdornment } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

const MuiTextField = () => {
   const [firstName, setFirstName] = useState('');

   return (
      <Stack spacing={4}>
         <Stack direction="row" spacing={2}>
            <TextField label="Name" variant="outlined" />
            <TextField label="Password" variant="filled" />
            <TextField label="Email" variant="standard" />
         </Stack>

         <Stack direction="row" spacing={2}>
            <TextField
               label="Small secondary color"
               size="small"
               color="secondary"
               variant="outlined"
            />
         </Stack>

         {/* ERROR  RED BORDER, ONCHANGE */}
         <Stack direction="row" spacing={2}>
            <TextField
               label="Form Input"
               value={firstName}
               onChange={(e) => setFirstName(e.target.value)}
               required
               error={!firstName}
               helperText={!firstName ? 'Required' : 'Do not share your password with anyone.'}
            />
            <TextField
               label="Password"
               type="password"
               helperText="Do not share password"
               disabled
            />
            <TextField label="Read Only" InputProps={{ readOnly: true }} />
         </Stack>

         {/* IMP: INPUTPROPS AND ADORNMENT */}
         <Stack direction="row" spacing={2}>
            <TextField
               label="Amount"
               InputProps={{
                  startAdornment: (
                     <InputAdornment position="start">$</InputAdornment>
                  ),
               }}
            />
            <TextField
               label="Weight"
               InputProps={{
                  endAdornment: (
                     <InputAdornment position="end">kg</InputAdornment>
                  ),
               }}
            />
            <TextField
               label="Password"
               type="password"
               InputProps={{
                  endAdornment: (
                     <InputAdornment position="end">
                        <VisibilityIcon />
                     </InputAdornment>
                  ),
               }}
            />
         </Stack>
      </Stack>
   );
};

export default MuiTextField;
