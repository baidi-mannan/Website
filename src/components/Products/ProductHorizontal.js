import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  Button,
  ButtonGroup,
  IconButton,
  Divider,
  Hidden,
  useMediaQuery,
  Paper,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
// import ModalComp from "./Modal";
import { Link } from "react-router-dom";
//redux
import { connect } from "react-redux";
import { removeFromCart, adjustQuantity, addToCart } from "../../actions/Products";
import { IMG_BASE_URL } from "../../config";
// import { LiveTv } from '@material-ui/icons';

// products https://services.dev.solruf.com/products?type=ACDB
import Carousel, { consts } from "react-elastic-carousel";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import StarIcon from "@material-ui/icons/Star";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
// import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
// import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
  productImg: {
    display: "flex",
    borderRadius: "10px",
    objectFit: "cover",
    marginBottom: "20px",
  },
}));

const Product = React.memo(({ key, product, removeFromCart, adjustQuantity, addToCart, cart }) => {
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
    const pointer =
      type === consts.PREV ? (
        <ArrowBackIosIcon style={{ fontSize: !matches && "14px" }} />
      ) : (
        <ArrowForwardIosIcon style={{ fontSize: !matches && "14px" }} />
      );
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
      <Grid style={{ margin: matches ? "0px 20px 20px 10px" : "10px" }} key={product.id} item xs={12}>
        <Paper elevation={2}>
          <Grid
            container
            alignItems="center"
            style={{ backgroundColor: "#fdfcfa", borderRadius: "10px", position: "relative" }}
          >
            {/* Dicount Percent */}
            <Hidden smUp>
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  padding: "5px",
                  borderTopLeftRadius: "5px",
                  backgroundColor: "#ffd54f",
                }}
              >
                <Typography variant="h6">
                  <strong>-10%</strong>{" "}
                </Typography>
              </div>
            </Hidden>
            <Hidden xsDown>
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
            </Hidden>

            {/* Left Side of Product Card (horizontal) image carousel */}
            <Grid item xs={matches ? 4 : 5}>
              <div style={{ margin: matches ? "10px" : "5px" }}>
                {product.images ? (
                  <Carousel renderPagination={myDots} renderArrow={myArrow}>
                    {product.images.map((img, index) => {
                      return (
                        <div key={index} style={{ padding: "20px" }}>
                          <img
                            className={classes.productImg}
                            style={{ height: matches ? "200px" : "120px", width: matches ? "150px" : "80px" }}
                            src={`${IMG_BASE_URL}${img}`}
                            alt="Item"
                          />
                        </div>
                      );
                    })}
                  </Carousel>
                ) : (
                  <Carousel renderPagination={myDots} renderArrow={myArrow}>
                    <div style={{ padding: "20px" }}>
                      <img
                        className={classes.productImg}
                        style={{ height: matches ? "200px" : "120px", width: matches ? "150px" : "80px" }}
                        src="/product/default-img.jpg"
                        alt="EmptyItem"
                      />
                    </div>
                  </Carousel>
                )}
              </div>
            </Grid>

            <Divider orientation="vertical" flexItem style={{ marginRight: "-1px" }} />

            {/* Right Side of Product Card (Horizontal) Product Details */}
            <Grid item xs={matches ? 8 : 7}>
              <div style={{ margin: matches ? "10px 20px" : "10px" }}>
                <Grid container>
                  <Grid item xs={matches ? 10 : 12}>
                    <Link
                      to={{
                        pathname: `/product/${product.name}`,
                        state: product,
                      }}
                    >
                      <Typography
                        style={{ color: "black", opacity: "80%", lineHeight: "1" }}
                        gutterBottom
                        variant={matches ? "h5" : "body1"}
                      >
                        {product.name}
                      </Typography>
                    </Link>
                  </Grid>
                  <Grid item xs={12}>
                    <div style={{ margin: "5px 0px" }}>
                      {product.rating > 0 ? (
                        <>
                          {[1, 2, 3, 4, 5].map((num, index) => {
                            if (num <= product.rating) {
                              return <StarIcon key={index} style={{ fontSize: !matches && "20px" }} color="primary" />;
                            } else {
                              return (
                                <StarOutlineIcon key={index} style={{ fontSize: !matches && "20px" }} color="primary" />
                              );
                            }
                          })}
                        </>
                      ) : (
                        <>
                          {[1, 2, 3, 4, 5].map((num, index) => {
                            return (
                              <StarOutlineIcon key={index} style={{ fontSize: !matches && "20px" }} color="primary" />
                            );
                          })}
                        </>
                      )}
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2" style={{ fontSize: !matches && "11px" }} color="textSecondary">
                      <strong>- Brand: {product.brand}</strong>
                    </Typography>
                    <Typography variant="body2" style={{ fontSize: !matches && "11px" }} color="textSecondary">
                      <strong>- Rated Power: {product.ratedPower}</strong>
                    </Typography>
                    <Typography variant="body2" style={{ fontSize: !matches && "11px" }} color="textSecondary">
                      <strong>- Warranty: {product.warranty}</strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {product.type && product.type === "SOLARPANEL" ? (
                        <>
                          <Typography
                            variant="h4"
                            style={{ marginTop: "20px", color: "black", fontSize: matches ? "27px" : "20px" }}
                          >
                            {product.discountedPricePerWatt}&#8377;&nbsp;/watt
                          </Typography>
                          <Typography
                            variant="h4"
                            color="secondary"
                            style={{ marginTop: "20px", marginLeft: "30px", fontSize: matches ? "20px" : "15px" }}
                          >
                            <strike>{product.pricePerWatt}&#8377;&nbsp;/watt</strike>
                          </Typography>
                        </>
                      ) : (
                        <>
                          <Typography
                            variant="h4"
                            style={{ marginTop: "20px", color: "black", fontSize: matches ? "27px" : "20px" }}
                          >
                            {product.discountedPrice}&#8377;
                          </Typography>
                          <Typography
                            variant="h4"
                            color="secondary"
                            style={{ marginTop: "20px", marginLeft: "30px", fontSize: matches ? "20px" : "15px" }}
                          >
                            <strike>{product.productPrice}&#8377;</strike>
                          </Typography>
                        </>
                      )}
                    </div>
                  </Grid>
                </Grid>
                {/* Product Buttons */}
                <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                  {numOfItems === 0 && (
                    <Button
                      variant="contained"
                      style={{
                        color: "#515151",
                        textTransform: "none",
                        fontSize: !matches && "12px",
                        padding: !matches && "3px",
                      }}
                      color="primary"
                      onClick={handleAdd}
                    >
                      <strong>Add To Cart</strong>
                    </Button>
                  )}
                  {(item > 0 || numOfItems > 0) && (
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                        <Button
                          style={{
                            color: "black",
                            padding: matches ? "4px" : "2px",
                            minWidth: !matches && "10px",
                          }}
                          onClick={handleMinus}
                        >
                          <RemoveIcon />
                        </Button>
                        {inCart && (
                          <Button
                            style={{
                              backgroundColor: "#fff",
                              color: "#000",
                              padding: matches ? "4px" : "2px",
                              minWidth: !matches && "20px",
                            }}
                          >
                            {numOfItems}
                          </Button>
                        )}
                        {!inCart && (
                          <Button
                            style={{
                              backgroundColor: "#fff",
                              color: "#000",
                              padding: matches ? "4px" : "2px",
                              minWidth: !matches && "20px",
                            }}
                          >
                            {item}
                          </Button>
                        )}
                        <Button
                          style={{
                            padding: matches ? "4px" : "2px",
                            color: "black",
                            minWidth: !matches && "10px",
                          }}
                          onClick={handlePlus}
                        >
                          <AddIcon />
                        </Button>
                      </ButtonGroup>

                      <div onClick={handleRemove}>
                        <IconButton style={{ padding: "0px", marginLeft: matches ? "10px" : "5px" }} color="secondary">
                          <DeleteIcon style={{ fontSize: matches ? "30px" : "25px" }} />
                        </IconButton>
                      </div>
                    </div>
                  )}
                  <Link
                    to={{
                      pathname: `/product/${product.name}`,
                      state: product,
                    }}
                  >
                    <Button
                      variant="outlined"
                      style={{
                        marginLeft: matches ? "20px" : "5px",
                        borderWidth: "2px",
                        color: "#515151",
                        textTransform: "none",
                        fontSize: !matches && "12px",
                        padding: !matches && "2px",
                        minWidth: !matches && "50px",
                      }}
                      color="primary"
                    >
                      <strong>View</strong>
                    </Button>
                  </Link>
                </div>
              </div>
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
