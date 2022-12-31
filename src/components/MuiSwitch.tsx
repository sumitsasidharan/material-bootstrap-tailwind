import React, { useState } from 'react';
import {Box, FormControlLabel, Switch} from '@mui/material';

export const MuiSwitch = () => {
   const [checked, setChecked] = useState<boolean>(false);
console.log({ checked });
   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
   }

  return (
    <Box>
      <FormControlLabel label='Dark mode' control={<Switch checked={checked} onChange={handleChange} />} />
    </Box>
  )
}
