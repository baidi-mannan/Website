import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
// import axios from 'axios';
import axiosConfig from '../../axiosConfig';
import { useSnackbar } from "notistack";

import Profile from './Profile';
import { Products } from '../Products/Products';
import Auth from '../Auth/Auth';
import { BASE_URL } from '../../config';
import FormDialog from './FormDialog';


export const LandingPage = () => {

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const [verified, setVerified] = useState(false);
    const [seller, setSeller] = useState({});

    useEffect(() => {
        var link = `${BASE_URL}seller`; // link for seller details
        axiosConfig
            .get(link, {withCredentials:true})
            .then((response) => {
                setVerified(true);
                closeSnackbar();
                enqueueSnackbar("Welcome Back", {
                    variant: "success"
                })
                setSeller(response.data);
            })
            .catch((error) => {
                
                // clear cookies to remove logout button
                document.cookie.split(";").map((cookie) => (
                    cookie.split("=").forEach((c) => {
                        var name = c.replace(/\s/g, ""); // trim
                        if (name === "jwtseller" || name === "idseller") {
                            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;domain=solruf.com;path=/";
                        }
                    })
                ))
                setVerified(false);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
        {!verified
        ?(
            <>
            <Auth />
            </>
        ):(
            <>
            {!seller["seller"]
            ?(
                <FormDialog user={seller} />
            ):(
                null
            )}
            <Grid container style={{margin: "20px 0px 10px 0px"}}>
                <Grid item xs={12} md={4}>
                    <Profile user={seller} />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Products user={seller} />
                </Grid>
            </Grid>
            </>
        )}
        </>
    )
}