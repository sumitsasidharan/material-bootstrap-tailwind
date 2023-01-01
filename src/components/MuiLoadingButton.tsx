import React from 'react';
import { Stack, Box } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';

import { styled } from '@mui/material';

const StyledBox = styled(Box)(({ theme }) => ({
   height: '250px',
   width: '250px',
   // backgroundColor: theme.status.danger,
   // backgroundColor: theme.palette.neutral?.main,
   backgroundColor: theme.palette.neutral?.darker,
}))

export const MuiLoadingButton = () => {
   return (
      <>
         <Stack spacing={2} direction="row" my={2}>
            <LoadingButton variant="outlined">Submit</LoadingButton>
            <LoadingButton variant="outlined" loading>
               Submit
            </LoadingButton>

            <LoadingButton
               variant="outlined"
               color="secondary"
               loadingIndicator="Loading...">
               Fetch data
            </LoadingButton>
            <LoadingButton
               variant="outlined"
               loading
               loadingIndicator="Loading...">
               Fetch data
            </LoadingButton>

            <LoadingButton
               variant="contained"
               loadingPosition="start"
               startIcon={<SaveIcon />}>
               Save
            </LoadingButton>
            <LoadingButton
               loading
               variant="contained"
               loadingPosition="start"
               startIcon={<SaveIcon />}>
               Save
            </LoadingButton>
         </Stack>

         <StyledBox />
      </>
   );
};
