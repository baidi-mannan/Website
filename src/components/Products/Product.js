import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import { 
    removeFromCart, 
    adjustQuantity, 
    addToCart 
} from '../../actions/Products';
import { useLocation, useHistory } from 'react-router-dom';
import { Box, Button, ButtonGroup, Grid, IconButton, Typography, Container} from '@material-ui/core';
import axios from 'axios';
import { BASE_URL } from '../../config';
import { IMG_BASE_URL } from '../../config';
import { useSnackbar } from "notistack";
import ModalComp from './Modal';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

import { Helmet } from "react-helmet";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom: '2%',
    boxShadow: '0 2px 8px rgb(0 0 0 / 26%)',
  },
  media: {
    height: 300,
  },
});
const Product = React.memo(({removeFromCart, adjustQuantity, addToCart, cart, id}) => {

    let location = useLocation();
    let history = useHistory();
    const { enqueueSnackbar } = useSnackbar();

    
    
    // product
    const [product, setProduct] = useState({});
    useEffect(() => {
        if (location.state !== undefined) {
            setProduct(location.state);
        } else {
            
            var link = `${BASE_URL}product/${id}`;
            axios
            .get(link)
            .then((response) => {
                setProduct(response.data);
                
            })
            .catch((error) => {
                enqueueSnackbar("Your Product Couldn't Be Found", {
                    variant: "error",
                })
                history.push("/products");
            });
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);    

    // cart
    const [item, setItem] = useState(0);

    const handleMinus = () =>{
        if(item>0){
            setItem(item - 1);
            adjustQuantity(product.id, item-1);
        }      
    }

    const handlePlus = () =>{
        setItem(item + 1);
        adjustQuantity(product.id, item+1);
    }

    const handleAdd = () =>{
    addToCart(product)
        if(item === 0){
            setItem(1);
        }
    }

    const handleRemove = () => {
        removeFromCart(product.id);
        setItem(0);
    }

    //check if in there in cart
    const inCart = cart.find((item) =>
        item.name === product.name ? true : false
    );
    
    //num of items in cart
    var numOfItems = 0;
   
    if(inCart){
        const thatItem =  cart.filter((item) => item.id === product.id );
        numOfItems = thatItem[0].quantity;
    }

    //modal setup
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    //check
    var imgThere ="no";
    var imgs;
    if(product.images == null){
        imgThere="no";      
    }else{
        imgThere="yes";
        imgs = product.images;
    }

    const classes = useStyles();

    return (
        <>
        <Container>
      <Helmet>
        
        <title>{product.name}</title>
        <meta
        name="description"
        content={product.description}
        />
      </Helmet>
        
        <Grid container 
            justify="center"
            style={{margin: "1% 0% 5% 0%"}}
            
        >
            <Grid item xs={12} md={5}></Grid>
            <Grid item xs={12} md={7}>
                <div style={{marginTop:"20px"}}>
                    <Typography variant="h4" color="primary">
                        <strong>{product.name}</strong>
                    </Typography>
                </div>  
            </Grid>
            <Grid item xs={12} md={5} style={{justifyContent: 'center', textAlign: 'center' }}>
                <Box style={{padding: '2%'}}>
                    <Card className={classes.root} align="center" style={{padding: '1%'}} >
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image = 
                                // {product.images ? `/product/${product.images[0]}` : '/product/default-img.jpg' }                           
                                {product.images ? `${IMG_BASE_URL}${product.images[0]}` : '/product/default-img.jpg' }
                                title={product.name} 
                                onClick={handleOpen}
                                style={{cursor:'zoom-in',}}
                            />
                        </CardActionArea>
                    </Card> 
                </Box>
            </Grid>
            <Grid item xs={12} md={7}>
                <Box style={{marginTop:"20px"}}>      
                    <Typography color="secondary" variant="h5">
                        <strong>Type:</strong> {product.type}
                    </Typography>
                    <Typography color="secondary" variant="h5">
                        {product.brand}                        
                    </Typography>
                    <br />
                    <Typography color="secondary" variant="h4">
                        ₹{product.price}
                    </Typography>
                    <Typography variant="h6" color="secondary">
                        <pre style={{
                            whiteSpace: 'pre-wrap', 
                        }}>
                            {product.description}
                        </pre>
                    </Typography>
                    <br />
                    <Grid container spacing={2} style={{flexGrow: 1, alignItems:"center"}}>
                        <Grid item xs={12} md={8} >
                            {(item > 0 || numOfItems>0) && 
                                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" style={{marginRight: "40px"}}>
                                    <Button onClick={handleMinus} > - </Button>
                                    {inCart  && <Button style={{backgroundColor: '#fff', color: '#000'}}>{numOfItems}</Button>}
                                    {!inCart  && <Button style={{backgroundColor: '#fff', color: '#000'}}>{item}</Button>}
                                    <Button onClick={handlePlus}> + </Button>
                                </ButtonGroup>}
                                {(numOfItems===0) && 
                                <Button variant="contained" aria-label="contained primary button group"  color="primary" 
                                        onClick={handleAdd} >
                                        Add To Cart
                                </Button>}
                                {(item >0 || numOfItems>0) && 
                                    <IconButton onClick={handleRemove} color="secondary">
                                        <DeleteIcon fontSize="large" />
                                    </IconButton>
                                }
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid> 

        <ModalComp open={open} setOpen={setOpen} handleOpen={handleOpen} handleClose={handleClose} 
                imgThere={imgThere} imgs={imgs} product={product} />  
        </Container>
        </>
    )
});

const mapStateToProps = (state) => {
    return{
        cart: state.Product.cart
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
      removeFromCart: (itemID) => dispatch(removeFromCart(itemID)),
      adjustQuantity: (itemID, item) => dispatch(adjustQuantity(itemID, item)),
      addToCart: (product) => dispatch(addToCart(product)),
    };
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(Product);
