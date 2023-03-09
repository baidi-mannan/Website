import { Grid, Button, Typography, makeStyles, IconButton, useMediaQuery } from "@material-ui/core";
import React, { useState } from "react";
import { connect } from "react-redux";
import Product from "./Product";
import StepForm from "./MultiStepForm/StepForm";

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";

const Cart = ({ cart }) => {
  var sum = 0;
  for (let i = 0; i < cart.length; i++) {
    sum += cart[i].discountedPrice * cart[i].quantity;
  }

  const useStyles = makeStyles({
    outer: {
      backgroundColor: "rgb(245,246,248)",
      backgroundSize: "100vw 100vh",
    },
    Container: {
      paddingLeft: "0px",
      paddingRight: "0px",
      marginLeft: "0px",
      marginRight: "0px",
    },
    topBar: {
      marginTop: "4.5rem",
      marginBottom: "1rem",
      display: "flex",
      paddingLeft: "5rem",
    },
    bottomBar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      paddingLeft: "4.5rem",
      paddingRight: "7rem",
      color: "#2D2D2D",
    },
    stepForm: {
      position: "relative",
    },
  });

  const classes = useStyles();

  // matches return true for the window size > 600px
  const matches = useMediaQuery("(min-width:600px)");
  // To toggle view between cart items and multistep form in mobile view
  const [view, setView] = useState(false);

  const handleView = () => {
    setView(true);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  
  return (
    <div className={classes.outer}>
      <div className={classes.Container}>
        <Helmet>
          <title>SOLRUF INDIA - CART</title>
          <meta
            name="description"
            content="View Your Cart with SOLRUF INDIA.
      Solruf is a solar marketplace and installation platform. We provide a range of solar product catalogs offered by manufacturers and first hand distributors on our platform, providing better price to the solar installers and customers along with better availability for the products."
          />
        </Helmet>
        <Grid container align="center">
          {sum ? (
            <>
              {/* The left Side of Cart */}
              <Grid item xs={12} sm={8} md={9} style={{ display: matches ? "block" : view ? "none" : "block" }}>
                {/* the Cart header */}
                <div className={classes.topBar}>
                  <Typography variant="h4" component="h4" gutterBottom>
                    Your Shopping Cart
                  </Typography>
                </div>
                {/* Mapping all Cart Items */}
                <div>
                  {cart.map((prod) => {
                    return <Product key={prod.id} product={prod} />;
                  })}
                </div>
                {/* Goback Icon and SubTotal */}
                <div className={classes.bottomBar} style={{ marginBottom: matches ? "4rem" : "0rem" }}>
                  <Link to="/products">
                    <IconButton style={{ paddingLeft: "0px", color: "#2D2D2D" }}>
                      <ArrowLeftIcon fontSize="large" />
                      <Typography variant="body1">
                        <strong>Continue shopping</strong>
                      </Typography>
                    </IconButton>
                  </Link>
                  <Typography variant="h6">
                    <strong>Subtotal: ₹{sum}</strong>
                  </Typography>
                </div>

                {/* Proceed Button for only viewing in mobile size */}
                <div style={{ display: matches ? "none" : "block", margin: "1rem 1rem 2.5rem 1rem" }}>
                  <Button
                    variant="contained"
                    onClick={() => handleView()}
                    style={{ backgroundColor: "#ffd05b", color: "black" }}
                  >
                    <strong>Proceed</strong>
                  </Button>
                </div>
              </Grid>

              {/* The Right Side of Cart-- Multi Step Form */}
              <Grid
                item
                xs={12}
                sm={4}
                md={3}
                className={classes.stepForm}
                style={{ display: matches ? "block" : view ? "block" : "none" }}
              >
                <StepForm setView={setView} sum={sum} cart={cart} />
              </Grid>
            </>
          ) : (
            <>
              <Grid container alignItems="center">
                <Grid item xs={12} sm={8} md={9}>
                  <div>
                    <img src="/Assets/Cart/emptyCart.png" alt="logo" style={{ margin: "7%", height: "40%", width: "40%" }} />
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={4}
                  md={3}
                  style={{
                    backgroundColor: "#4D4D4D",
                    minHeight: matches ? "100%" : "300px",
                  }}
                >
                  <div style={{ marginTop: matches ? "45%" : "10%", padding: "2rem" }}>
                    <Typography variant="h5" color="primary">
                      Your Cart is Empty.
                    </Typography>
                    <br />
                    <br />
                    <Link to="/products">
                      <Button fullWidth variant="contained" style={{ backgroundColor: "primary", color: "black" }}>
                        <strong>Take Me to Products</strong>
                      </Button>
                    </Link>
                    <br />
                    <br />
                    <Link to="/myorders">
                      <Button fullWidth variant="contained" style={{ backgroundColor: "primary", color: "black" }}>
                        <strong>My Orders</strong>
                      </Button>
                    </Link>
                  </div>
                </Grid>
              </Grid>
            </>
          )}
        </Grid>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.Product.cart,
  };
};

export default connect(mapStateToProps)(Cart);
