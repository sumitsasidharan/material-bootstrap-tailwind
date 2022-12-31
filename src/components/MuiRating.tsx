import React, { useState } from 'react';
import { Stack, Rating } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const MuiRating = () => {
   const [ratingValue, setRatingValue] = useState<number | null>(3.5);
   console.log(ratingValue);

   const handleChange = (
      event: React.ChangeEvent<{}>,
      newValue: number | null
   ) => {
      setRatingValue(newValue);
   };

   // by default, the icon is star
   return (
      <Stack spacing={2}>
         <Rating
            value={ratingValue}
            onChange={handleChange}
            precision={0.5}
            size="large"
            icon={<FavoriteIcon fontSize="inherit" color="error" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            // readOnly
            highlightSelectedOnly
         />
      </Stack>
   );
};
