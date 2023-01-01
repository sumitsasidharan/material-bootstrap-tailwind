import React from 'react'
import { Stack, Avatar, AvatarGroup } from '@mui/material';

export const MuiAvatar = () => {
  return (
     <Stack spacing={4} p={4} >
        <Stack direction="row" spacing={1}>
           <Avatar sx={{ bgcolor: 'primary.light' }}>BW</Avatar>
           <Avatar sx={{ bgcolor: 'success.light' }}>CK</Avatar>
        </Stack>

        <Stack direction="row" spacing={1}>
           <Avatar
              variant="rounded"
              sx={{ bgcolor: 'primary.light', width: 50, height: 50 }}>
              BW
           </Avatar>
           <Avatar
              variant="square"
              sx={{ bgcolor: 'success.light', width: 50, height: 50 }}>
              CK
           </Avatar>
        </Stack>

        <Stack direction="row" spacing={1}>
           <Avatar sx={{ bgcolor: 'primary.light' }}>BW</Avatar>
           <Avatar sx={{ bgcolor: 'success.light' }}>CK</Avatar>

           {/* restrict avatars using 'max' prop */}
           <AvatarGroup max={3}>
              <Avatar
                 variant="square"
                 src="https://randomuser.me/api/portraits/women/79.jpg"
                 alt="Jane Doe"
              />
              <Avatar
                 src="https://randomuser.me/api/portraits/women/1.jpg"
                 alt="Jane Doe"
              />
              <Avatar
                 src="https://randomuser.me/api/portraits/women/2.jpg"
                 alt="Jane Doe"
              />
              <Avatar
                 src="https://randomuser.me/api/portraits/men/51.jpg"
                 alt="John Doe"
              />
           </AvatarGroup>
        </Stack>
     </Stack>
  );
}
