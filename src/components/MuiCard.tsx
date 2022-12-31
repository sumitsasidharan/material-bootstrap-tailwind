import React from 'react'
import { Box, Card, CardContent, CardActions, Typography, Button, CardMedia } from '@mui/material';

export const MuiCard = () => {
  return (
    <Box width='300px' >
      <Card>
         <CardMedia component='img' height='140' image='https://source.unsplash.com/random' alt='unsplash image' />
         <CardContent>
            <Typography gutterBottom variant='h5' component='div' >
               React Material UI
            </Typography>
            <Typography variant='body2' color='text.secondary' >
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic temporibus neque repellendus distinctio accusantium velit provident. Quibusdam et tenetur perspiciatis.
            </Typography>
         </CardContent>

         <CardActions>
            <Button size='small' >Share</Button>
            <Button size='small' >Learn more</Button>
         </CardActions>
      </Card>
    </Box>
  )
}
