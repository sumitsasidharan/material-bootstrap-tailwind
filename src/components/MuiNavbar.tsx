import React, { useState } from 'react';
import {
   AppBar,
   Toolbar,
   IconButton,
   Typography,
   Stack,
   Button,
   Menu,
   MenuItem,
} from '@mui/material';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const MuiNavbar = () => {
   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
   const OPEN = Boolean(anchorEl);

   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      // this will set button element as the anchor element
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   }

   return (
      <AppBar position="static">
         <Toolbar>
            <IconButton
               size="large"
               edge="start"
               color="inherit"
               aria-label="logo">
               <CatchingPokemonIcon />
            </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
               POKEMANAPP
            </Typography>

            <Stack direction="row" spacing={2}>
               <Button color="inherit">Features</Button>
               <Button color="inherit">Pricing</Button>
               <Button color="inherit">About</Button>
               <Button
                  color="inherit"
                  id="resources-button"
                  onClick={handleClick}
                  aria-controls={OPEN ? 'resources-menu' : undefined}
                  aria-haspopup='true'
                  aria-expanded={OPEN ? 'true' : undefined}
                  endIcon={<KeyboardArrowDownIcon />}
                  >
                  Resources
               </Button>
               <Button color="inherit">Login</Button>
            </Stack>

            {/* MENU COMPONENT */}
            <Menu id="resources-menu" anchorEl={anchorEl} open={OPEN} MenuListProps={{
               'aria-labelledby': 'resources-button'
            }}
            onClose={handleClose}
            anchorOrigin={{
               vertical: 'bottom',
               horizontal: 'right'
            }}
            transformOrigin={{
               vertical: 'top',
               horizontal: 'right'
            }}
            >
               <MenuItem onClick={handleClose} >Blog</MenuItem>
               <MenuItem onClick={handleClose} >Podcast</MenuItem>
            </Menu>
         </Toolbar>
      </AppBar>
   );
};
