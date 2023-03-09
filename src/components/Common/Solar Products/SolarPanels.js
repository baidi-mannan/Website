import React from "react";
import { Grid, Typography, Link, useMediaQuery, makeStyles } from "@material-ui/core";
import { panel, warranty, availability, panelCompanies } from "./FileLinks";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

const useStyles = makeStyles((theme) => ({
  outer: {
    backgroundColor: "#f3f3f3",
    marginBottom: "3rem",
  },
  content: {
    padding: "3rem",
    [theme.breakpoints.down("xs")]: {
      padding: "1.5rem",
    },
  },
  imageBox: {
    maxWidth: "500px",
    margin: "auto",
  },
  image: {
    display: "flex",
    width: "100%",
    aspectRatio: "1/1",
  },
  itemContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "2rem",
  },
  strikeLine: {
    backgroundColor: "#4d4d4d",
    height: "10px",
    width: "100%",
    position: "absolute",
    left: "0px",
    right: "0px",
    top: "50%",
    bottom: "50%",
  },
  card: {
    height: "100%",
    width: "100%",
    backgroundColor: "black",
    border: "10px solid white",
    padding: "2rem",
    [theme.breakpoints.down("xs")]: {
      padding: "1rem",
    },
    color: "white",
    position: "relative",
    boxShadow: "0 0 20px -5px #4d4d4d",
  },
  cardNumber: {
    backgroundColor: "#81b4f8",
    borderRadius: "50%",
    height: "40px",
    width: "40px",
    position: "absolute",
    top: "-25px",
    left: "-25px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  blueStrikeLine: {
    height: "1.7rem",
    backgroundColor: "#81b4f8",
    position: "absolute",
    left: "0px",
    right: "0px",
  },
}));

const SolarPanels = () => {
  const matches = useMediaQuery("(min-width:600px)");
  const classes = useStyles();
  return (
    <Grid item container xs={12} className={classes.outer}>
      <Grid item xs={12}>
        <div id='solarpanel' style={{ width: "100%", padding: "2rem 0" }}>
          <Typography color="secondary" variant={matches ? "h3" : "h4"} style={{ textAlign: "center" }}>
            <strong>SOLAR PANELS</strong>
          </Typography>
        </div>
      </Grid>
      <Grid item container xs={12} className={classes.itemContainer}>
        {/* <Grid item xs={false} md={1}></Grid> */}
        <Grid item xs={12} md={6}>
          <div className={classes.imageBox}>
            <img src={panel} alt="Solar Panel" className={classes.image} />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={classes.content}>
            <Typography variant={matches ? "h6" : "body1"} component="p">
              A solar panel (also known as a solar module) consists of a layer of silicon cells, a metal frame, a glass
              casing unit, and wiring to transfer electric current from the silicon. Silicon (atomic #14 on the periodic
              table) is a nonmetal with conductive properties that allow it to absorb and convert sunlight into usable
              electricity. When light hits a silicon cell, the light causes electrons in the silicon to be set in
              motion, initiating a flow of electric current. This is known as the “photovoltaic effect,” and it
              describes the general functionality of solar panel tech.
            </Typography>
            <br />
            <Typography variant="h6" component="p">
              The photovoltaic process works through the following broad steps:
            </Typography>
          </div>
        </Grid>
        {/* <Grid item xs={false} md={1}></Grid> */}
      </Grid>
      {/* photovolatic steps */}
      <Grid item container xs={12} style={{ padding: matches && "0 3rem", position: "relative", width: "100%" }}>
        {matches && <div className={classes.strikeLine}></div>}
        <Grid item xs={12} md={4} style={{ padding: "2rem" }}>
          <div className={classes.card}>
            <div className={classes.cardNumber}>
              <h2>1</h2>
            </div>
            <Typography variant="body1" component="p">
              The silicon photovoltaic solar cell absorbs solar radiation.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={4} style={{ padding: "2rem" }}>
          <div className={classes.card}>
            <div className={classes.cardNumber}>
              <h2>2</h2>
            </div>
            <Typography variant="body1" component="p">
              When the sun’s rays interact with the silicon cell, electrons begin to move, creating a flow of electric
              current.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={4} style={{ padding: "2rem" }}>
          <div className={classes.card}>
            <div className={classes.cardNumber}>
              <h2>3</h2>
            </div>
            <Typography variant="body1" component="p">
              Wires capture and feed this direct current (DC) electricity to a solar inverter to be converted to
              alternating current (AC) electricity.
            </Typography>
          </div>
        </Grid>
      </Grid>
      {/*  */}
      <Grid item xs={12}>
        <div className={classes.content}>
          <Typography variant={matches ? "h6" : "body1"} component="p" color="secondary">
            Solar panels, also referred to as photovoltaic panels, are built from a large number of individual solar
            cells, also called photovoltaic cells. The greater the number of solar cells, the more effective the solar
            panel functionality. The first solar panel was manufactured back in 1954, and since then, the use of solar
            technology has been rapidly expanding. PV panels, which cost anywhere (street lighting, heating systems,
            machine installations, charging of phones, cameras, signage and many other energy driven devices). from Rs.
            18 per watt to over Rs. 25 per watt, are the single biggest expense of a PV system. Their placement and
            mounting affect your system performance more than any other facet of the job. In a well-balanced
            grid-connected configuration, a solar array generates power during the day that is then used in the home at
            night.
          </Typography>
          <br />
          <Typography variant={matches ? "h6" : "body1"} component="p" color="secondary">
            Assisted by an inverter, solar panel arrays can be sized to meet the most demanding electrical load
            requirements. The AC current can be used to power loads in homes or commercial buildings, recreational
            vehicles and boats, remote cabins, cottages, or homes, remote traffic controls, telecommunications
            equipment, oil and gas flow monitoring, RTU, SCADA, and much more.
          </Typography>
        </div>
      </Grid>
      {/* warranty-- */}
      <Grid item container xs={12}>
        <Grid item xs={12} md={6}>
          <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className={classes.blueStrikeLine}></div>
            <img
              src={warranty}
              style={{ display: "flex", width: "150px", height: "150px", zIndex: 10 }}
              alt="Warranty"
            />
          </div>
          <div className={classes.content}>
            <Typography variant="h5" color="secondary" style={{ textAlign: "center" }}>
              <strong>WARRANTY OF SOLAR PANELS</strong>
            </Typography>
            <br />
            <Typography variant={matches ? "h6" : "body1"} color="secondary">
              A solar panel has two warranties: a performance and equipment guarantee. A solar panel’s performance
              warranty will typically guarantee 90% production at 10 years and 80% at 25 years. A solar panel’s
              equipment warranty covers the integrity of the panel itself and protects you against problems such as
              manufacturing defects, environmental issues, premature wear and tear etc. Most equipment warranties of
              solar panels last between 10-15 years but some premium panels have warranties for upto 25 years.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className={classes.blueStrikeLine}></div>
            <img
              src={availability}
              style={{ display: "flex", width: "150px", height: "150px", zIndex: 10 }}
              alt="Availability"
            />
          </div>
          <div className={classes.content}>
            <Typography variant="h5" color="secondary" style={{ textAlign: "center" }}>
              <strong>SOLAR PANEL BRANDS AVAILABILITY</strong>
            </Typography>
            <br />
            <Typography variant={matches ? "h6" : "body1"} component="p" color="secondary">
              You can purchase solar panels directly through our company website “SOLRUF”. The link for purchasing solar
              panels is given below:
            </Typography>
            <br />
            <Link
              style={{ color: "#bfbfbf", display: "flex", alignItems: "center" }}
              href="https://solruf.com/products/solarPanel"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Typography variant="body1" component="p" style={{ color: "#b3b3b3" }}>
                https://solruf.com/products/solarPanel
              </Typography>
              &nbsp;
              <OpenInNewIcon style={{ color: "#4d4d4d" }} />
            </Link>
            <br />
            <Typography variant="h5" color="secondary">
              We have the following brands available
            </Typography>
            <br />
            <div style={{ width: "100%" }}>
              <img src={panelCompanies} style={{ width: "100%" }} alt="Brands" />
            </div>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SolarPanels;
