import React from 'react';
import { Box, Stack, Divider, Grid, Paper } from '@mui/material';

// Box is ideally a replacement for div tag, it's a wrapper or container

export const MuiLayout = () => {
   // Box is a 'div' by default, use component prop to change
   return (
      <Paper sx={{padding: '32px'}} elevation={4}>
         <Stack
            sx={{ border: '1px solid red' }}
            direction="row"
            spacing={2}
            divider={<Divider orientation="vertical" flexItem />}>
            <Box
               sx={{
                  backgroundColor: 'primary.main',
                  color: 'white',
                  height: '100px',
                  width: '100px',
                  padding: '16px',
                  '&:hover': {
                     backgroundColor: 'primary.light',
                  },
               }}>
               First Box
            </Box>

            <Box
               display="flex"
               height="100px"
               width="100px"
               bgcolor="success.light"
               p={2}>
               Second box
            </Box>
         </Stack>

         {/* THE GRID */}
         {/* 
            1) grid consists of 12 columns.
            2) each item can take  one or more columns as its width
            3) there are 5 breakpoints for 5 specific device width
            4) xs - mobile, sm - tablet, md - desktop, lg , xl etc.
            5) can assign int values to each breakpoint, for the 12 available columns occupied by that item
         */}

         {/* can use rowSpacing, columnSpacing instead of spacing */}
         <Grid container my={4} rowSpacing={2} columnSpacing={1} >
            <Grid item xs={12} sm={6}>
               <Box bgcolor="primary.main" p={2}>
                  Item 1
               </Box>
            </Grid>
            <Grid item xs='auto' sm={6}>
               <Box bgcolor="primary.light" p={2}>
                  Item 2
               </Box>
            </Grid>
            <Grid item xs={6} sm={6}>
               <Box bgcolor="primary.main" p={2}>
                  Item 3
               </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
               <Box bgcolor="primary.light" p={2}>
                  Item 4
               </Box>
            </Grid>
         </Grid>
      </Paper>
   );
};
