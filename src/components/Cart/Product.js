import React, { useState } from "react";
import { Typography, Grid, IconButton, useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, ButtonGroup } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { IMG_BASE_URL } from "../../config";

import { connect } from "react-redux";
import { removeFromCart, adjustQuantity } from "../../actions/Products";

const useStyles = makeStyles(() => ({
  box: {
    marginTop: "15px",
    marginBottom: "15px",
    background: "#e2e3e5",
  },
  outer: {
    paddingLeft: "5rem",
    paddingRight: "5rem",
  },
  image: {
    display: "flex",
    height: "85px",
    width: "85px",
    borderRadius: "50%",
    border: "4px solid white",
  },
  sizeButton: {
    backgroundColor: "#ffd05b",
    color: "black",
  },
  inputButton: {
    backgroundColor: "#fff",
    color: "#000",
    "&:hover": {
      backgroundColor: "#fff",
    },
  },
  innerGridItem: {
    padding: "10px",
  },
}));

const Product = ({ product, removeFromCart, adjustQuantity }) => {
  const classes = useStyles();

  const matches = useMediaQuery("(min-width:600px)");

  const [qty, setQty] = useState(product.quantity);

  const plusQuantity = () => {
    setQty(qty + 1);
    adjustQuantity(product.id, qty + 1);
  };

  const minusQuantity = () => {
    if (qty <= 1) {
      removeFromCart(product.id);
    }
    setQty(qty - 1);
    adjustQuantity(product.id, qty - 1);
  };

  return (
    <div className={classes.outer} align="center">
      <Grid container alignItems="center">
        <Grid item xs={11} md={11}>
          {/* Product CardItem in Box */}
          <Box className={classes.box} display="block">
            {/* Grid inside Box */}
            <Grid container alignItems="center">
              {/* Product Image */}
              <Grid item xs={12} sm={6} md={2} align="center">
                <div className={classes.innerGridItem}>
                  <img
                    className={classes.image}
                    src={product.images ? `${IMG_BASE_URL}${product.images[0]}` : "/product/default-img.jpg"}
                    alt="Product"
                  />
                </div>
              </Grid>
              {/* Product Name and Type */}
              <Grid item xs={12} sm={6} md={5} align="center">
                <div style={{ textAlign: matches ? "left" : "center" }} className={classes.innerGridItem}>
                  <Typography>
                    <strong>{product.name}</strong>
                    <br />
                    <small color="secondary">Type: {product.type}</small>
                  </Typography>
                </div>
              </Grid>
              {/* Product Quantity Button Group */}
              <Grid item xs={12} sm={6} md={3} align="center">
                <div className={classes.innerGridItem}>
                  <Typography>
                    <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                      <Button className={classes.sizeButton} onClick={minusQuantity} style={{ padding: "3px" }}>
                        <RemoveIcon />
                      </Button>
                      <Button className={classes.inputButton} style={{ padding: "3px" }}>
                        {qty}
                      </Button>
                      <Button className={classes.sizeButton} onClick={plusQuantity} style={{ padding: "3px" }}>
                        <AddIcon />
                      </Button>
                    </ButtonGroup>
                  </Typography>
                </div>
              </Grid>
              {/* Product Price */}
              <Grid item xs={12} sm={6} md={2} align="center">
                <div className={classes.innerGridItem}>
                  <Typography>
                    <strong>₹ {product.discountedPrice}</strong>
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        {/* Product Remove Icon */}
        <Grid item align="left" xs={1} md={1}>
          <IconButton onClick={() => removeFromCart(product.id)}>
            <CloseIcon fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (itemID) => dispatch(removeFromCart(itemID)),
    adjustQuantity: (itemID, qty) => dispatch(adjustQuantity(itemID, qty)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
