import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import axios from 'axios';

import Product from './Product';
import { BASE_URL } from '../../config';


const prodsSample = [
    {
        "id": 1,
        "name": "Test 1",
        "brand": "Test Brand",
        "price": 150.0
    },
    {
        "id": 2,
        "name": "Test 2",
        "description": "This is a test product",
        "price": 2500.0
    },
    {
        "id": 3,
        "name": "Test 3",
        "price": 250.0
    },
    {
        "id": 4,
        "name": "Test 4",
        "price": 1500.0
    }
]

export const Products = ({user}) => {

    const [prods, setProds] = useState(prodsSample);

    useEffect(() => {
        var link = `${BASE_URL}seller/products?brand=${user.seller}`;
        axios
            .get(link, {withCredentials: true})
            .then((response) => {
                setProds(response.data);
            })
            .catch((error) => {

            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    return (
        <>
        <Grid container style={{marginTop: "10px"}}>
            {prods.length > 0
            ?
            (<>
            {prods.map((prod) => {
                return (<Product key={prod.id} product={prod} />)
            })}
            </>)
            :
            <div>
                <Typography variant="h6" color="secondary" align="center">
                    You haven't added any products.
                </Typography>
            </div>
            }
        </Grid>
        </>
    )
}
