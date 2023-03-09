import React from "react";
import { Grid, Typography, Link, useMediaQuery, makeStyles } from "@material-ui/core";
import { inverter, inverterCompanies, warranty, availability } from "./FileLinks";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import clsx from "clsx";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  outer: {
    backgroundColor: "#f3f3f3",
    "& .MuiTypography-root": {
      textAlign: "justify",
    },
    marginBottom: "2rem",
  },
  content: {
    padding: "3rem",
    [theme.breakpoints.down("xs")]: {
      padding: "1.5rem",
    },
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  card: {
    backgroundColor: "black",
    color: "white",
    border: "10px solid white",
    boxShadow: "0 0 10px -5px #4d4d4d",
    padding: "2rem 1.5rem",
    [theme.breakpoints.down("xs")]: {
      padding: "1.5rem",
    },
  },
  cardButton: {
    backgroundColor: "#5780AF",
    height: "30px",
    width: "80px",
    textAlign: "center",
    border: "5px solid white",
    borderTop: "none",
    borderRadius: "10px",
    borderTopRightRadius: "0px",
    borderTopLeftRadius: "0px",
    margin: "0 auto",
  },
  cardGrid: {
    padding: "1rem",
    zIndex: 10,
  },
  strikeLine: {
    backgroundColor: "#4d4d4d",
    height: "10px",
    width: "100%",
    position: "absolute",
    left: "0px",
    right: "0px",
    top: "65px",
  },
  blueStrikeLine: {
    height: "1.7rem",
    backgroundColor: "#5780AF",
    position: "absolute",
    left: "0px",
    right: "0px",
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
}));

const SolarInverters = () => {
  const matches = useMediaQuery("(min-width:600px)");
  const classes = useStyles();
  const ToggleCards = {
    gridTieInverters: false,
    offGridInverters: false,
    centralInverters: false,
    batteryInverters: false,
    microInverters: false,
    hybridInverters: false,
  };

  const [expanded, setExpanded] = React.useState(ToggleCards);

  const handleExpandClick = (name) => {
    switch (name) {
      case "part1":
        setExpanded({ ...expanded, gridTieInverters: !expanded.gridTieInverters });
        break;
      case "part2":
        setExpanded({ ...expanded, offGridInverters: !expanded.offGridInverters });
        break;
      case "part3":
        setExpanded({ ...expanded, centralInverters: !expanded.centralInverters });
        break;
      case "part4":
        setExpanded({ ...expanded, batteryInverters: !expanded.batteryInverters });
        break;
      case "part5":
        setExpanded({ ...expanded, microInverters: !expanded.microInverters });
        break;
      case "part6":
        setExpanded({ ...expanded, hybridInverters: !expanded.hybridInverters });
        break;
      default:
        break;
    }
  };

  return (
    <Grid item container xs={12} className={classes.outer}>
      <Grid item xs={12}>
        <div id='solarinverter' style={{ width: "100%", padding: "2rem 0" }}>
          <Typography color="secondary" variant={matches ? "h3" : "h4"} style={{ textAlign: "center" }}>
            <strong>SOLAR INVERTER</strong>
          </Typography>
        </div>
      </Grid>
      <Grid item container xs={12}>
        <Grid item xs={12} md={6}>
          <div className={classes.content}>
            <Typography variant="h6" component="p">
              A solar inverter or PV inverter, is a type of electrical converter which converts the variable direct
              current (DC) output of a photovoltaic (PV) solar panel into a utility frequency alternating current (AC)
              that can be fed into a commercial electrical grid or used by a local, off-grid electrical network. It is a
              critical component in a photovoltaic system, allowing the use of ordinary AC-powered equipment.
            </Typography>
            <br />
            <Typography variant="h6" component="p">
              Solar power inverters have special functions adapted for use with photovoltaic arrays, including maximum
              power point tracking and anti-islanding protection. Inverters take the low-voltage, high-current signals
              from the PV panels and convert them into 120VAC (or 240 VAC), which is directly compatible with grid
              power.{" "}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.itemContainer}>
          <div className={classes.imageBox}>
            <img src={inverter} alt="Solar Panel" className={classes.image} />
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.content}>
            <Typography variant="h6" component="p">
              The inverter is the most sophisticated part of any common on-grid solar system and unfortunately, it’s
              also the part most likely to have issues due to being typically installed outside under extreme weather
              conditions including rain, humidity and high temperatures. Long lasting solar power systems require a high
              quality inverter with a robust convection cooling system.
            </Typography>
            <br />
            <Typography variant="h6" component="p">
              The classification of solar inverters can be done based on the application which includes the following:
            </Typography>
          </div>
        </Grid>
      </Grid>
      {/* --- */}
      <Grid item container xs={12} style={{ padding: matches && "0 3rem", position: "relative", width: "100%" }}>
        {matches && <div className={classes.strikeLine}></div>}
        <Grid item xs={12} md={4} className={classes.cardGrid}>
          <div className={classes.card}>
            <div>
              <Typography variant="body1" component="p" style={{ textAlign: "center" }}>
                <strong>GRID TIE INVERTERS</strong>
              </Typography>
              <Collapse in={expanded.gridTieInverters} timeout="auto" unmountOnExit>
                <div>
                  <br />
                  <Typography variant="body1" component="p">
                    A grid-tie inverter converts DC electricity into an alternating current (AC) that is suitable for
                    injecting into an electrical power grid. Grid tie inverters must mirror the exact phase and voltage
                    of the grid sine wave AC waveform to be able to best transfer electricity into the grid. The
                    frequency ranges 50Hz in India. If there is a utility loss to grid supply, a grid-tie inverter is
                    designed to automatically shut down. They do not provide backup power during utility outages. Solar
                    panels, wind turbines, hydro-electric systems, and the grid all use grid tie inverters.
                  </Typography>
                </div>
              </Collapse>
            </div>
          </div>
          <div className={classes.cardButton}>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded.gridTieInverters,
              })}
              onClick={() => handleExpandClick("part1")}
              aria-expanded={expanded.gridTieInverters}
              aria-label="show more"
              style={{ padding: "0px" }}
            >
              <ExpandMoreIcon style={{ fontSize: "28px" }} />
            </IconButton>
          </div>
        </Grid>
        {/* ----- */}
        <Grid item xs={12} md={4} className={classes.cardGrid}>
          <div className={classes.card}>
            <div>
              <Typography variant="body1" component="p" style={{ textAlign: "center" }}>
                <strong>OFF-GRID (STAND-ALONE) INVERTERS</strong>
              </Typography>
              <Collapse in={expanded.offGridInverters} timeout="auto" unmountOnExit>
                <div>
                  <br />
                  <Typography variant="body1" component="p">
                    They are used in isolated (remote) systems where the inverter draws its DC energy from batteries
                    charged by photovoltaic arrays and converts it to AC power. Many stand-alone inverters also
                    incorporate integral battery chargers to replenish the battery from an AC source or solar panels,
                    when available. Normally these do not interface in any way with the utility grid, and as such, are
                    not required to have anti-islanding protection.
                  </Typography>
                </div>
              </Collapse>
            </div>
          </div>
          <div className={classes.cardButton}>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded.offGridInverters,
              })}
              onClick={() => handleExpandClick("part2")}
              aria-expanded={expanded.offGridInverters}
              aria-label="show more"
              style={{ padding: "0px" }}
            >
              <ExpandMoreIcon style={{ fontSize: "28px" }} />
            </IconButton>
          </div>
        </Grid>
        <Grid item xs={12} md={4} className={classes.cardGrid}>
          <div className={classes.card}>
            <div>
              <Typography variant="body1" component="p" style={{ textAlign: "center" }}>
                <strong>CENTRAL INVERTERS</strong>
              </Typography>
              <Collapse in={expanded.centralInverters} timeout="auto" unmountOnExit>
                <div>
                  <br />
                  <Typography variant="body1" component="p">
                    Central Inverter is the only inverter which is not an ideal solution for residential and small
                    commercial installations. These types of inverters convert DC to AC and handle power management from
                    one device that is centrally located. These are related to string inverters however they are larger
                    & support additional strings of solar panels. Rather than running strings openly to the inverter,
                    the strings are allied together in a general combiner box so that the DC power runs toward the
                    middle inverter wherever it is transformed to AC power. These inverters need less connections of
                    components, however, they need a pad as well as combiner box as they are suitable for huge
                    installations through reliable production across the array. This kind of inverter is ideal for
                    larger commercial plants and industrial installations or even utility-scale solar farms. The range
                    of these inverters is from MWs to the hundreds of KWs with each inverter resembling a large metal
                    cabinet, being able to handle around 500kW of power.
                  </Typography>
                </div>
              </Collapse>
            </div>
          </div>
          <div className={classes.cardButton}>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded.centralInverters,
              })}
              onClick={() => handleExpandClick("part3")}
              aria-expanded={expanded.centralInverters}
              aria-label="show more"
              style={{ padding: "0px" }}
            >
              <ExpandMoreIcon style={{ fontSize: "28px" }} />
            </IconButton>
          </div>
        </Grid>
      </Grid>
      {/* --- */}
      <Grid item container xs={12} style={{ padding: matches && "0 3rem", position: "relative", width: "100%" }}>
        {matches && <div className={classes.strikeLine}></div>}
        <Grid item xs={12} md={4} className={classes.cardGrid}>
          <div className={classes.card}>
            <div>
              <Typography variant="body1" component="p" style={{ textAlign: "center" }}>
                <strong>BATTERY BACKUP INVERTERS</strong>
              </Typography>
              <Collapse in={expanded.batteryInverters} timeout="auto" unmountOnExit>
                <div>
                  <br />
                  <Typography variant="body1" component="p">
                    These are uni-directional inverters which are designed to draw energy from a battery, manage the
                    battery charge via an onboard charger, and export excess energy to the utility grid. These inverters
                    are capable of supplying AC energy and give non-stop operation to selected loads during a utility
                    outage, and are required to have anti-islanding protection. The role of this inverter is to convert
                    DC battery power into AC power and to feed it into your switchboard to replace a grid power. The
                    growth in battery-based inverters is increasing day by day. A battery inverter is the best option if
                    you are needing to retrospectively fit a battery into your solar system, or are wanting to keep your
                    battery separate to your solar panels and run through a different inverter. They exist to transition
                    the energy from solar batteries, shifting the energy charge from the charger to your grid.
                  </Typography>
                </div>
              </Collapse>
            </div>
          </div>
          <div className={classes.cardButton}>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded.batteryInverters,
              })}
              onClick={() => handleExpandClick("part4")}
              aria-expanded={expanded.batteryInverters}
              aria-label="show more"
              style={{ padding: "0px" }}
            >
              <ExpandMoreIcon style={{ fontSize: "28px" }} />
            </IconButton>
          </div>
        </Grid>
        <Grid item xs={12} md={4} className={classes.cardGrid}>
          <div className={classes.card}>
            <div>
              <Typography variant="body1" component="p" style={{ textAlign: "center" }}>
                <strong>MICROINVERTERS</strong>
              </Typography>
              <Collapse in={expanded.microInverters} timeout="auto" unmountOnExit>
                <div>
                  <br />
                  <Typography variant="body1" component="p">
                    Microinverters are modern in the solar industry. These inverters are very small, portable and also
                    typically used for commercial and residential purposes. They are housed on the back of an individual
                    solar panel with one inverter connection per solar panel having all the features of a central
                    inverter. Their capacity can be as low as 240 W each. This is great because it allows you to
                    optimize each panel to get the most energy from an array in case you have a shade over most solar
                    panels or an incomplete shade solution. They are module-level electronics since the ratio of solar
                    panel to microinverters is 1:1. Microinverters alter power from DC to AC exactly at the panel,
                    without the need of a string type inverter, minimizing the system-wide effects of a single panel
                    under-performing.
                  </Typography>
                </div>
              </Collapse>
            </div>
          </div>
          <div className={classes.cardButton}>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded.microInverters,
              })}
              onClick={() => handleExpandClick("part5")}
              aria-expanded={expanded.microInverters}
              aria-label="show more"
              style={{ padding: "0px" }}
            >
              <ExpandMoreIcon style={{ fontSize: "28px" }} />
            </IconButton>
          </div>
        </Grid>
        <Grid item xs={12} md={4} className={classes.cardGrid}>
          <div className={classes.card}>
            <div>
              <Typography variant="body1" component="p" style={{ textAlign: "center" }}>
                <strong>HYBRID INVERTERS</strong>
              </Typography>
              <Collapse in={expanded.hybridInverters} timeout="auto" unmountOnExit>
                <div>
                  <br />
                  <Typography variant="body1" component="p">
                    They manage photovoltaic arrays, battery storage and utility grid, which are all coupled directly to
                    the unit. These modern all-in-one systems are usually highly versatile and can be used for grid-tie,
                    stand-alone or backup applications but their primary function is self-consumption with the use of
                    storage. This inverter is also known as a multi-mode inverter and allows plugging batteries into the
                    solar power system. It engages with the connected batteries through 'DC coupling' (when both the
                    solar and batteries use one inverter and the DC from the solar panels charges the batteries via a DC
                    charger) and its electronics organise the charging and discharging of the battery.
                  </Typography>
                </div>
              </Collapse>
            </div>
          </div>
          <div className={classes.cardButton}>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded.hybridInverters,
              })}
              onClick={() => handleExpandClick("part6")}
              aria-expanded={expanded.hybridInverters}
              aria-label="show more"
              style={{ padding: "0px" }}
            >
              <ExpandMoreIcon style={{ fontSize: "28px" }} />
            </IconButton>
          </div>
        </Grid>
      </Grid>
      {/* warranty */}
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
              <strong>WARRANTY OF SOLAR INVERTERS</strong>
            </Typography>
            <br />
            <Typography variant={matches ? "h6" : "body1"} component="p" color="secondary">
              While solar panels have no moving parts and can be expected to continue working past 25 years, inverters
              are arguably the most likely part of the solar system to fail. Solar inverters are usually warrantied for
              a period ranging from 5 to 15 years, with an average standard warranty period of 10 years. Some companies
              offer the possibility to extend this period to up to 20 years. If you’re looking for added peace of mind,
              many inverter manufacturers offer extended warranties for an additional price
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
              <strong>SOLAR INVERTERS BRANDS AVAILABILITY</strong>
            </Typography>
            <br />
            <Typography variant={matches ? "h6" : "body1"} color="secondary">
              You can purchase solar inverters directly through our company website “SOLRUF”. The link for purchasing
              solar inverters is given below:
            </Typography>
            <br />
            <Link
              style={{ color: "#bfbfbf", display: "flex", alignItems: "center" }}
              href="https://solruf.com/products/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Typography variant="body1" component="p" style={{ color: "#b3b3b3" }}>
                https://solruf.com/products/
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
              <img src={inverterCompanies} style={{ width: "100%", height: "300px" }} alt="Brands" />
            </div>
          </div>
        </Grid>
      </Grid>
      {/* end */}
    </Grid>
  );
};

export default SolarInverters;
