import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Button, ButtonGroup, IconButton, Paper, useMediaQuery } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";
//redux
import { connect } from "react-redux";
import { removeFromCart, adjustQuantity, addToCart } from "../../actions/Products";
import { IMG_BASE_URL } from "../../config";
import Carousel, { consts } from "react-elastic-carousel";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import StarIcon from "@material-ui/icons/Star";
import StarOutlineIcon from "@material-ui/icons/StarOutline";

const useStyles = makeStyles((theme) => ({
  productImg: {
    display: "flex",
    height: "180px",
    width: "150px",
    borderRadius: "10%",
    objectFit: "cover",
  },
}));

const Product = React.memo(({ key, product, removeFromCart, adjustQuantity, addToCart, cart, imgThere, imgs }) => {
  const classes = useStyles();
  const [item, setItem] = useState(0);
  const matches = useMediaQuery("(min-width:600px)");

  //add to cart setup
  const handleMinus = () => {
    if (item <= 1) {
      removeFromCart(product.id);
    }
    // if (item > 0) {
    setItem(item - 1);
    adjustQuantity(product.id, item - 1);
    // }
  };

  const handlePlus = () => {
    setItem(item + 1);
    adjustQuantity(product.id, item + 1);
  };

  const handleAdd = () => {
    addToCart(product);
    if (item === 0) {
      setItem(1);
    }
  };

  const handleRemove = () => {
    removeFromCart(product.id);
    setItem(0);
  };

  const inCart = cart.find((item) => (item.name === product.name ? true : false));
  //num of items in cart
  var numOfItems = 0;

  if (inCart) {
    const thatItem = cart.filter((item) => item.id === product.id);
    numOfItems = thatItem[0].quantity;
  }

  /* Make Current quantity of the product equal to quantity of the same product
  in the cart(global redux store) so that when ever we switch routes the quantity always gets synchronised 
  and does not reset to zero on adding and substrating */
  useEffect(() => {
    setItem(numOfItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numOfItems]);

  // Custom Arrows for Carousel
  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer = type === consts.PREV ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />;
    return (
      <IconButton style={{ padding: "0px", margin: "auto 0px" }} onClick={onClick} disabled={isEdge}>
        {pointer}
      </IconButton>
    );
  };

  // Custom Dots for Carousel
  const myDots = ({ pages, activePage, onClick }) => {
    return (
      <div style={{ display: "flex" }}>
        {pages.map((page) => {
          const isActivePage = activePage === page;
          return (
            <FiberManualRecordIcon
              key={page}
              style={{ fontSize: "13px", opacity: isActivePage ? "55%" : "20%" }}
              onClick={() => onClick(page)}
              active={isActivePage.toString()}
            />
          );
        })}
      </div>
    );
  };

  return (
    <>
      <Grid item xs={12} sm={5} md={4}>
        <Paper
          key={product.id}
          elevation={2}
          style={{ padding: "10px", margin: matches ? "0px 10px 10px 10px" : "10px 30px", position: "relative" }}
        >
          {/* Discount % */}
          <div
            style={{
              position: "absolute",
              top: "0px",
              right: "0px",
              padding: "5px",
              borderTopRightRadius: "5px",
              backgroundColor: "#ffd54f",
            }}
          >
            <Typography variant="h6">
              <strong>-10%</strong>{" "}
            </Typography>
          </div>
          {/* Carousel */}
          <div>
            {product.images ? (
              <Carousel renderPagination={myDots} renderArrow={myArrow}>
                {product.images.map((img, index) => {
                  return (
                    <div key={index} style={{ padding: "10px" }}>
                      <img className={classes.productImg} src={`${IMG_BASE_URL}${img}`} alt="Item" />
                    </div>
                  );
                })}
              </Carousel>
            ) : (
              <Carousel renderPagination={myDots} renderArrow={myArrow}>
                <div style={{ padding: "10px" }}>
                  <img className={classes.productImg} src="/product/default-img.jpg" alt="EmptyItem" />
                </div>
              </Carousel>
            )}
          </div>
          {/* Details */}
          <Link
            to={{
              pathname: `/product/${product.id}`,
              state: product,
            }}
          >
            <Typography style={{ color: "black", opacity: "80%" }} gutterBottom variant="h6">
              {product.name}
            </Typography>
          </Link>
          <div>
            {product.rating > 0 ? (
              <>
                {[1, 2, 3, 4, 5].map((num, index) => {
                  if (num <= product.rating) {
                    return <StarIcon key={index} color="primary" />;
                  } else {
                    return <StarOutlineIcon key={index} color="primary" />;
                  }
                })}
              </>
            ) : (
              <>
                {[1, 2, 3, 4, 5].map((num, index) => {
                  return <StarOutlineIcon key={index} color="primary" />;
                })}
              </>
            )}
          </div>
          {/* Product Buttons */}
          <Grid container>
            <Grid item xs={5}>
              {product.type && product.type === "SOLARPANEL" ? (
                <Typography variant="h5" style={{ display: "flex", color: "black" }}>
                  {product.discountedPricePerWatt}&#8377;&nbsp;
                  <Typography variant="h6" component="p">
                    /watt
                  </Typography>
                </Typography>
              ) : (
                <>
                  <Typography variant="h5" style={{ display: "flex", color: "black" }}>
                    {product.discountedPrice}&#8377;
                  </Typography>
                </>
              )}
            </Grid>
            <Grid item xs={7} align="right">
              {numOfItems === 0 && (
                <Button
                  variant="contained"
                  style={{ color: "#515151", textTransform: "none", padding: "4px" }}
                  color="primary"
                  onClick={handleAdd}
                >
                  <strong>Add To Cart</strong>
                </Button>
              )}
              {(item > 0 || numOfItems > 0) && (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <ButtonGroup
                    variant="contained"
                    style={{ marginLeft: "auto" }}
                    color="primary"
                    aria-label="contained primary button group"
                  >
                    <Button style={{ padding: "4px 0px", color: "black", minWidth: "30px" }} onClick={handleMinus}>
                      <RemoveIcon />
                    </Button>
                    {inCart && (
                      <Button style={{ backgroundColor: "#fff", color: "#000", padding: "4px 0px", minWidth: "30px" }}>
                        {numOfItems}
                      </Button>
                    )}
                    {!inCart && (
                      <Button style={{ backgroundColor: "#fff", color: "#000", padding: "4px 0px", minWidth: "30px" }}>
                        {item}
                      </Button>
                    )}
                    <Button style={{ padding: "4px 0px", color: "black", minWidth: "30px" }} onClick={handlePlus}>
                      <AddIcon />
                    </Button>
                  </ButtonGroup>

                  <div className="font-icon-wrapper" style={{ marginLeft: "5px" }} onClick={handleRemove}>
                    <IconButton style={{ padding: "0px" }} color="secondary">
                      <DeleteIcon style={{ fontSize: "30px" }} />
                    </IconButton>
                  </div>
                </div>
              )}
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
});

const mapStateToProps = (state) => {
  return {
    cart: state.Product.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (itemID) => dispatch(removeFromCart(itemID)),
    adjustQuantity: (itemID, item) => dispatch(adjustQuantity(itemID, item)),
    addToCart: (product) => dispatch(addToCart(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
