import React, { useEffect, useState } from 'react';
import { Grid, Button, TextField, Typography, Box, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { useSnackbar } from "notistack";


import { BASE_URL } from '../../config';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      width: '100%',
      marginTop: "15px"
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));

const initialValues = {
    "name": null,
    "shortDescription": null,
    "description": null,
    "price": null
};

export const AddProduct = () => {
    const classes = useStyles();
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    
    const [type, setType] = useState("");
    const [prodFields, setProdFields] = useState(initialValues);
    const [seller, setSeller] = useState();

    useEffect(() => {
        var link = `${BASE_URL}seller`;
        axios
            .get(link, {withCredentials: true})
            .then((response) => {
                setSeller(response.data);
            })
            .catch((error) => {
                closeSnackbar();
                window.location.href = "/seller";
                enqueueSnackbar("Please Login First", {
                    variant: "error"
                })
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getProductPrototype = (event) => {
        setType(event.target.value);
    }

    const addProduct = () => {
        var link = `${BASE_URL}product?type=${type}`;
        var data = prodFields;
        data["type"] = type;
        data["brand"] = seller.seller;
        
        axios
            .post(link, data, {withCredentials: true})
            .then((response) => {
                closeSnackbar();
                enqueueSnackbar("Product Added", {
                    variant: "success"
                });
            })
            .catch((error) => {
                enqueueSnackbar("System Error", {
                    variant: "success"
                })
            })
    }

    const changeHandler = (e) => {
        setProdFields({...prodFields, [e.target.name]: e.target.value})
     }

    return (
        <>
        <Grid container justify="center" style={{padding: "30px"}}>
            <Grid item xs={12} md={6}>
            <Typography align="center">
            <img src="/Assets/Seller/solarpanel.svg" alt="sellerIcon" style={{height: "250px", width: "250px"}} />
            </Typography>
            <Typography variant="h6" color="secondary" style={{margin:"5px"}}>
                <br /> <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
            <div style={{ background: "white", padding: "30px", margin: "30px 0 50px" }}>
                <Box style={{ margin: "30px 0 50px" }}>
                    <Typography variant="h4" align="center" color="secondary">
                        ADD NEW PRODUCT
                    </Typography>
                    <hr />
                    <FormControl variant="outlined" className={classes.formControl}>
                        
                        <InputLabel id="demo-simple-select-outlined-label">Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={type}
                                onChange={getProductPrototype}
                                label="Age"
                            >
                            <MenuItem value={"ACDB"}>ACDB</MenuItem>
                            <MenuItem value={"DCDB"}>DCDB</MenuItem>
                            <MenuItem value={"SOLARINVERTER"}>SOLAR INVERTER</MenuItem>
                            </Select>

                            <TextField
                                label="Product Title"
                                name="name"
                                multiline
                                rows={2}
                                placeholder="Product Title"
                                onChange={changeHandler}
                                margin="normal"
                                required
                                variant="filled"
                            />

                            <TextField
                                label="Product Short Description"
                                name="shortDescription"
                                multiline
                                rows={2}
                                placeholder="Product Short Description"
                                onChange={changeHandler}
                                margin="normal"
                                required
                                variant="filled"
                            />

                            <TextField
                                label="Product Full Description"
                                name="description"
                                multiline
                                rows={4}
                                placeholder="Product Full Description"
                                onChange={changeHandler}
                                margin="normal"
                                required
                                variant="filled"
                            />

                            <TextField
                                label="Product Price"
                                name="price"
                                multiline
                                rows={2}
                                placeholder="Product Price"
                                onChange={changeHandler}
                                margin="normal"
                                required
                                variant="filled"
                            />

                            <Button
                                variant="contained"
                                color="primary"
                                onClick = {addProduct}
                                style={{ marginTop: "20px" }}
                            >
                                Add Product
                            </Button> 

                    </FormControl>
                </Box>
            </div>
            </Grid>
        </Grid>
        </>
    )
}
