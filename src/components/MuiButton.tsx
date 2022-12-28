import { Button, Stack, IconButton, ButtonGroup } from '@mui/material';
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

         {/* Button with Icons and Text */}
         <Stack spacing={2} direction="row">
            <AdbRoundedIcon />
            <SendRoundedIcon />

            <Button
               variant="contained"
               startIcon={<SendRoundedIcon />}
               disableRipple
               onClick={() => alert('hi sumit')}>
               Alert
            </Button>
            <Button
               variant="contained"
               endIcon={<SendRoundedIcon />}
               disableElevation>
               Send
            </Button>

            {/* Icon button without any text */}
            <IconButton aria-label="send" color="success" size="small">
               <SendRoundedIcon />
            </IconButton>
         </Stack>

         {/* Button Group */}
         <h2>Button Group</h2>
         <Stack direction="row">
            <ButtonGroup variant="contained" size="small" orientation='vertical' color="secondary" >
               <Button onClick={() => alert("Left clicked")} >Left</Button>
               <Button>Center</Button>
               <Button>Right</Button>
            </ButtonGroup>
         </Stack>
      </Stack>
   );
};
