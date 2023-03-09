import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import { removeFromCart, adjustQuantity, addToCart } from "../../actions/Products";
import { useLocation, useHistory, useParams } from "react-router-dom";
import { Button, ButtonGroup, Grid, IconButton, Typography, useMediaQuery, Divider, Link as Link1 } from "@material-ui/core";
import axios from "axios";
import { BASE_URL } from "../../config";
import { IMG_BASE_URL } from "../../config";
import { useSnackbar } from "notistack";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-elastic-carousel";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import StarIcon from "@material-ui/icons/Star";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";

import { Helmet } from "react-helmet";
import ProductTable from "./ProductTable";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginBottom: "2%",
    boxShadow: "0 2px 8px rgb(0 0 0 / 26%)",
  },
  outer: {
    backgroundColor: "#f2f2f2",
    padding: "5rem 3rem",
    [theme.breakpoints.down("xs")]: {
      padding: "1rem",
    },
  },
  inner: {
    backgroundColor: "#fff",
    padding: "2rem",
    [theme.breakpoints.down("xs")]: {
      padding: "20px",
    },
  },
  innerCarousel: {
    backgroundColor: "#fff",
    padding: "2rem 1rem",
    [theme.breakpoints.down("xs")]: {
      padding: "10px",
    },
  },
}));

const Product = React.memo(({ removeFromCart, adjustQuantity, addToCart,cart}) => {
  let location = useLocation();
  let history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const matches = useMediaQuery("(min-width:600px)");
  const dataSheet=`${IMG_BASE_URL}productImages/1/datasheet.pdf`;
  
  let params=useParams();
  
  // product
  const [product, setProduct] = useState({});
  useEffect(() => {
    if (location.state !== undefined) {
      setProduct(location.state);
    } else {
      var link = `${BASE_URL}product?name=${params.name}`;
      
      axios
        .get(link)
        .then((response) => {
          setProduct(response.data);
        })
        
        .catch((error) => {
          enqueueSnackbar("Your Product Couldn't Be Found", {
            variant: "error",
          });
         
          history.push("/products");
        });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  // cart
  const [item, setItem] = useState(0);

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

  //check if in there in cart
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

  const handleBuyNow = () => {
    if (item === 0) {
      addToCart(product);
      setItem(1);
    }
  };

  const classes = useStyles();

  //   const imgPaging = () => {
  //       return <a href="">
  //           <img src={`${baseUrl}/abstract0${i + 1}.jpg`} />
  //       </a>
  //   }

  // Custom Dots for Carousel
  const myDots = ({ pages, activePage, onClick }) => {
    return (
      <div style={{ display: "flex" }}>
        {pages.map((page) => {
          const isActivePage = activePage === page;
          return (
            <FiberManualRecordIcon
              key={page}
              style={{ fontSize: "15px", opacity: isActivePage ? "55%" : "20%" }}
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
      <div className={classes.outer}>
        <Grid container>
          <Helmet>
            <title>{product.name}</title>
            <meta name="description" content={product.description} />
          </Helmet>

          {/* Product Carousel -- Left Side */}
          <Grid item xs={12} md={6} className={classes.innerCarousel}>
            {product.images ? (
              <Carousel renderPagination={myDots} showArrows={false}>
                {product.images.map((img, index) => {
                  return (
                    <div key={index} style={{ padding: "20px 0" }}>
                      <img
                        className={classes.productImg}
                        style={{
                          height: matches ? "400px" : "300px",
                          width: "100%",
                        }}
                        src={`${IMG_BASE_URL}${img}`}
                        alt="Item"
                      />
                    </div>
                  );
                })}
              </Carousel>
            ) : (
              <Carousel renderPagination={myDots} showArrows={false}>
                <div style={{ padding: "20px" }}>
                  <img
                    className={classes.productImg}
                    style={{
                      height: matches ? "400px" : "300px",
                      width: "100%",
                    }}
                    src="/product/default-img.jpg"
                    alt="EmptyItem"
                  />
                </div>
              </Carousel>
            )}
          </Grid>

          {/* Product Details Right Side */}
          <Grid item xs={12} md={6} className={classes.inner}>
            <Typography variant={matches ? "h4" : "h5"} gutterBottom>
              {product.name}
            </Typography>

            <Grid item container>
              <Grid item xs={12} md={6}>
                <Typography variant="body1" gutterBottom>
                  BRAND: {product.brand}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} align={matches ? "right" : "left"}>
                <Typography variant="body1" gitterBottom>
                  8 available
                </Typography>
              </Grid>
            </Grid>

            <Divider style={{ backgroundColor: "#bfbfbf", height: "2px" }} />

            <div style={{ display: "flex", margin: "10px 0px" }}>
              {product.rating > 0 ? (
                <>
                  {[1, 2, 3, 4, 5].map((num, index) => {
                    if (num <= product.rating) {
                      return <StarIcon key={index} style={{ fontSize: !matches && "20px" }} color="primary" />;
                    } else {
                      return <StarOutlineIcon key={index} style={{ fontSize: !matches && "20px" }} color="primary" />;
                    }
                  })}
                </>
              ) : (
                <>
                  {[1, 2, 3, 4, 5].map((num, index) => {
                    
                    return <StarOutlineIcon key={index} style={{ fontSize: !matches && "20px" }} color="primary" />;
                  })}
                </>
              )}
              <Divider
                orientation="vertical"
                style={{ backgroundColor: "#bfbfbf", width: "1px", margin: "0px 30px" }}
                flexItem
              />
              <Typography variant="body1">1307 Ratings</Typography>
            </div>

            {/* Product Table */}
            <div>
              <ProductTable product={product} />
            </div>

            <Typography variant="body1" color="secondary" style={{ marginTop: "10px" }} gutterBottom>
              MRP:&nbsp;&nbsp;
              <strike style={{ fontWeight: "400", fontSize: "20px" }}>{product.productPrice}&#8377;</strike>
            </Typography>

            <Typography variant="h5" color="secondary" gutterBottom>
              Price:&nbsp;&nbsp;
              <strong style={{ color: "black", fontWeight: "400", fontSize: "25px" }}>
                {product.discountedPrice}&#8377;
              </strong>
            </Typography>

            {/* button group */}
            <div style={{ display: "flex", alignItems: "center" }}>
              {numOfItems === 0 && (
                <Button
                  variant="contained"
                  style={{
                    color: "#515151",
                    textTransform: "none",
                    padding: "5px",
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
                        padding: "5px",
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
                          padding: "5px",
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
                          padding: "5px",
                        }}
                      >
                        {item}
                      </Button>
                    )}
                    <Button
                      style={{
                        padding: "5px",
                        color: "black",
                      }}
                      onClick={handlePlus}
                    >
                      <AddIcon />
                    </Button>
                  </ButtonGroup>

                  <div onClick={handleRemove}>
                    <IconButton style={{ padding: "0px", marginLeft: "15px" }} color="secondary">
                      <DeleteIcon fontSize="large" />
                    </IconButton>
                  </div>
                </div>
              )}
              <Link
                to={{
                  pathname: `/cart`,
                  state: product,
                }}
              >
                <Button
                  variant="outlined"
                  style={{
                    marginLeft: "15px",
                    borderWidth: "2px",
                    color: "#515151",
                    textTransform: "none",
                    padding: "5px",
                  }}
                  onClick={handleBuyNow}
                  color="primary"
                >
                  <strong>Buy Now</strong>
                </Button>
              </Link>

              <Link1 color="secondary" href={dataSheet}>
              <div>
                <IconButton>
                  <PictureAsPdfIcon
                    style={{
                      fontSize: matches ? "40px" : "40px",
                      color: "#FC0000",
                    }}
                  />
                  <Typography variant="body1" style={{}}>
                    Download DataSheet
                  </Typography>
                </IconButton>
              </div>
            </Link1>

            </div>
          </Grid>
          {/* Product Details Bottom Part */}
          <Grid item xs={12} className={classes.inner} style={{ backgroundColor: "#bfbfbf" }}>
            <Typography variant="h5" gutterBottom>
              <strong>Product Description</strong>
            </Typography>
            <Typography variant={matches ? "body1" : "body2"} color="secondary">
              {product.description}
            </Typography>
          </Grid>
        </Grid>
      </div>
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
