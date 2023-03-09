import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Card,Typography, CardActionArea, CardActions, CardContent, CardMedia, Chip } from '@material-ui/core';
import ModalComp from '../../Products/Modal';
import {Link  }from 'react-router-dom';
//redux
import { connect } from 'react-redux';
import {
    removeFromCart,
    adjustQuantity,
    addToCart,
  } from '../../../actions/Products';
  import { IMG_BASE_URL } from "../../../config";
  import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

// products https://services.dev.solruf.com/products?type=ACDB

const useStyles = makeStyles((theme) => ({
    card: {    
      Width: 345,
      minWidth: '240px',
      maxWidth: '345px',
      minHeight: '100%',
      maxHeight: '100%',
        marginRight: "10%",
    '& .MuiChip-root':{
        width: '110px',
        backgroundColor: "#4D4D4D",
        color: '#fff',
        margin: 'auto'
    }
    },
    media: {
      height: 200,
    },
    cardContent:{
        minHeight: 100,
        maxHeight: 200,
    },
    buttongroup:{
      display: 'flex',
      alignItems: 'center',
      '& > *': {
      color: "#fff",
      fontWeight: 'bold',
      },
    },
  }));


const Product = React.memo(({product, removeFromCart, adjustQuantity, addToCart, cart, imgThere, imgs}) => {
    const classes = useStyles();

    //modal setup
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div >
            <Card className={classes.card} >
                <CardActionArea>              
                    <CardMedia
                        className={classes.media}
                        image = 
                            {product.images ? `${IMG_BASE_URL}${product.images[0]}` : '/product/default-img.jpg' }
                            // image= {`/product/${imgs[0]}`}  //WORKS
                        title={product.name} 
                        onClick={handleOpen}
                        style={{cursor:'zoom-in'}}
                    />       
                    <CardContent className={classes.cardContent}>
                        <Link to={
                            {
                                pathname: `/product/${product.id}`,
                                state: product,
                            }
                        }>
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
                <CardActions style={{justifyContent: 'center'}}>
                    <Link to={
                                {
                                    pathname: `/product/${product.id}`,
                                    state: product,
                                }
                            }>
                        <Chip label="More" style={{cursor:"pointer"}} icon={<ArrowRightAltIcon style={{color:'#FFD05B'}} />}/>
                    </Link>
                </CardActions>
            </Card>

            <ModalComp open={open} setOpen={setOpen} handleOpen={handleOpen} handleClose={handleClose} 
                imgThere={imgThere} imgs={imgs} product={product} />        
        <br></br>    
        </div>    
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
