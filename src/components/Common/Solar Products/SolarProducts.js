import React from "react";
import { Grid, useMediaQuery } from "@material-ui/core";
import { coverImg } from "./FileLinks";
import { Typography, makeStyles } from "@material-ui/core";
import SolarPanels from "./SolarPanels";
import SolarInverters from "./SolarInverters";
import SolarBatteries from "./SolarBatteries";
import SolarBalance from "./SolarBalance";
import SolarJunction from "./SolarJunction";

const useStyles = makeStyles((theme) => ({
  outerGrid: {
    backgroundColor: "white",
    "& .MuiTypography-root": {
      textAlign: "justify",
      lineHeight: 1.3,
    },
  },
  innerGrid: {
    padding: "3rem",
    [theme.breakpoints.down("xs")]: {
      padding: "1.5rem",
    },
  },
}));

const SolarProducts = () => {
  const matches = useMediaQuery("(min-width:600px)");
  const classes = useStyles();
  return (
    <Grid container className={classes.outerGrid}>
      <Grid item xs={12}>
        <div style={{ width: "100%" }}>
          <img src={coverImg} alt="Solar Products" style={{ width: "100%" }} />
        </div>
      </Grid>
      {/* Solar RAdiation.... */}
      <Grid item xs={12}>
        <div className={classes.innerGrid}>
          <Typography variant={matches ? "h6" : "body1"} component="p" color="secondary">
            Solar radiation is light – also known as electromagnetic radiation – that is emitted by the sun. While every
            location on Earth receives some sunlight over a year, the amount of solar radiation that reaches any one
            spot on the Earth’s surface varies. Solar technologies capture this radiation and turn it into electrical
            energy either through photovoltaic (PV) panels or through mirrors that concentrate solar radiation. This
            energy can be used to generate electricity using intertie PV systems or be stored in batteries or thermal
            storage. Solar intertie PV systems consist of panels, which collect the sunlight and turn it into
            electricity. The DC signals are fed into an inverter, which converts the DC into grid-compatible AC power
            (which is what you use in your home). Various switch boxes are included for safety reasons, and the whole
            thing is connected via wires and conduit.
          </Typography>
          <br />
          <Typography variant={matches ? "h5" : "h6"} color="secondary" style={{ textAlign: "center" }}>
            <strong>THE COMPONENTS USED IN PV SYSYTEM ARE GIVEN BELOW:</strong>
          </Typography>
        </div>
      </Grid>

      {/* Solar Panels */}
      <Grid item xs={12} style={{ height: "2rem", backgroundColor: "#81b3f8" }}></Grid>
      <SolarPanels/>
      {/* solar iverter */}
      <Grid item xs={12} style={{ height: "2rem", backgroundColor: "#5780AF" }}></Grid>
      <SolarInverters />
      {/* solar batteries */}
      <Grid item xs={12} style={{ height: "2rem", backgroundColor: "#678CEB" }}></Grid>
      <SolarBatteries />
      {/* solar Balance system */}
      <Grid item xs={12} style={{ height: "2rem", backgroundColor: "#F2AA5B" }}></Grid>
      <SolarBalance/>
       {/* solar junction  */}
       <Grid item xs={12} style={{ height: "2rem", backgroundColor: "#ffd05b" }}></Grid>
      <SolarJunction/>


    </Grid>
  );
};

export default SolarProducts;
