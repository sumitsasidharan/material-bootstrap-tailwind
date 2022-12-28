import { Typography } from "@mui/material"

export const MuiTypography = () => {
  return (
     <div>
        <Typography variant="h1">h1 heading</Typography>
        <Typography variant="h2">h2 heading</Typography>
        <Typography variant="h3">h3 heading</Typography>
        <Typography variant="h4" component="h1" gutterBottom >h4 heading</Typography>
        <Typography variant="h5">h5 heading</Typography>
        <Typography variant="h6">h6 heading</Typography>

        <Typography variant="subtitle1">subtitle 1</Typography>
        <Typography variant="subtitle2">subtitle 2</Typography>

        <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe at magnam quos, doloremque deserunt dolorum quibusdam molestias fugiat aliquam inventore in, earum eaque praesentium, vel pariatur distinctio odit nobis quo.</Typography>

        <Typography variant="body2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore beatae voluptatibus ad ducimus alias cum enim ipsa excepturi eveniet iure fugit aut quam vitae modi, blanditiis reprehenderit! Dolore quos, optio assumenda quibusdam nesciunt laudantium officiis! Mollitia quo accusantium expedita magnam.</Typography>
     </div>
  );
}
