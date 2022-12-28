import { Button, Stack } from '@mui/material';
import AdbRoundedIcon from '@mui/icons-material/AdbRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

export const MuiButton = () => {
   return (
      <Stack spacing={4}>
         <Stack spacing={2} direction="row">
            <Button variant="text" href="https://google.com">
               text
            </Button>
            <Button variant="contained">contained</Button>
            <Button variant="outlined">outlined</Button>
         </Stack>

         <Stack spacing={2} direction="row">
            <Button variant="contained" color="primary">
               Primary
            </Button>
            <Button variant="text" color="secondary">
               secondary
            </Button>
            <Button variant="outlined" color="error">
               Error
            </Button>
            <Button variant="text" color="warning">
               Warning
            </Button>
            <Button variant="outlined" color="info">
               Info
            </Button>
            <Button variant="contained" color="success">
               Success
            </Button>
         </Stack>

         <Stack display="block" spacing={2} direction="row">
            <Button variant="contained" size="small">
               Small
            </Button>
            <Button variant="contained" size="large">
               Large
            </Button>
            <Button variant="contained" size="medium">
               Medium
            </Button>
         </Stack>

         <Stack spacing={2} direction="row">
            <AdbRoundedIcon />
            <SendRoundedIcon />

            <Button variant="contained" startIcon={<SendRoundedIcon />}>
               Send
            </Button>
            <Button variant="contained" endIcon={<SendRoundedIcon />}>
               Send
            </Button>
         </Stack>
      </Stack>
   );
};
