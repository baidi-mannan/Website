import React from "react";
import { Grid, Typography, makeStyles, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  
  innerDiv: {
    backgroundColor: "#BCE2FF",
    border: "1px solid white",
    borderRadius: "7px",
    padding:"2rem",
    height:"10rem",
    width:"100%",
    textAlign:"center",
    
  },
}));

const SolarDesignGrid = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <div style={{padding: matches ? "2rem 8rem 1rem 8rem" : "1rem 0 1rem 0"}}>
        {/* grid for solar design 4 parameters */}
      <Grid container style={{ backgroundColor: "#fafafa" }}>
        <Grid item xs={6} md={3} style={{ padding: matches ? "1rem" : "" }}>
          <div
            className={classes.innerDiv}

          >
            <Typography variant={matches ? "body1" : "body2"} color="secondary">
              <strong>MINIMUM PROJECT COST</strong>
            </Typography>
          </div>
        </Grid>

        <Grid item xs={6} md={3} style={{ padding: matches ? "1rem" : "" }}>
          <div
            className={classes.innerDiv}
          >
            <Typography variant={matches ? "body1" : "body2"} color="secondary">
              <strong>MAXIMUM ENERGY GENERATION</strong>
            </Typography>
          </div>
        </Grid>

        <Grid item xs={6} md={3} style={{ padding: matches ? "1rem" : "" }}>
          <div
            className={classes.innerDiv}
          >
            <Typography variant={matches ? "body1" : "body2"} color="secondary">
              <strong>MAXIMUM STABILITY & STRENGTH OF PLANT</strong>
            </Typography>
          </div>
        </Grid>

        <Grid item xs={6} md={3} style={{ padding: matches ? "1rem" : "" }}>
          <div
            className={classes.innerDiv}
          >
            <Typography variant={matches ? "body1" : "body2"} color="secondary">
              <strong>MINIMUM USE OF LAND AREA</strong>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default SolarDesignGrid;
