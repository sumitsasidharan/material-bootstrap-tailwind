import React, { useState } from 'react';
import {
   Button,
   Dialog,
   DialogTitle,
   DialogContent,
   DialogContentText,
   DialogActions,
} from '@mui/material';

export const MuiDialog = () => {
   const [openDialog, setOpenDialog] = useState<boolean>(false);

   return (
      <>
         <Button onClick={() => setOpenDialog(true)}>Open dialog</Button>

         <Dialog
            open={openDialog}
            onClose={() => setOpenDialog(false)}
            aria-labelledby="dialog-title"
            aria-describedby="dialog-description">
            <DialogTitle id="dialog-title">Submit the test?</DialogTitle>

            <DialogContent>
               <DialogContentText id="dialog-description">
                  Are you sure you want to submit the test? You will not be able
                  to edit after submitting.
               </DialogContentText>
            </DialogContent>

            <DialogActions>
               <Button onClick={() => setOpenDialog(false)} >Cancel</Button>
               <Button autoFocus>Submit</Button>
            </DialogActions>
         </Dialog>
      </>
   );
};
