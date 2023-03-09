import React, { useEffect, useState } from 'react';
import Order from './Order';
import { useSnackbar } from "notistack";
import { Typography, Button } from '@material-ui/core';

const LoadOrders = ({user, typeUser, link, res}) => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const [orders, setOrders] = useState(res);
    
    useEffect(() => {
        closeSnackbar();
        enqueueSnackbar("Loading Orders...", {
            variant: "success"
        })
        setOrders(res);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [res]);

    const signOut = () => {
        document.cookie.split(";").map((cookie) => (
            cookie.split("=").forEach((c) => {
                var name = c.replace(/\s/g, ""); // trim
                if (name === "jwt" || name === "id") {
                    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;domain=solruf.com;path=/";
                }
            })
        ))
        window.location.reload();
    }

    return (
        <>
        <div style={{marginTop:"30px"}}>
        {orders.slice(0).reverse().map((order) => {
            return <Order order={order} key={order.orderId} />;
        })}
        {orders.length === 0 ?
            <div style={{margin:"10px"}}>
            <Typography variant="h6" color="secondary">
                <strong>You have no previous Orders.</strong>
            </Typography>
            </div>
        : null}
        </div>
        <div style={{ margin: "10px" }}>
            <Typography variant="h6" color="secondary">
                Sign In with different Mobile/Email?
            </Typography>
            <br />
            <Button
            variant="contained"
            color="primary"
            onClick={signOut}
            style={{ marginTop: "0px",color: "black",opacity:"80%" }}
            >
               <strong>Sign Out</strong> 
            </Button>
        </div>
        </>
    )
}

export default LoadOrders;