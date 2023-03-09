import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography } from '@material-ui/core';
import axios from 'axios';
import { useSnackbar } from "notistack";

import { BASE_URL } from '../../config';


const FormDialog = ({user}) => {
  const {enqueueSnackbar, closeSnackbar} = useSnackbar();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const [name, setName] = useState(user.seller);
  const [email, setEmail] = useState(user.email);
  const [mobile, setMobile] = useState(user.mobile);
  const [address, setAddress] = useState(user.address);

  const updateProfile =() => {
    setOpen(false);
    var link = `${BASE_URL}seller`;
    var data = {
        "seller": name,
        "email": email,
        "mobile": mobile,
        "address": address
    }
    
    axios
        .post(link, data, {withCredentials: true})
        .then((response) => {
            window.location.reload();
            closeSnackbar();
            enqueueSnackbar(`Welcome ${name}`, {
                variant: "success"
            })
        })
        .catch((error) => {

        });
}

  return (
    <div style={{margin: "15px 0px 5px 0px"}}>
      <Typography align="center"> 
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Please Update Your Details!
      </Button>
      </Typography>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">SOLRUF SELLER</DialogTitle>
        <DialogContent>
          <DialogContentText>
            We need these details to display your brand name on products and contact you for orders.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name={name}
            label="Brand Name"
            onChange={(event) => {setName(event.target.value)}}
            fullWidth
            required
          />
          <TextField
            autoFocus
            margin="dense"
            name={email}
            label="Email Address"
            onChange={(event) => {setEmail(event.target.value)}}
            type="email"
            fullWidth
            required
          />
          <TextField
            autoFocus
            margin="dense"
            name={mobile}
            label="Mobile"
            onChange={(event) => {setMobile(event.target.value)}}
            fullWidth
            required
          />
          <TextField
            autoFocus
            margin="dense"
            name={address}
            label="Address"
            onChange={(event) => {setAddress(event.target.value)}}
            fullWidth
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={updateProfile} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormDialog;