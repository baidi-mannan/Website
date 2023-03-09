import React from "react";
import {
  Grid,
  Typography,
  makeStyles,
  useMediaQuery,
  Link,
  IconButton,
} from "@material-ui/core";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import ImageIcon from '@material-ui/icons/Image';
import GridBox from "./Grid4";
import SolarDesignGrid from "./Grid";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#bfbfbf",
    padding: "0 0 0 2.5rem",
    [theme.breakpoints.down("xs")]: {
      padding: "0",
    },
  },

  iconButton: {
    padding: "0px",
  },

  grid: {
    backgroundColor: "#fafafa",
    padding: "3rem",
    [theme.breakpoints.down("xs")]: {
      padding: "0.5rem",
    },
  },

  grid1: {
    backgroundColor: "#BCE2FF",
    padding: "3rem",
    [theme.breakpoints.down("xs")]: {
      padding: "0.5rem",
    },
  },

  grid2: {
    backgroundColor: "#fafafa",
    [theme.breakpoints.down("xs")]: {
      padding: "0.5rem",
    },
  },
}));

const SolarDesign = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:600px)");
  const baseUrl =
    "https://solruf-dev.s3.ap-south-1.amazonaws.com/Blog/Solar+Design/";

  return (
    <div className={classes.container}>
      <Grid container>
        <Grid
          className={classes.grid1}
          item
          xs={12}
          style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
        >
          <div style={{ maxWidth: "100%" }}>
            <img
              src={`${baseUrl}tag-1.jpg`}
              style={{ display: "flex", width: "100%" }}
              alt="Design"
            />
          </div>
        </Grid>
        <Grid className={classes.grid} item xs={12}>
          <Typography
            variant={matches ? "h3" : "h4"}
            color="secondary"
            style={{ textAlign: "center" }}
            gutterBottom
          >
            <strong>SOLAR DESIGN</strong>
          </Typography>
          <Typography
            variant={matches ? "body1" : "body2"}
            color="secondary"
            align="justify"
            style={{ fontSize: matches ? "20px" : " " }}
          >
            As the solar industry has grown, an increasing number of people are
            becoming familiar with the environmental and financial benefits
            associated with owning a solar system. Despite this increase in
            interest, the process in which these systems are designed has
            remained a mystery to many. Outfitting your rooftop with an adequate
            solar PV design for a solar panel is the first step to a lifetime
            experience of sustainable solar energy. Solar designs help one
            understand the technical parameters and Return on Investment (ROI)
            for a given project. Here we will take you through the basics of
            solar system design and the considerations that shape a final
            system. A solar design balances the 4 parameters mentioned below:
          </Typography>

          <SolarDesignGrid />
        </Grid>

        {/* Solar design components */}
        <Grid
          className={classes.grid}
          item
          xs={12}
          style={{ marginTop: matches ? "-40px" : "" }}
        >
          <Typography
            variant={matches ? "h4" : "h5"}
            color="secondary"
            align="center"
            gutterbottom
          >
            A Solar Design consists of the following components
          </Typography>
        </Grid>
        {/* 1 */}
        <Grid
          className={classes.grid2}
          item
          container
          xs={12}
          style={{ paddingBottom: matches ? "4rem" : "1rem" }}
        >
          <div
            style={{
              backgroundColor: "#ffd05b",
              height: "4rem",
              width: "4rem",
              position: "absolute",
              marginTop: matches ? "-28px" : "",
            }}
          >
            <Typography
              variant={matches ? "h3" : "h3"}
              color="secondary"
              align="center"
            >
              1.
            </Typography>
          </div>
          <Grid item xs={12} md={6} style={{ backgroundColor: "#7793FF" }}>
            <Typography
              variant={matches ? "h2" : "h4"}
              align="center"
              style={{
                color: "white",
                padding: matches ? "2rem" : "4rem 1rem 2rem 1rem",
                fontWeight: "lighter",
              }}
            >
              3D SOLAR PANEL PLACEMENT
              <br /> AND
              <br /> STRUCTURE DESIGN
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} style={{ backgroundColor: "#E8E8E8" }}>
            <Typography
              variant={matches ? "body1" : "body2"}
              align="justify"
              style={{
                padding: matches ? "2rem" : "1rem",
                fontSize: matches ? "20px" : "",
              }}
            >
              3D solar designs are made by analyzing your project’s site survey
              data and provide a complete 360° Bird Eye View of all sides
              including the top position of the solar system design. It gives a
              reference with which the solar modules and other components,
              mounting structure and foundation equipment will be placed with
              the aim to minimize the area for project and maximum energy
              generation. With 3D solar designs, one can even detect and prepare
              for future circumstances that may arise in project execution due
              to discrepancies in the site.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={9}
            style={{
              backgroundColor: "#7793FF",
              padding: matches ? "3rem" : "1.5rem",
            }}
          >
            <Typography
              variant={matches ? "h5" : "h5"}
              style={{
                color: "white",
                marginLeft: matches ? "50px" : "",
                fontSize: matches ? "30px" : "",
              }}
            >
              Sample solar design for a 5.7 KW system is given below:
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={3}
            style={{
              backgroundColor: "#7793FF",
              padding: matches ? "3rem" : "1.5rem",
            }}
          >
            <Link color="secondary" href={`${baseUrl}PDF/tag-2.pdf`}>
              <div>
                <IconButton disableRipple className={classes.iconButton}>
                  <PictureAsPdfIcon
                    style={{
                      fontSize: matches ? "60px" : "40px",
                      color: "#FC0000",
                    }}
                  />
                  <Typography variant="body1" style={{ color: "white" }}>
                    Download PDF
                  </Typography>
                </IconButton>
              </div>
            </Link>
          </Grid>
        </Grid>

        {/* 2 */}
        <Grid
          className={classes.grid2}
          item
          container
          xs={12}
          style={{ paddingBottom: matches ? "4rem" : "1rem" }}
        >
          <div
            style={{
              backgroundColor: "#ffd05b",
              height: "4rem",
              width: "4rem",
              position: "absolute",
              marginTop: matches ? "-28px" : "",
            }}
          >
            <Typography
              variant={matches ? "h3" : "h3"}
              color="secondary"
              align="center"
            >
              2.
            </Typography>
          </div>
          <Grid item xs={12} md={6} style={{ backgroundColor: "#474744" }}>
            <Typography
              variant={matches ? "h2" : "h4"}
              align="center"
              style={{
                color: "white",
                padding: matches ? "10rem 0 0 0" : "6rem 0 6rem 0",
                fontWeight: "lighter",
              }}
            >
              SHADOW
              <br /> ANALYSIS
              <br />
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} style={{ backgroundColor: "#E8E8E8" }}>
            <Typography
              variant={matches ? "body1" : "body2"}
              align="justify"
              style={{
                padding: matches ? "2rem" : "1rem",
                fontSize: matches ? "20px" : "",
              }}
            >
              Shadow analysis targets the plant inefficiencies namely, hot-spot
              effects on panels and low current generation caused by shadow on
              panels. Solar power plants must be in a 100% shadow-free area to
              get optimum generation. So while designing the solar power plant,
              we need to consider the sun position throughout the year and our
              site location azimuth. Shadow analysis is 97% accurate, and to
              make a site 100% shadow-free, one should do shadow analysis on
              22nd December and 21st June for a given location. If the site is
              shadow-free on these days, then shadow won’t be cast on panels in
              an entire year because these days are the shortest and longest
              days respectively. While making the 3D shadow model, we should
              also consider the height of the solar power plant and azimuth of
              the project as well.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={9}
            style={{
              backgroundColor: "#474744",
              padding: matches ? "3rem" : "1.5rem",
            }}
          >
            <Typography
              variant={matches ? "h5" : "h5"}
              style={{
                color: "white",
                marginLeft: matches ? "50px" : "",
                fontSize: matches ? "30px" : "",
              }}
            >
              Sample shadow analysis report for a 5.7 KW system is given below:
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={3}
            style={{
              backgroundColor: "#474744",
              padding: matches ? "3rem" : "1.5rem",
            }}
          >
            <Link color="secondary" href={`${baseUrl}PDF/tag-3.pdf`}>
              <div>
                <IconButton disableRipple className={classes.iconButton}>
                  <PictureAsPdfIcon
                    style={{
                      fontSize: matches ? "60px" : "40px",
                      color: "#FF0000",
                    }}
                  />
                  <Typography variant="body1" style={{ color: "white" }}>
                    Download PDF
                  </Typography>
                </IconButton>
              </div>
            </Link>
          </Grid>
        </Grid>

        {/* 3 */}
        <Grid
          className={classes.grid2}
          item
          container
          xs={12}
          style={{ paddingBottom: matches ? "4rem" : "1rem" }}
        >
          <div
            style={{
              backgroundColor: "#ffd05b",
              height: "4rem",
              width: "4rem",
              position: "absolute",
              marginTop: matches ? "-28px" : "",
            }}
          >
            <Typography
              variant={matches ? "h3" : "h3"}
              color="secondary"
              align="center"
            >
              3.
            </Typography>
          </div>
          <Grid item xs={12} md={6} style={{ backgroundColor: "#30642A" }}>
            <Typography
              variant={matches ? "h2" : "h4"}
              align="center"
              style={{
                color: "white",
                padding: matches ? "6rem 0 2rem 0" : "5rem 1rem 5rem 1rem",
                fontWeight: "lighter",
              }}
            >
              STRUCTURE INTEGRITY
              <br />
              AND
              <br />
              STAAD REPORT
              <br />
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} style={{ backgroundColor: "#E8E8E8" }}>
            <Typography
              variant={matches ? "body1" : "body2"}
              align="justify"
              style={{
                padding: matches ? "2rem" : "1rem",
                fontSize: matches ? "20px" : "",
              }}
            >
              The structure design is an essential part of the solar power plant
              design. Well-designed structure can sustain heavy wind storms (150
              KMPH). It’s important while designing the structure, one should
              get a STAAD report. STAAD report is a systematic structural
              analysis of a mounting structure. STAAD analysis provides an
              overview of structure integrity to withstand time and
              environmental conditions and also helps in optimizing the steel
              weight and maximum stability of structure for overall
              strengthening. The well-designed structure can help to optimize
              project cost and ROI.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={9}
            style={{
              backgroundColor: "#30642A",
              padding: matches ? "3rem" : "1.5rem",
            }}
          >
            <Typography
              variant={matches ? "h5" : "h5"}
              style={{
                color: "white",
                marginLeft: matches ? "50px" : "",
                fontSize: matches ? "30px" : "",
              }}
            >
              Sample structure design and STAAD report for a Solar water pumping
              system is given below:
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={3}
            style={{
              backgroundColor: "#30642A",
              padding: matches ? "3rem" : "1.5rem",
            }}
          >
            <Link color="secondary" href={`${baseUrl}PDF/tag-4.pdf`}>
              <div>
                <IconButton disableRipple className={classes.iconButton}>
                  <PictureAsPdfIcon
                    style={{
                      fontSize: matches ? "60px" : "40px",
                      color: "#FF2503",
                    }}
                  />
                  <Typography variant="body1" style={{ color: "white" }}>
                    Download PDF
                  </Typography>
                </IconButton>
              </div>
            </Link>
          </Grid>
        </Grid>

        {/* 4 */}
        <Grid
          className={classes.grid2}
          item
          container
          xs={12}
          style={{ paddingBottom: matches ? "4rem" : "1rem" }}
        >
          <div
            style={{
              backgroundColor: "#ffd05b",
              height: "4rem",
              width: "4rem",
              position: "absolute",
              marginTop: matches ? "-28px" : "",
            }}
          >
            <Typography
              variant={matches ? "h3" : "h3"}
              color="secondary"
              align="center"
            >
              4.
            </Typography>
          </div>

          <Grid item xs={12} md={6} style={{ backgroundColor: "#E68C48" }}>
            <div>
              <img
                src={`${baseUrl}tag-5.png`}
                style={{
                  display: "absolute",
                  width: matches ? "40%" : "50%",
                  height: matches ? "120px" : "110px",
                  float: "right",
                }}
                alt="PVSYST"
              />
            </div>
            <Typography
              variant={matches ? "h2" : "h4"}
              align="center"
              style={{
                color: "white",
                padding: matches ? "8rem 0 7rem 0" : "8rem 1rem 5rem 1rem",
                fontWeight: "lighter",
              }}
            >
              PV-SYST <br />
              GENERATION
              <br />
              REPORT
              <br />
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} style={{ backgroundColor: "white" }}>
            <Typography
              variant={matches ? "body1" : "body2"}
              align="justify"
              style={{
                padding: matches ? "2rem" : "1rem",
                fontSize: matches ? "20px" : "",
              }}
            >
              PV-SYST generation report provides precise forecasts on energy
              generation to calculate the power output and exact ROI of the
              given plant. It provides an overview on the efficiency of the
              plant operation along with the effect of losses due to equipment,
              shadow and other environmental conditions. It also takes into
              account the increasing inefficiencies of solar components over
              time while providing monthly electricity units generated by a
              system during a period of 25 years. A PV-SYST report helps in
              deciding the following factors:
            </Typography>
          </Grid>

          {/* import from Grid.js */}
          <GridBox />

          <Grid
            item
            xs={12}
            md={9}
            style={{
              backgroundColor: "#E68C48",
              padding: matches ? "3rem" : "1.5rem",
            }}
          >
            <Typography
              variant={matches ? "h5" : "h5"}
              style={{
                color: "white",
                marginLeft: matches ? "50px" : "",
                fontSize: matches ? "30px" : "",
              }}
            >
              Sample PV-SYST generation report is given below:
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={3}
            style={{
              backgroundColor: "#E68C48",
              padding: matches ? "3rem" : "1.5rem",
            }}
          >
            <Link color="secondary" href={`${baseUrl}PDF/tag-6.pdf`}>
              <div>
                <IconButton disableRipple className={classes.iconButton}>
                  <PictureAsPdfIcon
                    style={{
                      fontSize: matches ? "60px" : "40px",
                      color: "#FF2503",
                    }}
                  />
                  <Typography variant="body1" style={{ color: "white" }}>
                    Download PDF
                  </Typography>
                </IconButton>
              </div>
            </Link>
          </Grid>
        </Grid>

        {/* 5 */}
        <Grid
          className={classes.grid2}
          item
          container
          xs={12}
        >
          <div
            style={{
              backgroundColor: "#ffd05b",
              height: "4rem",
              width: "4rem",
              position: "absolute",
              marginTop: matches ? "-28px" : "",
            }}
          >
            <Typography
              variant={matches ? "h3" : "h3"}
              color="secondary"
              align="center"
            >
              5.
            </Typography>
          </div>
          <Grid item xs={12} md={6} style={{ backgroundColor: "teal" }}>
            <Typography
              variant={matches ? "h2" : "h4"}
              align="center"
              style={{
                color: "white",
                padding: matches
                  ? "6rem 2rem 2rem 2rem"
                  : "5rem 1rem 5rem 1rem",
                fontWeight: "lighter",
              }}
            >
              ELECTRICAL SINGLE LINE DIAGRAM (SLD)
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} style={{ backgroundColor: "#E8E8E8" }}>
            <Typography
              variant={matches ? "body1" : "body2"}
              align="justify"
              style={{
                padding: matches ? "2rem" : "1rem",
                fontSize: matches ? "20px" : "",
              }}
            >
              An electrical single line diagram is a 2D layout showing the
              interconnection in-between the different solar components
              including all the wiring, conduit, voltage, amperage and voltage
              drop calculations. Normally it is used to communicate how a system
              works in general and which components are connected to another
              (general layout). It uses single lines drawn to scale to connect
              graphic symbols representing the different components to indicate
              the path and components of an electrical circuit and represent
              general locations of some of the electrical components (i.e
              indoor/outdoor). An electrical SLD can also be used to create a
              bill of materials (electrical components) for the solar PV system.
              Electrical SLD also provides earthing and lightning arrestor
              layout.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={9}
            style={{
              backgroundColor: "teal",
              padding: matches ? "3rem" : "1.5rem",
            }}
          >
            <Typography
              variant={matches ? "h5" : "h5"}
              style={{
                color: "white",
                marginLeft: matches ? "50px" : "",
                fontSize: matches ? "30px" : "",
              }}
            >
              Electrical SLD for a 86.4KWP system is given below:
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={3}
            style={{
              backgroundColor: "teal",
              padding: matches ? "3rem" : "1.5rem",
            }}
          >
            <Link color="secondary" href={`${baseUrl}tag-7.jpg`} download>
              <div>
                <IconButton disableRipple className={classes.iconButton}>
                  <ImageIcon
                    style={{
                      fontSize: matches ? "60px" : "40px",
                      color: "#FF2503",
                    }}
                  />
                  <Typography variant="body1" style={{ color: "white" }}>
                    Download Image
                  </Typography>
                </IconButton>
              </div>
            </Link>
          </Grid>
              
           

       
        </Grid>
      </Grid>
    </div>
  );
};

export default SolarDesign;
