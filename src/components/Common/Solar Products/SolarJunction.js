import React from "react";
import { Grid, useMediaQuery } from "@material-ui/core";
import { Typography, makeStyles } from "@material-ui/core";
import {
  acdb,
  availability,
  chemicalEarthingSystem,
  controller,
  dcdb,
  earthCable,
  earthingJoint,
  earthingKit,
  earthPlate,
  groundMounting,
  mcb,
  moduleMounting,
  mppt,
  pipeEarthingSystem,
  plateEarthingSystem,
  pwn,
  rodEarthingSystem,
  rooftopMounting,
  shadeMounting,
  solarChargeController,
  solarJunction,
  spd,
  warranty,
  warrantyFuses,
  warrantyMCB,
  warrantySPD,
} from "./FileLinks";
import { Link } from "react-router-dom";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

const useStyles = makeStyles((theme) => ({
  outerGrid: {
    backgroundColor: "white",
    "& .MuiTypography-root": {
      textAlign: "justify",
      lineHeight: 1.3,
    },
  },
  grid1: {
    backgroundImage: `url(${solarJunction})`,
    height: "700px",
    width: "100%",
  },
  innerDiv: {
    margin: "auto",
    width: "70%",
  },

  innerGridDiv: {
    padding: "3rem 4rem 3rem 4rem",
    [theme.breakpoints.down("xs")]: {
      padding: "1.5rem",
    },
  },
  blackStrikeLine: {
    height: "1.7rem",
    backgroundColor: "black",
    position: "absolute",
    left: "0px",
    right: "0px",
  },
  brownStrikeLine: {
    height: "1.7rem",
    backgroundColor: "#2C1200",
    position: "absolute",
    left: "0px",
    right: "0px",
  },
  grayStrikeLine: {
    height: "1.7rem",
    backgroundColor: "#404040",
    position: "absolute",
    left: "0px",
    right: "0px",
  },
  staticCard: {
    width: "100%",
    backgroundColor: "black",
    border: "10px solid white",
    padding: "2rem",
    color: "white",
    position: "relative",
    boxShadow: "0 0 20px -5px #4d4d4d",
  },

  strikeLine: {
    backgroundColor: "#4d4d4d",
    height: "10px",
    width: "100%",
    position: "absolute",
    left: "0px",
    right: "0px",
    top: "20%",
  },

  content: {
    padding: "3rem",
    [theme.breakpoints.down("xs")]: {
      padding: "1.5rem",
    },
  },
}));

const SolarJunction = () => {
  const matches = useMediaQuery("(min-width:600px)");
  const classes = useStyles();

  return (
    <Grid container className={classes.outerGrid}>
      <Grid item container xs={12} className={classes.grid1}>
        <div className={classes.innerDiv}>
          <div
            style={{
              backgroundColor: "whitesmoke",
              opacity: 0.9,
              padding: matches ? "5rem" : "3rem 2rem 3rem 2rem",
              borderRadius: "20px",
            }}
          >
            <Typography
              variant={matches ? "h3" : "h4"}
              style={{ textAlign: "center" }}
            >
              <strong>SOLAR JUNCTION BOX</strong>
            </Typography>
          </div>
        </div>
      </Grid>

      <Grid item xs={12}>
        <div className={classes.innerGridDiv}>
          <Typography
            variant={matches ? "h6" : "body1"}
            component="p"
            color="secondary"
          >
            Solar Junction Box is a protective enclosure used in a Solar power
            System to combine, connect, and terminate electrical components. It
            is often referred to as a photovoltaic junction box (PV Junction
            Box) or a module junction box. The Junction Box includes built-in
            terminals for the joining of wires and encloses wire leads
            connecting the panel to the string and bypass diodes. It also
            protects the electrical connections against corrosion from
            environmental conditions, accidental damages, short circuits and
            helps organize solar power distribution in your home efficiently. A
            solar junction box is made of PP Plastic, ABS+PVC, etc. to provide
            strength and durability to the enclosure against high temperatures,
            UV rays, and other impacts. The level of protection offered by these
            boxes in its working environment is given by Ingress protection or
            IP ratings. The letters ‘IP’ followed by two numerals indicate the
            degree of protection offered by the equipment, where the first
            number indicates protection against ingress of solids and the second
            indicates protection against the ingress of water. The higher the IP
            rating of the box, the higher is the protection against moisture and
            dust. Most Solar junction boxes have screws or hinges for opening
            the box. These are mostly designed for surface mounting on ceilings,
            under floors or behind an access panel, particularly in domestic or
            commercial buildings.
          </Typography>
        </div>
      </Grid>

      <Grid item xs={12}>
        <Typography
          variant={matches ? "h4" : "h5"}
          color="secondary"
          style={{ textAlign: "center" }}
        >
          <strong>
            There are two types of Solar Junction boxes used in PV system
            installation:
          </strong>
        </Typography>
      </Grid>
      <Grid item container xs={12}>
        <Grid
          item
          xs={12}
          md={6}
          style={{ padding: matches ? "3rem 4rem" : "2rem" }}
        >
          <div>
            <img
              src={acdb}
              alt="ACDB"
              style={{ width: "100%", display: "flex" }}
            />
          </div>
          <div
            className={classes.innerGridDiv}
            style={{
              backgroundColor: "#C4C4C4",
              height: matches ? "25rem" : "",
            }}
          >
            <Typography
              variant={matches ? "h5" : "h6"}
              style={{ color: "white", textAlign: "center" }}
            >
              <strong>Alternating Current Distribution Box (ACDB)</strong>
            </Typography>
            <br />
            <Typography
              variant="body1"
              component="p"
              style={{ color: "white", textAlign: "justify" }}
            >
              <strong>
                The ACDB receives the AC power from the solar inverter and
                directs it to AC loads through the distribution board. They
                include necessary surge protection devices (SPD) and MCCB to
                protect the solar inverter from any type of damage or failures
                on load side or heavy voltage. ACDB boxes should be installed at
                any dry and safe place between the solar inverter and electrical
                load/ LT panel. ACDB’s are designed to isolate inverter and AC
                loads from mains as and when required for repair and
                maintenance.
              </strong>
            </Typography>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          style={{ padding: matches ? "3rem 4rem" : "2rem" }}
        >
          <div>
            <img
              src={dcdb}
              alt="DCDB"
              style={{ width: "100%", display: "flex" }}
            />
          </div>
          <div
            className={classes.innerGridDiv}
            style={{
              backgroundColor: "#C4C4C4",
              height: matches ? "25rem" : "",
            }}
          >
            <Typography
              variant={matches ? "h5" : "h6"}
              style={{ color: "white", textAlign: "center" }}
            >
              <strong>Direct Current Distribution Box (DCDB)</strong>
            </Typography>
            <br />
            <Typography
              variant="body1"
              component="p"
              style={{ color: "white", textAlign: "justify" }}
            >
              <strong>
                DCDB combines the DC output of many PV module strings and
                supplies it to the inverter while providing a protective fuse or
                circuit breaker for each circuit. They include surge protection
                devices (SPD) and fuses of proper rating depending upon the
                capacity of the power plant and the inverter/ battery bank
                ratings. DCDB protects the solar panel, solar inverter and solar
                battery from any type of damage in a Photovoltaic system.
              </strong>
            </Typography>
          </div>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className={classes.blackStrikeLine}></div>
          <img
            src={warranty}
            style={{
              display: "flex",
              width: "150px",
              height: "150px",
              zIndex: 10,
            }}
            alt="Warranty"
          />
        </div>
      </Grid>

      <Grid item xs={12}>
        <div style={{ padding: matches ? "1rem 6rem 3rem 6rem" : "2rem" }}>
          <Typography variant={matches ? "h4" : "h6"} color="secondary">
            <strong>Warranty of ACDB/DCDB:</strong>
          </Typography>
          <br />
          <Typography variant={matches ? "h5" : "body1"}>
            Solar junction boxes such as ACDB/ DCDB have an equipment warranty
            of 2-5 years provided by the company.
          </Typography>
        </div>
      </Grid>

      <Grid item container xs={12}>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            backgroundColor: "#F3F3F3",
            padding: matches ? "1rem 2rem" : "1rem",
            borderRight: matches ? "1px solid #606060" : "",
            borderBottom: "1px solid #606060",
          }}
        >
          <div style={{ padding: "1rem" }}>
            <Typography variant="h6" color="secondary">
              <strong>
                We have the following brands of fuses available for use in ACDB/
                DCDB:
              </strong>
            </Typography>
            <br />
          </div>
          <div style={{ width: "100%" }}>
            <img
              src={warrantyFuses}
              alt="Warranty fuses"
              style={{
                width: "100%",
                height: matches ? "250px" : "",
                display: "flex",
              }}
            />
          </div>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          style={{
            backgroundColor: "#F3F3F3",
            borderLeft: matches ? "1px solid #606060" : "",
            borderBottom: "1px solid #606060",
          }}
        >
          <div style={{ padding: "2rem" }}>
            <Typography variant="h6" color="secondary">
              <strong>
                We have the following brands of MCB/ MCCB available for use in
                ACDB/ DCDB:
              </strong>
            </Typography>
            <br />

            <img
              src={warrantyMCB}
              alt="Warranty mcb"
              style={{
                width: "50%",
                float: "left",
                height: matches ? "250px" : "200px",
              }}
            />
          </div>
          <div style={{ width: "100%" }}>
            <img
              src={mcb}
              alt="MCB"
              style={{
                width: "50%",
                float: "right",
                height: matches ? "250px" : "",
                display: "flex",
              }}
            />
          </div>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          style={{
            backgroundColor: "#F3F3F3",
            padding: matches ? "1rem 2rem" : "1rem",
            borderRight: matches ? "1px solid #606060" : "",
            borderTop: matches ? "1px solid #606060" : "",
          }}
        >
          <div style={{ padding: "1rem" }}>
            <Typography variant="h6" color="secondary">
              <strong>
                We have the following brands of SPD available for use in ACDB/
                DCDB:
              </strong>
            </Typography>
            <br />
          </div>
          <div style={{ width: "100%" }}>
            <img
              src={warrantySPD}
              alt="SPD"
              style={{
                width: "100%",
                height: matches ? "250px" : "",
                display: "flex",
              }}
            />
          </div>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          style={{
            backgroundColor: "white",
            padding: "1rem 4rem 1rem 4rem",
            borderLeft: matches ? "1px solid #606060" : "",
            borderTop: matches ? "1px solid #606060" : "",
          }}
        >
          <div style={{ width: "100%" }}>
            <img
              src={spd}
              alt="SPD"
              style={{ width: "100%", height: "400px", display: "flex" }}
            />
          </div>
        </Grid>
      </Grid>
      <Grid item xs={12} style={{ height: "3rem" }}></Grid>

      <Grid item container xs={12} style={{ backgroundColor: "#2C1200"}}>
        <Grid item xs={12}>
          <div style={{ padding: "2rem" }}>
            <Typography
              variant={matches ? "h3" : "h5"}
              style={{ color: "white", textAlign: "center" }}
            >
              <strong>EARTHING KIT</strong>
            </Typography>
          </div>
        </Grid>

        <Grid item xs={12}>
          <div
            style={{
              padding: matches ? "2rem" : "",
              width: "100%",
              textAlign: "center",
            }}
          >
            <img
              src={earthingKit}
              alt="Earthing kit"
              style={{ width: "60%", height: matches ? "600px" : "" }}
            />
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.innerGridDiv}>
            <Typography
              variant={matches ? "h6" : "body1"}
              component="p"
              style={{ color: "white" }}
            >
              Earthing is a way of transmitting any instant electricity
              discharge/ current directly to the ground through low resistance
              wires, electrical cables or conductive materials. This instant
              electricity discharge is mostly in the form of lightning. The
              objective of grounding is based upon the principle of providing a
              straight, low resistive path for very high currents that connects
              electrical circuits to the ground for lightning protection,
              voltage surges, personal protection, property protection, etc..
              The earthing component is connected between the equipment body or
              enclosure and the earth pit which is placed under the earth
              surface. Earth could be considered as a sea of infinite
              electricity.
            </Typography>
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className={classes.innerGridDiv}>
            <Typography
              variant={matches ? "h4" : "h6"}
              style={{ color: "white" }}
            >
              <strong>Earthing is provided in order:</strong>
            </Typography>

            <Typography
              variant={matches ? "h5" : "body1"}
              style={{ color: "white", padding: "1rem" }}
              gutterBottom
            >
              <ul>
                <li>To avoid electric shock</li>
                <br />
                <li>
                  To avoid risk of fire as a result of earth leakage current
                  through unwanted path{" "}
                </li>
                <br />
                <li>
                  To ensure that no current carrying conductor rises to a
                  potential with respect to the general mass of earth than its
                  designed insulation
                </li>
                <br />
                <li>
                  To stabilize circuit potential with respect to ground and
                  limit the overall potential rise
                </li>
              </ul>
            </Typography>
            <br />
            <br />

            <Typography
              variant={matches ? "h4" : "h6"}
              style={{ color: "white" }}
            >
              <strong>
                The list of equipments of a solar PV system that should be
                grounded are:
              </strong>
            </Typography>

            <Typography
              variant={matches ? "h5" : "body1"}
              style={{ color: "white", padding: "1rem" }}
            >
              <ul>
                <li>
                  The aluminum frame of the solar modules and large metallic
                  structures used for solar panels{" "}
                </li>
                <br />
                <li>The outer frame of the inverter </li>
                <br />
                <li>
                  Wiring of a PV system by grounding all of them through a
                  metallic conduit or cable trays along their entire length
                </li>
                <br />
                <li>The negative side of the power system</li>
              </ul>
            </Typography>
            <br />
            <br />
            <Typography
              variant={matches ? "h4" : "h6"}
              style={{ color: "white" }}
              gutterBottom
            >
              <strong>
                The components required for earthing of a PV system are:{" "}
              </strong>
            </Typography>
          </div>
        </Grid>
      </Grid>

      <Grid
        item
        container
        xs={12}
        style={{
          backgroundColor: "#F3F3F3",
          padding: matches && "0 3rem",
          position: "relative",
          width: "100%",
        }}
      >
        {matches && <div className={classes.strikeLine}></div>}

        <Grid item xs={12} md={4} style={{ padding: "2rem" }}>
          <div className={classes.staticCard}>
            <Typography
              variant="body1"
              component="p"
              style={{ textAlign: "center" }}
            >
              <strong>EARTH CABLE</strong>
            </Typography>
            <br />
            <Typography variant="body1" component="p">
              Most earthing cables are made of copper strips instead of a single
              bare copper rod. This conductor is used to connect all the
              metallic parts of the PV system. It is required that the earth
              wire in the cross-sectional area must be less than the solid wire
              used in the electrical wiring system. The minimum diameter of the
              earth cable must not be less than the largest diameter cable being
              used in the DC system.
            </Typography>
            <br />
            <img src={earthCable} alt="Earth Cable" style={{ width: "100%" }} />
          </div>
        </Grid>
        <Grid item xs={12} md={4} style={{ padding: "2rem" }}>
          <div className={classes.staticCard}>
            <Typography
              variant="body1"
              component="p"
              style={{ textAlign: "center" }}
            >
              <strong>EARTHING JOINT</strong>
            </Typography>
            <br />
            <Typography variant="body1" component="p">
              The earthing joint includes the conductors that fixes the earthing
              conducted to the earth. The lead of the ground must be low size,
              straight, & should include a minimum amount of joints.
            </Typography>
            <br />
            <img
              src={earthingJoint}
              alt="Earthing Joint"
              style={{ width: "100%" }}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={4} style={{ padding: "2rem" }}>
          <div className={classes.staticCard}>
            <Typography
              variant="body1"
              component="p"
              style={{ textAlign: "center" }}
            >
              <strong>EARTH PLATE</strong>
            </Typography>
            <br />
            <Typography variant="body1" component="p">
              This is the part that is hidden underground. It is linked to the
              earthing joint. It can be a pipe, plate or metallic rod, or plate,
              which has extremely low resistance for carrying the fault current
              to the ground safely. It can be made of copper or iron rod and
              must be placed in wet earth. In the case where the moisture is of
              low content, then some water is to be poured into the earth plate.
              It is to be placed in the vertical position and the area around it
              covered with salt and charcoal lime.
            </Typography>
            <br />
            <img src={earthPlate} alt="Earth Plate" style={{ width: "100%" }} />
          </div>
        </Grid>
      </Grid>

      <Grid item container xs={12} style={{ backgroundColor: "#2C1200" }}>
        <Grid item xs={12}>
          <div className={classes.innerGridDiv}>
            <Typography
              variant={matches ? "h4" : "h6"}
              style={{ color: "white" }}
            >
              <strong>
                The specifications in respect to earthing as recommended by
                Indian Standards are given below:
              </strong>
            </Typography>

            <Typography
              variant={matches ? "h5" : "body1"}
              style={{ color: "white", padding: "1rem" }}
              gutterBottom
            >
              <ul>
                <li>
                  An earthing electrode should not be situated (installed) close
                  to the building whose installation system is being earthed at
                  least more than 1.5m away.
                </li>
                <br />
                <li>
                  The earth resistance should be low enough to cause the flow of
                  current sufficient to operate the protective relays or blow
                  fuses. It’s value is not constant as it varies with weather
                  because it depends on moisture (but should not be less than 1
                  Ohm).{" "}
                </li>
                <br />
                <li>
                  The earth wire and earth electrode will be the same material.
                </li>
                <br />
                <li>
                  The earthing electrode should always be placed in a vertical
                  position inside the earth or pit so that it may be in contact
                  with all the different earth layers.
                </li>
              </ul>
            </Typography>
            <br />
            <br />
            <Typography
              variant={matches ? "h4" : "h6"}
              style={{ color: "white" }}
              gutterBottom
            >
              <strong>The types of earthing systems are given below:</strong>
            </Typography>
          </div>
        </Grid>
      </Grid>

      <Grid
        item
        container
        xs={12}
        style={{
          backgroundColor: "#F3F3F3",
          padding: matches && "0 3rem",
          position: "relative",
          width: "100%",
        }}
      >
        {matches && <div className={classes.strikeLine}></div>}

        <Grid item xs={12} md={6} style={{ padding: "4rem" }}>
          <div
            className={classes.staticCard}
            style={{ height: matches ? "700px" : "" }}
          >
            <Typography
              variant="body1"
              component="p"
              style={{ textAlign: "center" }}
            >
              <strong>PLATE EARTHING SYSTEM</strong>
            </Typography>
            <br />
            <Typography variant="body1" component="p">
              Here the earthing plates that are made up of copper or GI
              (galvanized iron) are placed vertically in the ground pit less
              than 3m from the earth.
            </Typography>
            <br />
            <img
              src={plateEarthingSystem}
              alt="Plate Earthing System"
              style={{
                width: "100%",
                height: "400px",
                marginTop: matches ? "6rem" : "",
              }}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6} style={{ padding: "4rem" }}>
          <div
            className={classes.staticCard}
            style={{ height: matches ? "700px" : "" }}
          >
            <Typography
              variant="body1"
              component="p"
              style={{ textAlign: "center" }}
            >
              <strong>PIPE EARTHING SYSTEM</strong>
            </Typography>
            <br />
            <Typography variant="body1" component="p">
              This is the most common type of earthing system. Here, A
              galvanized steel based pipe is placed vertically in a wet pit. The
              pipe size mainly depends on the soil type and magnitude of
              current. Usually, for ordinary soil, the pipe dimension should be
              1.5 inches in diameter and 9feets in length. For rocky or dry
              soil, the pipe diameter should be greater than the ordinary soil
              pipe. The soil moisture will decide the pipe’s length to be placed
              in the earth.
            </Typography>
            <br />
            <img
              src={pipeEarthingSystem}
              alt="Pipe Earthing System"
              style={{ width: "100%", height: matches ? "400px" : "" }}
            />
          </div>
        </Grid>
      </Grid>

      <Grid
        item
        container
        xs={12}
        style={{
          backgroundColor: "#F3F3F3",
          padding: matches && "0 3rem",
          position: "relative",
          width: "100%",
        }}
      >
        {matches && <div className={classes.strikeLine}></div>}

        <Grid item xs={12} md={6} style={{ padding: "4rem" }}>
          <div
            className={classes.staticCard}
            style={{ height: matches ? "800px" : "" }}
          >
            <Typography
              variant="body1"
              component="p"
              style={{ textAlign: "center" }}
            >
              <strong>ROD EARTHING SYSTEM</strong>
            </Typography>
            <br />
            <Typography variant="body1" component="p">
              This type of earthing system is similar to pipe earthing system. A
              copper rod with galvanized steel pipe is placed upright in the
              ground physically or using a hammer.
            </Typography>
            <br />
            <img
              src={rodEarthingSystem}
              alt="Rod Earthing System"
              style={{
                width: "100%",
                height: matches ? "400px" : "",
                marginTop: matches ? "10rem" : "",
              }}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6} style={{ padding: "4rem" }}>
          <div
            className={classes.staticCard}
            style={{ height: matches ? "800px" : "" }}
          >
            <Typography
              variant="body1"
              component="p"
              style={{ textAlign: "center" }}
            >
              <strong>CHEMICAL EARTHING SYSTEM</strong>
            </Typography>
            <br />
            <Typography variant="body1" component="p">
              Chemical earthing is considered to be the most effective solution
              for consistent and permanent earthing. They are maintenance free
              and have minimum fluctuations and are eco friendly. They are
              highly reliable for safety of human life and have more surface
              area of conduction. In this earthing system, Chemical Earthing
              electrode provides a low-impedance ground in locations of high
              soil resistivity. Together with Grounding Minerals, the system
              dissipates lightning energy and other dangerous electrical fault
              currents, even in sandy or rocky soil conditions
            </Typography>
            <br />
            <img
              src={chemicalEarthingSystem}
              alt="Chemical Earthing System"
              style={{
                width: "100%",
                height: matches ? "400px" : "",
                marginTop: matches ? "1rem" : "",
              }}
            />
          </div>
        </Grid>
      </Grid>

      <Grid item container xs={12} style={{ backgroundColor: "#F3F3F3" }}>
        <Grid item xs={12} md={6}>
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className={classes.brownStrikeLine}></div>
            <img
              src={warranty}
              style={{
                display: "flex",
                width: "150px",
                height: "150px",
                zIndex: 10,
              }}
              alt="Warranty"
            />
          </div>
          <div className={classes.content}>
            <Typography
              variant="h5"
              color="secondary"
              style={{ textAlign: "center" }}
            >
              <strong>WARRANTY OF EARTHING KITS</strong>
            </Typography>
            <br />
            <Typography
              variant={matches ? "h6" : "body1"}
              component="p"
              color="secondary"
            >
              Earthing kits have an equipment warranty of 10-15 years provided
              by the company.
            </Typography>
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className={classes.brownStrikeLine}></div>
            <img
              src={availability}
              style={{
                display: "flex",
                width: "150px",
                height: "150px",
                zIndex: 10,
              }}
              alt="Availability"
            />
          </div>
          <div className={classes.content}>
            <Typography
              variant="h5"
              color="secondary"
              style={{ textAlign: "center" }}
            >
              <strong>EARTHING KITS AVAILABILITY</strong>
            </Typography>
            <br />
            <Typography
              variant={matches ? "h6" : "body1"}
              component="p"
              color="secondary"
            >
              You can purchase Earthing kits directly through our company
              website “SOLRUF”. The link for purchasing earthing kits is given
              below:
            </Typography>
            <br />
            <Link
              style={{
                color: "#bfbfbf",
                display: "flex",
                alignItems: "center",
              }}
              href="https://solruf.com/products/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Typography
                variant="body1"
                component="p"
                style={{ color: "#b3b3b3" }}
              >
                https://solruf.com/products/
              </Typography>
              &nbsp;
              <OpenInNewIcon style={{ color: "#4d4d4d" }} />
            </Link>
            <br />
          </div>
        </Grid>
      </Grid>

      <Grid item xs={12} style={{ height: "3rem" }}></Grid>

      {/* solar charge controller */}

      <Grid item container xs={12} style={{ backgroundColor: "#F45717" }}>
        <Grid item xs={12} md={6}>
          <div style={{ padding: matches ? "7rem" : "1rem" }}>
            <Typography
              variant={matches ? "h2" : "h3"}
              style={{ textAlign: "center", color: "White" }}
            >
              <strong>SOLAR CHARGE CONTROLLER</strong>
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div style={{ width: "100%", padding: "1rem" }}>
            <img
              src={solarChargeController}
              alt="Solar charge controller"
              style={{
                width: "100%",
                height: matches ? "450px" : "",
                display: "flex",
              }}
            />
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className={classes.innerGridDiv}>
            <Typography
              variant={matches ? "h6" : "body1"}
              component="p"
              style={{ color: "white" }}
            >
              A solar charge controller is fundamentally a voltage or current
              controller to charge the battery and keep electric cells from
              overcharging. It manages the power going into the battery bank
              from the solar array. It ensures that the deep cycle batteries are
              not overcharged during the day, and that the power doesn’t run
              backwards to the solar panels overnight and drain the batteries.
              Generally, 12V boards/panels put out in the ballpark of 16 to 20V,
              so if there is no regulation the electric cells will damage from
              overcharging. Generally, electric storage devices require around
              14 to 14.5V to get completely charged. Some charge controllers are
              available with additional capabilities, like lighting and load
              control, but managing the power is its primary job. The range of
              charge controllers is from 4.5A and up to 60 to 80A. A solar
              charge controller is available in two different technologies, PWM
              and MPPT.
            </Typography>
          </div>
        </Grid>
      </Grid>

      <Grid item container xs={12}>
        <Grid
          item
          xs={12}
          md={6}
          style={{ padding: matches ? "3rem 4rem" : "2rem" }}
        >
          <div style={{ backgroundColor: "#06A5FC", paddingBottom: "2rem" }}>
            <div className={classes.innerGridDiv}>
              <Typography
                variant={matches ? "h4" : "h6"}
                style={{ textAlign: "center", color: "white" }}
              >
                <strong>PULSE WIDTH MODULATION (PWN)</strong>
              </Typography>
            </div>
            <div style={{ padding: "1rem" }}>
              <img
                src={pwn}
                alt="PWN"
                style={{
                  width: "100%",
                  height: matches ? "450px" : "",
                  display: "flex",
                }}
              />
            </div>
            <div className={classes.innerGridDiv}>
              <Typography
                variant="body1"
                component="p"
                style={{ color: "white", textAlign: "justify" }}
                gutterBottom
              >
                <strong>
                  PWM solar charge controllers are the standard type of charge
                  controller available to solar shoppers. They are simpler than
                  MPPT controllers, and thus generally less expensive. PWM
                  controllers work by slowly reducing the amount of power going
                  into your battery as it approaches capacity. When your battery
                  is full, PWM controllers maintain a state of “trickle”, which
                  means they supply a tiny amount of power constantly to keep
                  the battery topped off.
                  <br />
                  With a PWM controller, your solar panel system and your home
                  battery need to have matching voltages. In larger solar panel
                  systems designed to power your whole home, panel and battery
                  voltage aren’t typically the same. As a result, PWM
                  controllers are more suited for small DIY solar systems with a
                  couple of low voltage panels and a small battery.
                </strong>
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          style={{ padding: matches ? "3rem 4rem" : "2rem" }}
        >
          <div style={{ backgroundColor: "#191919", paddingBottom: "2rem" }}>
            <div className={classes.innerGridDiv}>
              <Typography
                variant={matches ? "h4" : "h6"}
                style={{ textAlign: "center", color: "white" }}
              >
                <strong>MAXIMUM POWER POINT TRACKING (MPPT)</strong>
              </Typography>
            </div>
            <div style={{ padding: "1rem" }}>
              <img
                src={mppt}
                alt="MPPT"
                style={{
                  width: "100%",
                  height: matches ? "450px" : "",
                  display: "flex",
                }}
              />
            </div>
            <div className={classes.innerGridDiv}>
              <Typography
                variant="body1"
                component="p"
                style={{ color: "white", textAlign: "justify" }}
                gutterBottom
              >
                <strong>
                  MPPT solar charge controllers are a more expensive and complex
                  charge controller option. They provide the same switch-like
                  protection that a PWM controller does, and will reduce the
                  power flowing to your home battery as it nears capacity.
                  Unlike PWM controllers, MPPT charge controllers can pair
                  non-matching voltages from panels and batteries. MPPT
                  controllers adjust their input to bring in the maximum power
                  possible from your solar array, and can also vary their output
                  power to match the attached battery. This means that MPPT
                  charge controllers are more efficient than PWM controllers,
                  and more effectively utilize the full power of your solar
                  panels to charge a home battery system.
                </strong>
              </Typography>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} md={6} style={{ marginTop: matches ? "-8rem" : "" }}>
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className={classes.brownStrikeLine}></div>
            <img
              src={warranty}
              style={{
                display: "flex",
                width: "150px",
                height: "150px",
                zIndex: 10,
              }}
              alt="Warranty"
            />
          </div>
          <div className={classes.content}>
            <Typography
              variant="h5"
              color="secondary"
              style={{ textAlign: "center" }}
            >
              <strong>WARRANTY OF SOLAR CHARGE CONTROLLERS</strong>
            </Typography>
            <br />
            <Typography
              variant={matches ? "h6" : "body1"}
              component="p"
              color="secondary"
            >
              Charge Controllers have an equipment warranty of 5-15 years
              provided by the company.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={6} style={{ marginTop: matches ? "-8rem" : "" }}>
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className={classes.brownStrikeLine}></div>
            <img
              src={availability}
              style={{
                display: "flex",
                width: "150px",
                height: "150px",
                zIndex: 10,
              }}
              alt="Availability"
            />
          </div>
          <div className={classes.content}>
            <Typography
              variant="h5"
              color="secondary"
              style={{ textAlign: "center" }}
            >
              <strong>SOLAR CHARGE CONTROLLER BRANDS AVAILABILITY</strong>
            </Typography>
            <br />
            <Typography
              variant={matches ? "h6" : "body1"}
              component="p"
              color="secondary"
            >
              You can purchase solar charge controllers directly through our
              company website “SOLRUF”. The link for purchasing charge
              controllers is given below:
            </Typography>
            <br />
            <Link
              style={{
                color: "#bfbfbf",
                display: "flex",
                alignItems: "center",
              }}
              href="https://solruf.com/products/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Typography
                variant="body1"
                component="p"
                style={{ color: "#b3b3b3" }}
              >
                https://solruf.com/products/
              </Typography>
              &nbsp;
              <OpenInNewIcon style={{ color: "#4d4d4d" }} />
            </Link>
            <br />
            <Typography variant="h5" color="secondary">
              We have the following brands available
            </Typography>

            <img
              src={controller}
              alt="Solar controller"
              style={{
                width: "100%",
                height: matches ? "250px" : "",
                display: "flex",
              }}
            />
          </div>
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        style={{ backgroundColor: "#F3F3F3", height: "3rem" }}
      ></Grid>

      <Grid item container xs={12}>
        <Grid
          item
          xs={12}
          style={{ backgroundColor: "#8B7B73", margin: "auto" }}
        >
          <div style={{ width: "100%" }}>
            <img
              src={moduleMounting}
              alt="Module mounting"
              style={{
                width: "100%",
                height: matches ? "800px" : "",
                padding: matches ? "5rem 8rem 5rem 8rem" : "4rem 0 4rem 0",
              }}
            />
          </div>
        </Grid>

        <Grid item xs={12}>
          <div id="modulemounting" className={classes.innerGridDiv}>
            <Typography
              variant={matches ? "h2" : "h4"}
              style={{ textAlign: "center" }}
            >
              <strong>Module Mounting Structure</strong>
            </Typography>
            <br />
            <Typography variant={matches ? "h6" : "body1"} component="p">
              Photovoltaic mounting systems (also called solar module racking)
              are used to retrofit and fix solar panels on surfaces like roofs,
              building facades, or the ground. The arrangement of modules can
              either be Landscape or Portrait Orientated. Solar modules need to
              be secured, mounted and tightened on a very stable and durable
              structure, protecting the array against impacts from snow, wind,
              hail, rain and even minor earthquakes. Mounting systems are
              crucial to maximizing solar energy production, as well as
              providing panel/module stability.
              <br />
              <br />
              Regardless of where you mount the arrays, mounts are either fixed
              or tracking. Fixed mounts are preset for height and angle and do
              not move. Since the angle of the sun changes throughout the year,
              the height and angle of fixed mount arrays are a compromise that
              trades optimum angle of inclination for a less expensive, less
              complex installation. Tracking arrays move with the sun. Tracking
              arrays move east to west with the sun and adjust their angle to
              maintain the optimum as the sun moves. Module mounting structures
              are made of three types of materials. They are Hot Dip Galvanized
              Iron, Aluminium and Mild Steel (MS). Solar panels are joined into
              arrays and commonly mounted in one of three ways: on roofs; on
              poles in free standing arrays; or directly on the ground.
            </Typography>
            <br />
            <br />
            <Typography variant={matches ? "h4" : "h6"}>
              These structures are described below:
            </Typography>
          </div>
        </Grid>
      </Grid>

      <Grid
        item
        container
        xs={12}
        style={{
          backgroundColor: "#F5F5F5",
          padding: matches && "0 3rem",
          position: "relative",
          width: "100%",
        }}
      >
        {matches && <div className={classes.strikeLine}></div>}

        <Grid item xs={12} md={4} style={{ padding: "2rem" }}>
          <div className={classes.staticCard}>
            <Typography
              variant="body1"
              component="p"
              style={{ textAlign: "center" }}
            >
              <strong>ROOF MOUNTING STRUCTURE</strong>
            </Typography>
            <br />
            <Typography variant="body1" component="p">
              By use of these structures, solar arrays of a PV system can be
              mounted on rooftops, generally with a few inches gap and parallel
              to the surface of the roof of a building. It can either be any
              residential building or any commercial/industrial building with a
              Concrete RCC roof, metal roof or an asbestos roof. If the rooftop
              is horizontal, the array is mounted with each panel aligned at an
              angle. If the panels are planned to be mounted before the
              construction of the roof, the roof can be designed accordingly by
              installing support brackets for the panels before the materials
              for the roof are installed. If the roof is already constructed, it
              is relatively easy to retrofit panels directly on top of existing
              roofing structures. The general practice for installation of
              roof-mounted solar panels includes having a support bracket per
              hundred watts of panels. The types of rooftop mounting structures
              are rail-less mounting system, shared-rail mounting system for
              sloped roofs and flat roof mounting system.
            </Typography>
            <br />
            <img
              src={rooftopMounting}
              alt="Rooftop Mounting"
              style={{ width: "100%" }}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={4} style={{ padding: "2rem" }}>
          <div className={classes.staticCard}>
            <Typography
              variant="body1"
              component="p"
              style={{ textAlign: "center" }}
            >
              <strong>GROUND MOUNTING STRUCTURE</strong>
            </Typography>
            <br />
            <Typography variant="body1" component="p">
              As the name implies, ground-mounted solar is placed directly on
              the ground. The mount consists of a steel or aluminum frame
              attached to a concrete foundation. Tradeoffs exist between ground
              and roof-mounted systems. Ground mounts are low, simple and offer
              flexibility in space and sizing, but can be bulky and require a
              foundation. Rooftop arrays use the existing structure, which eases
              design and lowers construction cost. Ground mounts are easier to
              access, but need more racking or frames attached to ground-based
              mounting supports. The mounting equipment is available with more
              options for incorporating tracking to maximize production. More
              air tends to circulate behind the solar panels of a ground-mounted
              array, leading the panels to stay cooler and outperform rooftop
              systems. Ground mounts are well-suited for rural, off-grid areas
              that don’t have heavy snowfall. Their ability to provide
              significant electrical power makes them great for utility-scale
              installations. Ground-based mounting supports include pole mounts,
              foundation mounts, ballasted footing mounts, to secure the solar
              module system in position
            </Typography>
            <br />
            <img
              src={groundMounting}
              alt="Earthing Joint"
              style={{ width: "100%" }}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={4} style={{ padding: "2rem" }}>
          <div className={classes.staticCard}>
            <Typography
              variant="body1"
              component="p"
              style={{ textAlign: "center" }}
            >
              <strong>SHADE MOUNTING STRUCTURE</strong>
            </Typography>
            <br />
            <Typography variant="body1" component="p">
              Solar panels can also be mounted as shade structures where the
              solar panels can provide shade instead of patio covers. The cost
              of such shading systems are generally different from standard
              patio covers, especially in cases where the entire shade required
              is provided by the panels. The support structure for the shading
              systems can be normal systems as the weight of a standard PV array
              is between 3 and 5 pounds/ft2. If the panels are mounted at an
              angle steeper than normal patio covers, the support structures may
              require additional strengthening. Shade mounting structures are
              installed outdoors and are coated with anti-corrosive material for
              longer life. In such structures, the module mounting may need to
              be concealed to maintain the aesthetics of the shading structure
              along with simplified array access for maintenance. Growing vines
              around the structure must be avoided as they may come in contact
              with the wiring.
            </Typography>
            <br />
            <img
              src={shadeMounting}
              alt="Earth Plate"
              style={{ width: "100%" }}
            />
          </div>
        </Grid>
      </Grid>

      <Grid item container xs={12} style={{ backgroundColor: "#fafafa" }}>
        <Grid item xs={12} md={6}>
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className={classes.grayStrikeLine}></div>
            <img
              src={warranty}
              style={{
                display: "flex",
                width: "150px",
                height: "150px",
                zIndex: 10,
              }}
              alt="Warranty"
            />
          </div>
          <div className={classes.content}>
            <Typography
              variant="h5"
              color="secondary"
              style={{ textAlign: "center" }}
            >
              <strong>WARRANTY OF SOLAR MOUNTING STRUCTURE</strong>
            </Typography>
            <br />
            <Typography
              variant={matches ? "h6" : "body1"}
              component="p"
              color="secondary"
            >
              They have an equipment warranty of 5-15 years provided by the
              company on workmanship and materials defects.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className={classes.grayStrikeLine}></div>
            <img
              src={availability}
              style={{
                display: "flex",
                width: "150px",
                height: "150px",
                zIndex: 10,
              }}
              alt="Availability"
            />
          </div>
          <div className={classes.content}>
            <Typography
              variant="h5"
              color="secondary"
              style={{ textAlign: "center" }}
            >
              <strong>SOLAR MOUNTING STRUCTURES AVAILABILITY</strong>
            </Typography>
            <br />
            <Typography
              variant={matches ? "h6" : "body1"}
              component="p"
              color="secondary"
            >
              You can purchase solar mounting structures directly through our
              company website “SOLRUF” with the link given below:
            </Typography>
            <br />
            <Link
              style={{
                color: "#bfbfbf",
                display: "flex",
                alignItems: "center",
              }}
              href="https://solruf.com/products/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Typography
                variant="body1"
                component="p"
                style={{ color: "#b3b3b3" }}
              >
                https://solruf.com/products/
              </Typography>
              &nbsp;
              <OpenInNewIcon style={{ color: "#4d4d4d" }} />
            </Link>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SolarJunction;
