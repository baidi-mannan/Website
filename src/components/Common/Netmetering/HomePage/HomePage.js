import React from "react";
import { Grid, Typography, makeStyles, useMediaQuery } from "@material-ui/core";
import {
  coverImage,
  delhiIcon,
  karnatakaIcon,
  punjabIcon,
  gujratIcon,
  haryanaIcon,
  westbengalIcon,
  maharashtraIcon,
} from "./FileLinks";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  outer: {
    padding: "3rem 3rem 3rem 7rem",
    [theme.breakpoints.down("sm")]: {
      padding: "3rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "1rem",
    },
  },
  bgImage: {
    backgroundImage: `url(${coverImage})`,
    backgroundSize: "100% 100%",
    backgroundPosition: "top center",
    backgroundRepeat: "no-repeat",
  },
  bgi: {
    backgroundImage: `url(${coverImage})`,
    backgroundSize: "100% 100%",
    backgroundPosition: "top left",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: "none",
    },
  },
  stateSection: {
    padding: "3rem",
    [theme.breakpoints.down("xs")]: {
      padding: "1rem",
    },
  },
  stateBoxOuter: {
    display: "flex",
    justifyItems: "center",
    padding: "2rem",
  },
  stateBoxInner: {
    position: "relative",
    marginLeft: "auto",
    marginRight: "auto",
    cursor: "pointer",
  },
  stateImage: {
    display: "flex",
    height: "300px",
    width: "300px",
    justifyContent: "center",
    alignItems: "center",
    border: "10px solid #ffd05b",
    [theme.breakpoints.down("xs")]: {
      height: "240px",
      width: "240px",
    },
  },
  stateIconMaharashtra: {
    position: "absolute",
    height: "200px",
    width: "250px",
    top: "-40px",
    left: "-40px",
    [theme.breakpoints.down("xs")]: {
      height: "100px",
      width: "150px",
      top: "-20px",
      left: "-20px",
    },
  },
  stateIconGujrat: {
    position: "absolute",
    height: "200px",
    width: "200px",
    top: "-40px",
    right: "-35px",
    [theme.breakpoints.down("xs")]: {
      height: "100px",
      width: "100px",
      top: "-20px",
      right: "-15px",
    },
  },
  stateIconHaryana: {
    position: "absolute",
    height: "230px",
    width: "180px",
    bottom: "-30px",
    left: "-100px",
    [theme.breakpoints.down("xs")]: {
      height: "150px",
      width: "100px",
      bottom: "-30px",
      left: "-40px",
    },
  },
  stateIconKarnataka: {
    position: "absolute",
    height: "330px",
    width: "160px",
    bottom: "-10px",
    left: "-70px",
    [theme.breakpoints.down("xs")]: {
      height: "180px",
      width: "100px",
      bottom: "-10px",
      left: "-40px",
    },
  },
  stateIconDelhi: {
    position: "absolute",
    height: "170px",
    width: "170px",
    top: "-30px",
    right: "-30px",
    [theme.breakpoints.down("xs")]: {
      height: "100px",
      width: "100px",
      top: "-20px",
      right: "-20px",
    },
  },
  stateIconWest: {
    position: "absolute",
    height: "280px",
    width: "180px",
    bottom: "-30px",
    right: "-50px",
    [theme.breakpoints.down("xs")]: {
      height: "200px",
      width: "100px",
      bottom: "-20px",
      right: "-30px",
    },
  },
  stateIconPunjab: {
    position: "absolute",
    height: "170px",
    width: "170px",
    bottom: "-20px",
    left: "-50px",
    [theme.breakpoints.down("xs")]: {
      height: "100px",
      width: "100px",
      bottom: "-15px",
      left: "-30px",
    },
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:600px)");
  const blackbg = useMediaQuery("(min-width:960px)");
  return (
    <Grid container className={classes.bgi}>
      <Grid item xs={12}>
        <div className={classes.outer}>
          <Typography color="secondary" variant={matches ? "h3" : "h4"}>
            <strong>NETMETERING & SUBSIDY</strong>
          </Typography>
          <br />
          <Typography variant="body1" color="secondary">
            Net Metering is a system that gives solar energy owners credits for the power that they add to the grid.
            When solar panels produce excess power, that power is sent to the grid. And this power can be ‘taken back’
            when the solar plants are not functioning – example, during the night. When your house or business has been
            ‘net metered’, the bi-directional electricity meter will run backwards, and that means, depending upon local
            policies, you may get a credit to hedge against the electricity you use from the grid when it's not sunny or
            at night time. When you have a solar power system, it can often generate more electricity than you consume
            during daylight hours, with net metering, the homeowner is only billed for the "net" energy used each month,
            that is, the difference between the energy produced by the solar power system and the energy consumed by the
            house over the monthly billing period. The excess energy generated gets put back to the grid for your
            neighbors to use. Net metering can save homeowners a lump sum on their utility bills every year, so it's a
            good reason to make the money-saving choice and go solar sooner rather than later.
          </Typography>
          <br />
          <Typography variant="body1" color="secondary">
            There's another benefit from net metering. Since your solar system is generating electricity near the point
            where it will be used, this reduces strain on the grid's distribution and transmission infrastructure and
            minimizes energy loss from sending voltage many miles from the nearest power plant. The solar power systems
            are connected to the utility grid via the customers’ main service panel and meter and, when generating more
            power than is needed at the site, return excess electricity to the grid through the power meter, reversing
            the meter from its usual direction. Thus, a bi-directional meter is needed to avail net metering. Since the
            meter works in both directions (i.e. bi-directional meter)– one way to measure power purchased (when on-site
            demand is greater than on-site power production), and the other way to measure power returned to the grid –
            the customer pays the “net” of both transactions.
          </Typography>
          <br />
          <Typography variant="body1" color="secondary">
            <strong>Given below are the Net Metering policies of some of the states in India:</strong>{" "}
          </Typography>
        </div>
      </Grid>
      <Grid item container xs={12} justify="center" style={{ backgroundColor: !blackbg && "black" }}>
        <Grid item xs={false} md={2}></Grid>
        <Grid item container xs={12} sm={12} md={8} className={classes.stateSection}>
          <Grid item xs={12} sm={6}>
            <div className={classes.stateBoxOuter}>
              <div className={classes.stateBoxInner}>
                <Link to="/MH">
                  <div className={classes.stateImage} style={{ backgroundColor: "#bfbfbf" }}>
                    <Typography variant="h4" color="secondary">
                      <strong>Maharashtra</strong>
                    </Typography>
                  </div>
                  <img src={maharashtraIcon} className={classes.stateIconMaharashtra} alt="MaharashtraIcon" />
                </Link>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.stateBoxOuter}>
              <div className={classes.stateBoxInner}>
                <Link to="/GJ">
                  <div className={classes.stateImage} style={{ backgroundColor: "#bfbfbf" }}>
                    <Typography variant="h4" color="secondary">
                      <strong>Gujrat</strong>
                    </Typography>
                  </div>
                  <img src={gujratIcon} className={classes.stateIconGujrat} alt="GujratIcon" />
                </Link>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.stateBoxOuter}>
              <div className={classes.stateBoxInner}>
                <Link to="/HY">
                  <div className={classes.stateImage} style={{ backgroundColor: "#bfbfbf" }}>
                    <Typography variant="h4" color="secondary">
                      <strong>Haryana</strong>
                    </Typography>
                  </div>
                  <img src={haryanaIcon} className={classes.stateIconHaryana} alt="HaryanaIcon" />
                </Link>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.stateBoxOuter}>
              <div className={classes.stateBoxInner}>
                <Link to="/DL">
                  <div className={classes.stateImage} style={{ backgroundColor: "#bfbfbf" }}>
                    <Typography variant="h4" color="secondary">
                      <strong>Delhi</strong>
                    </Typography>
                  </div>
                  <img src={delhiIcon} className={classes.stateIconDelhi} alt="DelhiIcon" />
                </Link>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.stateBoxOuter}>
              <div className={classes.stateBoxInner}>
                <Link to="/KN">
                  <div className={classes.stateImage} style={{ backgroundColor: "#bfbfbf" }}>
                    <Typography variant="h4" color="secondary">
                      <strong>Karnataka</strong>
                    </Typography>
                  </div>
                  <img src={karnatakaIcon} className={classes.stateIconKarnataka} alt="KarnatakaIcon" />
                </Link>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.stateBoxOuter}>
              <div className={classes.stateBoxInner}>
                <Link to="/WB">
                  <div className={classes.stateImage} style={{ backgroundColor: "#bfbfbf" }}>
                    <Typography variant="h4" color="secondary">
                      <strong>West Bengal</strong>
                    </Typography>
                  </div>
                  <img src={westbengalIcon} className={classes.stateIconWest} alt="West BengalIcon" />
                </Link>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.stateBoxOuter}>
              <div className={classes.stateBoxInner}>
                <Link to="/PB">
                  <div className={classes.stateImage} style={{ backgroundColor: "#bfbfbf" }}>
                    <Typography variant="h4" color="secondary">
                      <strong>Punjab</strong>
                    </Typography>
                  </div>
                  <img src={punjabIcon} className={classes.stateIconPunjab} alt="PunjabIcon" />
                </Link>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomePage;
