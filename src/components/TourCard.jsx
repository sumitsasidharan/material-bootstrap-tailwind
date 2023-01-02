import React from 'react'
import { Paper, Container, Box, Grid, Typography, Rating } from '@mui/material';
import { AccessTime } from '@mui/icons-material';

export const TourCard = () => {
  return (
     <Grid item xs={3}>
        <Paper elevation={3}>
           <img
              className="img"
              src="https://source.unsplash.com/random/780x400"
              alt="random image"
           />

           <Box paddingX={1}>
              <Typography variant="subtitle1" component="h2">
                 Immerse into the Falls
              </Typography>

              <Box
                 sx={{
                    display: 'flex',
                    alignItems: 'center',
                 }}>
                  <AccessTime sx={{ width: 12.5}} />
                 <Typography variant="body2" component="p" marginLeft={0.5} >
                    5 hours
                 </Typography>
              </Box>

              <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                 }}>

              </Box>
           </Box>
        </Paper>
     </Grid>
  );
}
