import React from 'react';
import { Typography } from '@material-ui/core';

import Order from './Order';

export const MyOrders = () => {

    const orders = [
        {
            "id": 1,
            "mobile": "7456911835"
        }
    ]

    return (
        <div style={{margin:"20px"}}>
            <Typography align="center" variant="h4">
                Your Orders
            </Typography>
        {orders.map((order) => {
            return <Order order={order} key={order.orderId} />;
        })}
        {orders.length === 0 ? 
            <Typography variant="h5">
                You have no previous Orders.
            </Typography>
        : null}
        </div>
    )
}
