import React, { useState } from 'react';
import { Stack, Chip, Avatar } from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';

export const MuiChip = () => {
   const [chips, setChips] = useState<string[]>(['Chip 1', 'Chip 2', 'Chip 3']);

   const handleDelete = (chipItem: string) => {
      setChips(chips => chips.filter((chip) => chip !== chipItem));
   };

   return (
      <Stack direction="row" spacing={1}>
         <Chip label="Chip" color="primary" size="small" />
         <Chip label="Chip" color="primary" icon={<FaceIcon />} />
         <Chip label="Chip outlined" color="secondary" variant="outlined" avatar={<Avatar>S</Avatar>} />

         <Chip label='Click' color='success' onClick={() => alert('Clicked')} />
         <Chip label='Delete' color='error' onClick={() => alert('clicked')} onDelete={() => alert('Delete handler called')} />

         {/* CHIPS ARRAY */}
         {
            chips.map(chip => (
               <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
            ))
         }
      </Stack>
   );
};
