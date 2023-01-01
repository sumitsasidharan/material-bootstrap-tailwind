import React from 'react';
import { Stack, CircularProgress, LinearProgress } from '@mui/material';

export const MuiProgress = () => {
  return (
    <Stack spacing={2} >
      <CircularProgress />
      <CircularProgress color='error' />
      <CircularProgress variant='determinate' value={65} />

      <LinearProgress />
      <LinearProgress color='error' />
      <LinearProgress variant='determinate' value={65} />
    </Stack>
  )
}
