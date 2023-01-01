import React from 'react';
import { Tooltip, IconButton, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const MuiTooltip = () => {
  return (
     <Box>
        <Tooltip title="yeh button delete karne keliye hai" placement="right">
           <IconButton>
              <DeleteIcon />
           </IconButton>
        </Tooltip>

        <Tooltip title="yeh button delete karne keliye hai" placement="bottom-end" arrow enterDelay={500} leaveDelay={200}  >
           <IconButton>
              <DeleteIcon />
           </IconButton>
        </Tooltip>
     </Box>
  );
}
