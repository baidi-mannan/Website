import { Grid, makeStyles, Typography, useMediaQuery } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import VerifyOTP from "./VerifyOTP";
import { BASE_URL } from "../../config";
// import axios from 'axios';
import axiosConfig from "../../axiosConfig";
import LoadOrders from "./LoadOrders";
import { Helmet } from "react-helmet";

const useStyles = makeStyles({
  outer: {
    background: `url(/Assets/MyOrders/order_bg.JPG) top right no-repeat`,
    backgroundAttachment: "fixed",
    backgroundColor: "black",
    backgroundSize: "100vw 100vh",
  },
});

const MyOrders = () => {
  const classes = useStyles();
  const [loaded, setLoaded] = useState(false);
  const [orders, setOrders] = useState([]);
  const matches = useMediaQuery("(min-width:600px)");

  useEffect(() => {
    const link = `${BASE_URL}orders`;
    axiosConfig
      .get(link, { withCredentials: true })
      .then((response) => {
        setLoaded((loaded) => true);
        setOrders(response.data);
      })
      .catch((error) => {
        // console.log("not loaded.");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.outer}>
      <Grid container justify="center">
        <Helmet>
          <title>SOLRUF INDIA - My Orders</title>
          <meta
            name="description"
            content="View Your Orders with SOLRUF INDIA.
                Solruf is a solar marketplace and installation platform. We provide a range of solar product catalogs offered by manufacturers and first hand distributors on our platform, providing better price to the solar installers and customers along with better availability for the products."
          />
        </Helmet>

        <Grid item container xs={12} style={{ backgroundColor: "#ffd05b", padding: matches ? "20px" : "10px" }}>
          <Grid item md={7}></Grid>
          <Grid item xs={12} md={5}>
            <Typography variant="h4" align="center" color="secondary">
              <strong>SOLRUF ORDERS</strong>
            </Typography>
          </Grid>
        </Grid>

        <Grid item md={7}></Grid>
        <Grid item xs={12} md={5}>
          <div style={{ minHeight: "80vh", backgroundColor: "#f2f2f2" }}>
            {!loaded ? (
              // if not verified send otp and then get verified and display orderlist in VerifyOtp itself
              <div style={{ padding: matches ? "30px" : "10px" }}>
                <VerifyOTP />
              </div>
            ) : (
              // if already verified user directly display the orderlist
              <div style={{ padding: matches ? "30px" : "10px" }}>
                <LoadOrders res={orders} />
              </div>
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default MyOrders;
