import React from 'react'
import { Card, Grid, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
      maxWidth: 345,
      minHeight: '100%',
      maxHeight: '100%',
      padding: '1%',
    },
    media: {
      height: 200,
    },
    cardContent:{
        height: '100%',
    }
}));

const Product = ({ product }) => {

    const classes = useStyles();

    return (
        <>
        <Grid item key={product.id} xs={12} md={4} style={{marginBottom:"15px", padding:"10px"}}>
        <Card className={classes.card}>
                <CardActionArea>              
                    <CardMedia
                        className={classes.media}
                        title={product.name} 
                        image='/product/default-img.jpg'
                    />       
                    <CardContent className={classes.cardContent}>
                        <Link to="#">
                            <Typography color="secondary" gutterBottom variant="h6" component="h2">
                                {product.name}
                            </Typography>                                 
                            {product.brand ? 
                                <Typography variant="body2" color="textSecondary" component="p">{product.brand}</Typography> : " "
                            }                           
                            <Typography variant="h6" component="h6" style={{color: "black"}}>
                                Price: {product.price}
                            </Typography>
                        </Link>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
        </>
    )
}

export default Product;