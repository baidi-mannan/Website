import React from "react";
import { Grid, Typography, makeStyles, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  grid: {
    backgroundColor: "#E68C48",
    paddingTop:"0"
    
  },
  innerDiv: {
    backgroundColor: "#FFEFE1",
    borderRadius: "7px",
    padding:"1rem",
    height:"10rem",
    width:"100%",
    [theme.breakpoints.down("xs")]: {
      padding: "4px",
    },

  },
  container:{
    [theme.breakpoints.down("md")]: {
      padding: "0",
    },
  },
}));

const GridBox = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:600px)");

  return (
    //   grid of pvsyst part #FF9C50
    <div className={classes.container} style={{padding: matches ? "0 12rem 0 12rem" : " ", backgroundColor:"#E68C48",}}>
      <Grid item container className={classes.grid}>
        <Grid
          item
          xs={4}
          style={{
            padding: matches ? "1rem" : "",
            marginTop: matches ? "-6rem" : "",
          }}
        >
          <div
            className={classes.innerDiv}
            style={{
              border: matches ? "4px solid #E47F33" : "1px solid #FF7103",
            }}
          >
            <Typography
              variant={matches ? "body1" : "body2"}
              align="center"
              color="secondary"
              style={{ fontSize: matches ? " " : "12px" }}
            >
              <strong>
                SELECTION OF SOLAR PANELS, INVERTERS AND OTHER COMPONENTS
              </strong>
            </Typography>
          </div>
        </Grid>

        <Grid
          item
          xs={4}
          style={{
            padding: matches ? "1rem" : "",
            marginTop: matches ? "-6rem" : "",
          }}
        >
          <div
            className={classes.innerDiv}
            style={{
              border: matches ? "4px solid #E47F33" : "1px solid #FF7103",
            }}
          >
            <Typography
              variant={matches ? "body1" : "body2"}
              align="center"
              color="secondary"
              style={{ fontSize: matches ? " " : "12px" }}
            >
              <strong>
                STRING DISTRIBUTION <br />
                BASED ON SOLAR INVERTER MPPT
              </strong>
            </Typography>
          </div>
        </Grid>

        <Grid
          item
          xs={4}
          style={{
            padding: matches ? "1rem" : "",
            marginTop: matches ? "-6rem" : "",
          }}
        >
          <div
            className={classes.innerDiv}
            style={{
              border: matches ? "4px solid #E47F33" : "1px solid #FF7103",
            }}
          >
            <Typography
              variant={matches ? "body1" : "body2"}
              align="center"
              color="secondary"
              style={{ fontSize: matches ? " " : "12px" }}
            >
              <strong>
                AC/ DC COMBINER BOX DESIGN AND ITS COMPONENT SELECTION
              </strong>
            </Typography>
          </div>
        </Grid>
      </Grid>
      
      <Grid
        item
        container
        xs={12}
        className={classes.grid}
        style={{ paddingTop: matches ? "6rem" : "" }}
      >
        <Grid
          item
          xs={4}
          style={{
            padding: matches ? "1rem" : "",
            marginTop: matches ? "-6rem" : "",
          }}
        >
          <div
            className={classes.innerDiv}
            style={{
              border: matches ? "4px solid #E47F33" : "1px solid #FF7103",
            }}
          >
            <Typography
              variant={matches ? "body1" : "body2"}
              align="center"
              color="secondary"
              style={{ fontSize: matches ? " " : "12px" }}
            >
              <strong>
                DC/AC CABLE SIZE CALCULATION & VOLTAGE DROP, POWER LOSS
                CALCULATIONS
              </strong>
            </Typography>
          </div>
        </Grid>

        <Grid
          item
          xs={4}
          style={{
            padding: matches ? "1rem" : "",
            marginTop: matches ? "-6rem" : "",
          }}
        >
          <div
            className={classes.innerDiv}
            style={{
              border: matches ? "4px solid #E47F33" : "1px solid #FF7103",
            }}
          >
            <Typography
              variant={matches ? "body1" : "body2"}
              align="center"
              color="secondary"
              style={{ fontSize: matches ? " " : "12px" }}
            >
              <strong>
                DESIGN OF SOLAR LT PANEL & SELECTION OF APPROPRIATE RELAYS,
                BREAKERS
              </strong>
            </Typography>
          </div>
        </Grid>

        <Grid
          item
          xs={4}
          style={{
            padding: matches ? "1rem" : "",
           marginTop: matches ? "-6rem" : "",
          }}
        >
          <div
            className={classes.innerDiv}
            style={{
              border: matches ? "4px solid #E47F33" : "1px solid #FF7103",
            }}
          >
            <Typography
              variant={matches ? "body1" : "body2"}
              align="center"
              color="secondary"
              style={{ fontSize: matches ? " " : "12px" }}
            >
              <strong>
                TECHNICAL AND FINANCIAL FEASIBILITY REPORT PREPARATION
              </strong>
            </Typography>
          </div>
        </Grid>
      </Grid>
      
    </div>
  );
};

export default GridBox;
