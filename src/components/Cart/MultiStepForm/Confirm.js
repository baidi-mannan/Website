import React, { Fragment, useEffect } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { orderPlacedClearCart } from "../../../actions/Products";
import { useSnackbar } from "notistack";
import { makeStyles, Box } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
  box: {
    marginTop: "1.5rem",
    color: "#ffd05b",
  },
  listItem: {
    padding: "0px",
    color: "rgb(245,246,248)",
    "& *": {
      color: "rgb(245,246,248)",
    },
  },
  divider: {
    backgroundColor: "rgb(245,246,248)",
  },
}));

// Destructure props
const Confirm = ({ handleNext, handleBack, orderPlacedClearCart, values: { email, phone, street, pincode, city, country } }) => {
  const classes = useStyles();
  const currentPath = useHistory();

  const { enqueueSnackbar } = useSnackbar();

  const redirectToMyOrders = () => {
    orderPlacedClearCart();
    enqueueSnackbar("Order Placed Successfully! Thank you!", {
      variant: "success",
    });
    return currentPath.push("/myorders");
  };

  useEffect(() => {
    setTimeout(redirectToMyOrders, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <List disablePadding>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Mobile" secondary={phone} />
        </ListItem>

        <Divider className={classes.divider} />

        <ListItem className={classes.listItem}>
          <ListItemText primary="Email" secondary={email} />
        </ListItem>

        <Divider className={classes.divider} />

        <ListItem className={classes.listItem}>
          <ListItemText primary="Street" secondary={street} />
        </ListItem>

        <Divider className={classes.divider} />

        <ListItem className={classes.listItem}>
          <ListItemText primary="City" secondary={city} />
        </ListItem>

        <Divider className={classes.divider} />

        <ListItem className={classes.listItem}>
          <ListItemText primary="Country" secondary={country} />
        </ListItem>

        <Divider className={classes.divider} />

        <ListItem className={classes.listItem}>
          <ListItemText primary="Pincode" secondary={pincode} />
        </ListItem>

        <Divider className={classes.divider} />
      </List>
      <Box className={classes.box}>
        <Typography variant="h4" gutterBottom>
          Thank you!
        </Typography>
        <Typography component="h5">Your Order has been placed.</Typography>
      </Box>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    orderPlacedClearCart: () => dispatch(orderPlacedClearCart()),
  };
};

export default connect(null, mapDispatchToProps)(Confirm);
