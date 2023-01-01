import React from 'react';
import {
   Box,
   List,
   ListItem,
   ListItemText,
   ListItemIcon,
   ListItemAvatar,
   Avatar,
   ListItemButton,
   Divider,
} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

export const MuiList = () => {

   // You can put checkboxes, switches and other components inside

   return (
      <Box sx={{ width: '300px', bgcolor: '#efefef' }}>
         <List>
            <ListItem disablePadding>
               <ListItemButton>
                  <ListItemIcon>
                     <ListItemAvatar>
                        <Avatar>
                           <MailIcon />
                        </Avatar>
                     </ListItemAvatar>
                  </ListItemIcon>

                  <ListItemText primary="List item 1" />
               </ListItemButton>
            </ListItem>
            <Divider />

            <ListItem>
               <ListItemIcon>
                  <MailIcon />
               </ListItemIcon>
               <ListItemText primary="List item 2" secondary="Secondary Text" />
            </ListItem>
            <Divider />

            <ListItem>
               <ListItemIcon>
                  <MailIcon />
               </ListItemIcon>
               <ListItemText primary="List item 3" secondary="Secondary Text" />
            </ListItem>
         </List>
      </Box>
   );
};
