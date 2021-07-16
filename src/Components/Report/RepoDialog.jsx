import react from 'react'; 
import React,{useContext,useEffect,useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import {fetcherContext } from '../../Pages/Main';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function RepoDialog({canOpen},{singleData}) {
console.log('can open ',canOpen);
  const [open, setOpen] = React.useState(canOpen);
  const [singleValue,setSingleValue] = useState(singleData);
  useEffect( ()=>{
    
      handleClickOpen();
    
  },[canOpen])
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button> */}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Total commits of this repository"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Here you can check the last commits 
          </DialogContentText>
          <div>
              <div>
                <p>User</p>
                <p>Starts </p>
              </div>
              <div>
              <p>Total Commmits </p>
              </div>
          </div>
        </DialogContent>
        <DialogActions>
         
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
