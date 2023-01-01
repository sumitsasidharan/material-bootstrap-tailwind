import React from 'react';
import { Stack, Badge } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

export const MuiBadge = () => {
   const unreadEmails = [1, 3, 4];

  return (
     <Stack spacing={2} direction="row" m={4}>
        <Badge badgeContent={5} color="primary">
           <MailIcon />
        </Badge>
        <Badge badgeContent={0} color="secondary" showZero>
           <MailIcon />
        </Badge>
        <Badge badgeContent={50} max={49} color="secondary" showZero>
           <MailIcon />
        </Badge>

        {/* UNREAD NOTIFICATION, 'invisble' true or false to remove the dot */}
        <Badge variant="dot" color="secondary" invisible={unreadEmails.length === 0}>
           <MailIcon />
        </Badge>
     </Stack>
  );
}
