import React from "react";
import { Grid, useMediaQuery } from "@material-ui/core";
import { Typography, makeStyles } from "@material-ui/core";
import {
  solarBalance,
  lightningArrestor,
  spikeRod,
  rodGap,
  hornGap,
  multiGap,
  valveType,
  expulsionType,
  warranty,
  availability,
  pvMeter,
  netMeter,
  cableWire,
  dcCable,
  acCable,
  warrantyDC,
  warrantyAC,
  warrantyNetMeter,
  warrantylightningArrestor,
} from "./FileLinks";
import { Link } from "react-router-dom";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import clsx from "clsx";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  outerGrid: {
    backgroundColor: "white",
    "& .MuiTypography-root": {
      textAlign: "justify",
      lineHeight: 1.3,
    },
  },

  innerDiv: {
    padding: "3rem 4rem 3rem 4rem",
    [theme.breakpoints.down("xs")]: {
      padding: "1.5rem",
    },
  },

  content: {
    padding: "3rem",
    [theme.breakpoints.down("xs")]: {
      padding: "1.5rem",
    },
  },

  blueStrikeLine: {
    height: "1.7rem",
    backgroundColor: "#B4B4B4",
    position: "absolute",
    left: "0px",
    right: "0px",
  },
  greenStrikeLine: {
    height: "1.7rem",
    backgroundColor: "#376D27",
    position: "absolute",
    left: "0px",
    right: "0px",
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
  cardButton: {
    backgroundColor: "#81b3f8",
    height: "30px",
    width: "80px",
    textAlign: "center",
    border: "4px solid black",
    borderTop: "none",
    borderRadius: "10px",
    borderTopRightRadius: "0px",
    borderTopLeftRadius: "0px",
    margin: "0 auto",
  },
  card: {
    color: "white",
    border: "10px solid white",
    boxShadow: "0 0 10px -5px #4d4d4d",
    padding: "2rem",
  },
}));

const SolarBalance = () => {
  const matches = useMediaQuery("(min-width:600px)");
  const classes = useStyles();
  const ToggleCards = {
    dcCable: false,
    acCable: false,
  };

  const [expanded, setExpanded] = React.useState(ToggleCards);
  const handleExpandClick = (name) => {
    switch (name) {
      case "part1":
        setExpanded({ ...expanded, dcCable: !expanded.dcCable });
        break;
      case "part2":
        setExpanded({ ...expanded, acCable: !expanded.acCable });
        break;

      default:
        break;
    }
  };

  return (
    <Grid container className={classes.outerGrid}>
      <Grid item xs={12}>
        <div id="balancesystem" style={{ width: "100%" }}>
          <img
            src={solarBalance}
            alt="Solar balance"
            style={{
              width: "100%",
              padding: matches ? "4rem 5rem 0 5rem" : "1rem",
            }}
          />
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.innerDiv}>
          <Typography
            variant={matches ? "h6" : "body1"}
            component="p"
            color="secondary"
          >
            A Solar PV Balance-of-System or BOS refers to the components and
            equipment that move DC energy produced by solar panels through the
            conversion system which in turn produces AC electricity. The balance
            of system (BOS) encompasses all components of a photovoltaic system
            other than the photovoltaic panels. This includes wiring, switches,
            junction box, a mounting system, charge controller, lightning
            arrestor, earthing electrode, etc.
            <br />
            <br />
            BOS applies to all types of solar applications. BOS components make
            up roughly 10%-50% of solar purchasing and installation costs and
            account for the majority of maintenance requirements. Essentially it
            is through the balance-of-system components that we can: control
            cost, increase efficiency, and modernize solar PV systems.
          </Typography>
        </div>
      </Grid>

      <Grid item container xs={12} style={{ backgroundColor: "#fafafa" }}>
        <Grid item xs={12} md={6} style={{ backgroundColor: "#B4B4B4" }}>
          <div style={{ padding: "5rem" }}>
            <Typography
              variant={matches ? "h1" : "h3"}
              style={{ color: "white" }}
            >
              LIGHTNING ARRESTOR
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div style={{ width: "100%" }}>
            <img
              src={lightningArrestor}
              alt="Lightning Arrestor"
              style={{
                width: "100%",
                height: matches ? "450px" : "300px",
                display: "flex",
              }}
            />
          </div>
        </Grid>
      </Grid>

      <Grid item xs={12} style={{ backgroundColor: "#F3F3F3" }}>
        <div className={classes.innerDiv}>
          <Typography
            variant={matches ? "h6" : "body1"}
            component="p"
            color="secondary"
          >
            A discharge of lightning can carry over 100 million volts of
            electricity which can easily cause damage to any kind of structure.
            Lightning (surge) arrestors are designed to absorb voltage spikes
            caused by electrical storms (or out-of-spec utility power), and
            effectively allow the surge to bypass power wiring and your
            equipment by providing a safe path for the lightning current into
            the ground. ‘Lightning Arresters’ or ‘Lightning Rods’ are an
            integral part of a complete lightning protection system that
            includes lightning arresters at the top of a structure, the
            conductors, the earth or ground rods, and surge protection devices
            (SPD’s). Surge protectors should be installed at both ends of any
            long wire run that is connected to any part of your system,
            including AC lines from an inverter.
            <br />
            <br />
            Arrestors are made for various voltages for both AC and DC. They
            come in many different forms, including hollow, solid, pointed,
            rounded, flat strips, or bristle brush-like. These rods are made of
            conductive materials such as copper and aluminium with 2 cm in
            diameter. Copper and its alloys are the most common materials used
            in lightning protection. They are placed on the four corners and one
            between the two corners. A 16 mm bare grounding cable is connected
            to the base of the lightning arrester and dropped to the ground
            floor main panel board grounding terminal.
          </Typography>
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        style={{ backgroundColor: "#F3F3F3", padding: "1rem" }}
      >
        <Typography
          variant={matches ? "h4" : "h5"}
          color="secondary"
          style={{ textAlign: "center" }}
        >
          <strong>THE TYPES OF LIGHTNING ARRESTORS ARE GIVEN BELOW:</strong>
        </Typography>
      </Grid>

      <Grid item container xs={12} style={{ backgroundColor: "#F3F3F3" }}>
        <Grid
          item
          xs={12}
          md={4}
          style={{
            backgroundColor: "#B4B4B4",
            borderRight: matches ? "1px solid white" : "",
          }}
        >
          <div style={{ padding: "4rem" }}>
            <Typography
              variant={matches ? "h4" : "h5"}
              style={{ color: "white", textAlign: "center" }}
            >
              <strong>SPIKE ROD ARRESTOR</strong>
            </Typography>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{
            backgroundColor: "#B4B4B4",
            borderLeft: matches ? "1px solid white" : " ",
          }}
        >
          <div style={{ padding: "2rem" }}>
            <Typography variant="body1" color="secondary">
              <strong>
                Spike Lightning Arrestor is a metal rod, made of copper and,
                used as part of lightning safety to protect tall or isolated
                structures. <br />
                Spike rod arrestor consists of 3 parts. <br />
                The first is a rod of about 3ft in length and 12mm in diameter.{" "}
                <br />
                The 2nd part is a spiked ball/receiver, which can easily be
                attached to one end of the rod. <br />
                The 3rd part is a copper-coated brass plate that can be screwed
                to the structure on which the rod is easily fitted.
              </strong>
            </Typography>
          </div>
        </Grid>

        <Grid item xs={12} md={4}>
          <img
            src={spikeRod}
            alt="Spike rod arrestor"
            style={{
              width: "100%",
              height: matches ? "300px" : "250px",
              display: "flex",
            }}
          />
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        style={{ backgroundColor: "#F3F3F3", height: "2rem" }}
      ></Grid>

      <Grid item container xs={12} style={{ backgroundColor: "#F3F3F3" }}>
        <Grid
          item
          xs={12}
          md={4}
          style={{
            backgroundColor: "#B4B4B4",
            borderRight: matches ? "1px solid white" : "",
          }}
        >
          <div style={{ padding: "4rem" }}>
            <Typography
              variant={matches ? "h4" : "h5"}
              style={{ color: "white", textAlign: "center" }}
            >
              <strong>ROD GAP ARRESTOR</strong>
            </Typography>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{
            backgroundColor: "#B4B4B4",
            borderLeft: matches ? "1px solid white" : " ",
          }}
        >
          <div style={{ padding: "2rem" }}>
            <Typography variant="body1" color="secondary">
              <strong>
                Rod Gap Arrester is a very simple type of lightning arrester,
                which consists of two 15mm rods that are bent at an angle 90°
                with a gap in between them as depicted in the diagram. One end
                of the lightning arrester connected to the line and another end
                of the rod connected to the earth. The distance between rod and
                insulator must not be less than 1/3 of the gap length so the arc
                may not reach the insulator and damage it. At a healthy
                operating condition, the gap between the rod is non conducting
                but during the surge, the gap sparks over and conducts excessive
                current to earth.
              </strong>
            </Typography>
          </div>
        </Grid>

        <Grid item xs={12} md={4}>
          <img
            src={rodGap}
            alt="Rod gap arrestor"
            style={{
              width: "100%",
              height: matches ? "323px" : "250px",
              display: "flex",
            }}
          />
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        style={{ backgroundColor: "#F3F3F3", height: "2rem" }}
      ></Grid>

      <Grid item container xs={12} style={{ backgroundColor: "#fafafa" }}>
        <Grid
          item
          xs={12}
          md={4}
          style={{
            backgroundColor: "#B4B4B4",
            borderRight: matches ? "1px solid white" : "",
          }}
        >
          <div style={{ padding: "4rem" }}>
            <Typography
              variant={matches ? "h4" : "h5"}
              style={{ color: "white", textAlign: "center" }}
            >
              <strong>HORN GAP ARRESTOR</strong>
            </Typography>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{
            backgroundColor: "#B4B4B4",
            borderLeft: matches ? "1px solid white" : " ",
          }}
        >
          <div style={{ padding: "2rem" }}>
            <Typography variant="body1" color="secondary">
              <strong>
                As the name suggests, this arrestor has two metal rods in
                horn-shaped. The arrangement of these metal rods can be done
                around a small air gap. The distance between these two rods can
                be increased because they increase from the gap. The metal rods
                are located on ceramic insulators. The connection of the horn
                can be done by connecting it to two dissimilar wires. One side
                of the horn can be connected to the line throughout a resistance
                & choke coil whereas the other side is grounded efficiently. The
                resistance restricts the flow of current toward a minute value.
                The choke coil is used to provide less reactance at the usual
                power frequency and also provides high reactance at transient
                frequency. Therefore the choke coil doesn’t permit the
                transients to go into the apparatus to be protected. The gap
                among the horns can be adjusted so that the usual supply voltage
                is not sufficient to cause an arc.
              </strong>
            </Typography>
          </div>
        </Grid>

        <Grid item xs={12} md={4}>
          <img
            src={hornGap}
            alt="Horn gap arrestor"
            style={{
              width: "100%",
              height: matches ? "460px" : "360px",
              display: "flex",
            }}
          />
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        style={{ backgroundColor: "#F3F3F3", height: "2rem" }}
      ></Grid>

      <Grid item container xs={12} style={{ backgroundColor: "#B4B4B4" }}>
        <Grid
          item
          xs={12}
          md={4}
          style={{
            backgroundColor: "#B4B4B4",
            borderRight: matches ? "1px solid white" : "",
          }}
        >
          <div style={{ padding: "4rem" }}>
            <Typography
              variant={matches ? "h4" : "h5"}
              style={{ color: "white", textAlign: "center" }}
            >
              <strong>MULTI-GAP ARRESTOR</strong>
            </Typography>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{
            backgroundColor: "#B4B4B4",
            borderLeft: matches ? "1px solid white" : " ",
          }}
        >
          <div style={{ padding: "2rem" }}>
            <Typography variant="body1" color="secondary">
              <strong>
                These types of arresters are designed with a sequence of metal
                cylinders that are insulated and divided through air gaps with
                each other. In the sequence of cylinders, the primary cylinder
                is connected toward the electrical line, whereas the remaining
                cylinders are connected to the ground by series resistance. Some
                of the gaps among the next cylinders contain a shunt resistance
                that grabs a surge when there is a surplus of voltage.
              </strong>
            </Typography>
          </div>
        </Grid>

        <Grid item xs={12} md={4} style={{backgroundColor:"white"}}>
          <img
            src={multiGap}
            alt="Multi rod arrestor"
            style={{
              width: "100%",
              height: matches ? "323px" : "250px",
              display: "flex",
            }}
          />
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        style={{ backgroundColor: "#F3F3F3", height: "2rem" }}
      ></Grid>

      <Grid item container xs={12} style={{ backgroundColor: "#F3F3F3" }}>
        <Grid
          item
          xs={12}
          md={4}
          style={{
            backgroundColor: "#B4B4B4",
            borderRight: matches ? "1px solid white" : "",
          }}
        >
          <div style={{ padding: "4rem" }}>
            <Typography
              variant={matches ? "h4" : "h5"}
              style={{ color: "white", textAlign: "center" }}
            >
              <strong>VALVE-TYPE ARRESTOR</strong>
            </Typography>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{
            backgroundColor: "#B4B4B4",
            borderLeft: matches ? "1px solid white" : " ",
          }}
        >
          <div style={{ padding: "2rem" }}>
            <Typography variant="body1" color="secondary">
              <strong>
                These kinds of arresters are applicable to electrical systems
                that are high-powered. These devices include two main parts like
                a sequence of spark gaps as well as a series of non-linear
                resistor discs. The working of these devices can be done
                whenever an extreme voltage causes the spark gaps to stroke &
                non-linear resistors hold the voltage within the ground.
                Whenever the surge of surplus power stops, the spark gaps can be
                pushed separately by the resisters.
              </strong>
            </Typography>
          </div>
        </Grid>

        <Grid item xs={12} md={4}>
          <img
            src={valveType}
            alt="Valve type arrestor"
            style={{
              width: "100%",
              height: matches ? "323px" : "250px",
              display: "flex",
            }}
          />
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        style={{ backgroundColor: "#F3F3F3", height: "2rem" }}
      ></Grid>

      <Grid item container xs={12} style={{ backgroundColor: "#F3F3F3" }}>
        <Grid
          item
          xs={12}
          md={4}
          style={{
            backgroundColor: "#B4B4B4",
            borderRight: matches ? "1px solid white" : "",
          }}
        >
          <div style={{ padding: "4rem" }}>
            <Typography
              variant={matches ? "h4" : "h5"}
              style={{ color: "white", textAlign: "center" }}
            >
              <strong>EXPULSION TYPE LIGHTNING ARRESTOR</strong>
            </Typography>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{
            backgroundColor: "#B4B4B4",
            borderLeft: matches ? "1px solid white" : " ",
          }}
        >
          <div style={{ padding: "2rem" }}>
            <Typography variant="body1" color="secondary">
              <strong>
                These are also called protector tubes and are normally used on
                the voltage up to 33KV. This type of arrester consists of a rod
                gap in series with an additional gap which is enclosed in a
                fiber tube. A fiber tube is made of two electrodes. the upper
                electrode connected to the rod gap and a lower electrode
                connected to the ground. When a surge voltage is an incident on
                an expulsion tube, the series gap is spanned and an arc is
                formed between the electrodes within the tube, helping surge
                current conducted into the ground.
              </strong>
            </Typography>
          </div>
        </Grid>

        <Grid item xs={12} md={4} style={{backgroundColor:"white"}}>
          <img
            src={expulsionType}
            alt="Expulsion type arrestor"
            style={{
              width: "100%",
              height: matches ? "323px" : "250px",
              display: "flex",
            }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        style={{ backgroundColor: "#F3F3F3", height: "3rem" }}
      ></Grid>
      {/* warranty */}
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
            <div className={classes.blueStrikeLine}></div>
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
              <strong>WARRANTY OF LIGHTNING ARRESTORS</strong>
            </Typography>
            <br />
            <Typography
              variant={matches ? "h6" : "body1"}
              component="p"
              color="secondary"
            >
              Lightning arrestors have an equipment warranty of 5-15 years
              provided by the company.
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
            <div className={classes.blueStrikeLine}></div>
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
              <strong>LIGHTNING ARRESTORS BRANDS AVAILABILITY</strong>
            </Typography>
            <br />
            <Typography
              variant={matches ? "h6" : "body1"}
              component="p"
              color="secondary"
            >
              You can purchase lightning arrestors directly through our company
              website “SOLRUF”. The link for purchasing lightning arrestors is
              given below:
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
              src={warrantylightningArrestor}
              alt="Warranty net meter"
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
        style={{ backgroundColor: "white", height: "3rem" }}
      ></Grid>

      <Grid item container xs={12}>
        <Grid item xs={12} md={6} style={{ backgroundColor: "#EAD35D" }}>
          <div style={{ padding: matches ? "5rem" : "1rem" }}>
            <Typography
              variant={matches ? "h1" : "h3"}
              style={{ textAlign: "center", color: "white" }}
            >
              <strong>PV METER</strong>
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div style={{ width: "100%" }}>
            <img
              src={pvMeter}
              alt="PV meter"
              style={{ width: "100%", height: matches ? "400px" : "" }}
            />
          </div>
        </Grid>
      </Grid>
      <Grid item xs={12} style={{ backgroundColor: "#F3F3F3" }}>
        <div className={classes.innerDiv}>
          <Typography
            variant={matches ? "h6" : "body1"}
            component="p"
            color="secondary"
          >
            A Photovoltaic (PV) meter collects PV yield production to measure
            how much electricity your solar system generates and analyze PV
            plant performance.. This is a one-directional meter, as you won’t be
            transferring power to your solar system. It is the most accurate way
            to measure exactly how much usable electricity your system is
            generating, as monitoring it at the panel- or inverter-level won’t
            account for the small amounts of lost production as the energy flows
            from one component of your system to the next. PV meters often come
            with a monitoring function to alert plant owners of issues with PV
            plant performance, letting them quickly resolve issues and maximize
            return on investment. Plant data is transferred to a monitoring
            platform that provides a concise presentation of PV yields, monetary
            savings and plant performance.
          </Typography>
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          backgroundColor: "#EAD35D",
          padding: matches ? "1rem 3rem" : "1.5rem",
        }}
      >
        <Typography variant="h6" color="secondary">
          <strong>Warranty of PV Meters:</strong> PV Meters have an equipment
          warranty of 1-2 years provided by the company.
        </Typography>
      </Grid>

      <Grid item xs={12} style={{ height: "3.5rem" }}></Grid>

      <Grid item container xs={12}>
        <Grid item xs={12} md={6} style={{ backgroundColor: "#376D27" }}>
          <div style={{ padding: matches ? "5rem" : "1rem" }}>
            <Typography
              variant={matches ? "h1" : "h3"}
              style={{ textAlign: "center", color: "white" }}
            >
              <strong>NET METER</strong>
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div style={{ width: "100%" }}>
            <img
              src={netMeter}
              alt="Net meter"
              style={{
                width: "100%",
                height: matches ? "400px" : "",
                display: "flex",
              }}
            />
          </div>
        </Grid>
      </Grid>
      <Grid item xs={12} style={{ backgroundColor: "#F3F3F3" }}>
        <div className={classes.innerDiv}>
          <Typography
            variant={matches ? "h6" : "body1"}
            component="p"
            color="secondary"
          >
            Net meters work by continuously sampling how much electricity is
            being generated and how much electricity is consumed at your home.
            At each point in time the meter instantaneously reads the generation
            and consumption of the premises and the meter records both these
            amounts. The data is then accumulated in the appropriate register
            over the billing cycle. The meter is read and the bill is
            calculated. A net-meter is needed to avail benefits of the
            net-metering policy offered the grids for customers having installed
            solar PV systems on their property. Net Metering is a system that
            gives solar energy owners credits for the power that they add to the
            grid. When solar panels produce excess power, that power is sent to
            the grid. And this power can be ‘taken back’ when the solar plants
            are not functioning – example, during the night. When a unit of
            solar energy that has been ‘net metered’, the bi-directional
            electricity meter will run backwards. Customers are billed only for
            the ‘net’ energy use.
          </Typography>
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        style={{ backgroundColor: "#F3F3F3", height: "2rem" }}
      ></Grid>
      {/* warranty */}
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
            <div className={classes.greenStrikeLine}></div>
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
              <strong>WARRANTY OF NET-METERS</strong>
            </Typography>
            <br />
            <Typography
              variant={matches ? "h6" : "body1"}
              component="p"
              color="secondary"
            >
              Net-Meters have an equipment warranty of 1-2 years provided by the
              company.
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
            <div className={classes.greenStrikeLine}></div>
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
              <strong>NET-METERS BRANDS AVAILABILITY</strong>
            </Typography>
            <br />
            <Typography
              variant={matches ? "h6" : "body1"}
              component="p"
              color="secondary"
            >
              You can purchase net-meter directly through our company website
              “SOLRUF”. The link for purchasing net-meter is given below:
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
              src={warrantyNetMeter}
              alt="Warranty net meter"
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
        style={{ backgroundColor: "white", height: "3rem" }}
      ></Grid>

      <Grid item container xs={12}>
        <Grid item xs={12} md={6} style={{ backgroundColor: "black" }}>
          <div style={{ padding: matches ? "5rem" : "1rem" }}>
            <Typography
              variant={matches ? "h1" : "h3"}
              style={{ textAlign: "center", color: "white" }}
            >
              <strong>CABLES & WIRES</strong>
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div style={{ width: "100%" }}>
            <img
              src={cableWire}
              alt="Cable wire"
              style={{
                width: "100%",
                height: matches ? "410px" : "",
                display: "flex",
              }}
            />
          </div>
        </Grid>
      </Grid>
      <Grid item xs={12} style={{ backgroundColor: "#F3F3F3" }}>
        <div className={classes.innerDiv}>
          <Typography
            variant={matches ? "h6" : "body1"}
            component="p"
            color="secondary"
          >
            A cable is a group of two or more conductors that are twisted or
            bonded together, surrounded by an insulating layer which itself is
            within a cable jacket, also called cable sheath. A cable may contain
            any number (more than one) of conductors and varies in its external
            diameter depending on the number of conductors. In DC circuits,
            cables commonly consist of at least a current-carrying live wire
            within an insulation layer that is usually colored red, and a
            negative wire usually surrounded by a black-colored insulation
            layer. In other applications such as AC systems, cables consist of a
            live wire that carries the current, a neutral wire that completes
            the electric circuit, carrying current away from the device, and
            also features a third ground wire. This ground wire or earth wire is
            a safety wire that connects the casing of the device to the ground
            and thus prevents faults from making the casing of a device live
            (current-carrying). Usually, the earth wire is colored green or
            yellow (or dual green-yellow).
          </Typography>
        </div>
      </Grid>

      <Grid item container xs={12} style={{ backgroundColor: "#F3F3F3" }}>
        <Grid
          item
          xs={12}
          md={6}
          style={{ padding: matches ? "1rem 2rem" : "1rem" }}
        >
          <div className={classes.card} style={{ backgroundColor: "#FF0303" }}>
            <div style={{ padding: matches ? "1rem" : "" }}>
              <img
                src={dcCable}
                alt="DC cable"
                style={{
                  width: "100%",
                  height: matches ? "400px" : "300px",
                  borderRadius: "10px",
                }}
              />
            </div>

            <div>
              <Typography
                variant={matches ? "h5" : "h6"}
                style={{ color: "white", textAlign: "center" }}
                gutterBottom
              >
                <strong>SOLAR DC CABLE</strong>
              </Typography>
            </div>
            <Collapse in={expanded.dcCable} timeout="auto" unmountOnExit>
              <div
                style={{
                  backgroundColor: "white",
                  padding: matches ? "2rem" : "1rem",
                  margin: matches ? "2rem" : "",
                  borderRadius: "10px",
                }}
              >
                <Typography variant="body1" component="p" color="secondary">
                  A solar DC cable is the interconnection cable used in
                  photovoltaic power generation. Solar cables interconnect solar
                  panels and other electrical components of a photovoltaic
                  system.
                  <br />
                  <br />
                  Solar cables are designed to be resistant to ultraviolet,
                  ozone, severe temperature change,extreme weather and chemical
                  erosion. Different jurisdictions will have specific rules
                  regarding grounding (earthing) of solar power installations
                  for electric shock protection and lightning protection. There
                  are various types of insulation and sheath materials used for
                  the conductors of solar cables and wires, commonly used are
                  cross-linked polyolefin (XLPO) and cross-linked polyethylene
                  (XLPE) for solar cables and wires, and polyvinyl chloride
                  (PVC) for the earth wires.
                </Typography>
              </div>
              <br />
              <div
                style={{
                  backgroundColor: "white",
                  padding: matches ? "2rem" : "1rem",
                  margin: matches ? "2rem" : "",
                  borderRadius: "10px",
                }}
              >
                <Typography variant="h6" color="secondary">
                  <strong>WARRANTY OF SOLAR DC CABLES:</strong>
                </Typography>
                <br />
                <Typography variant="body1" component="p" color="secondary">
                  Solar DC Cables have an equipment warranty of 1-2 years
                  provided by the company.
                </Typography>
                <br />
                <Typography variant="body1" color="secondary">
                  <strong>Solar DC Brands Availability:</strong>
                </Typography>
                <Typography variant="body1" color="secondary">
                  You can purchase Solar DC directly through our company website
                  “SOLRUF”. The link for purchasing solar cables is given below:
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
                  src={warrantyDC}
                  alt="Warranty DC Cable"
                  style={{
                    width: "100%",
                    height: matches ? "250px" : "",
                    display: "flex",
                  }}
                />
              </div>
            </Collapse>
          </div>
          <div className={classes.cardButton}>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded.dcCable,
              })}
              onClick={() => handleExpandClick("part1")}
              aria-expanded={expanded.dcCable}
              aria-label="show more"
              style={{ padding: "0px" }}
            >
              <ExpandMoreIcon style={{ fontSize: "28px" }} />
            </IconButton>
          </div>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          style={{ padding: matches ? "1rem 2rem" : "1rem" }}
        >
          <div className={classes.card} style={{ backgroundColor: "#5D6BCD" }}>
            <div style={{ padding: matches ? "1rem" : "" }}>
              <img
                src={acCable}
                alt="AC Cable"
                style={{
                  width: "100%",
                  height: matches ? "400px" : "350px",
                  borderRadius: "10px",
                }}
              />
            </div>

            <div>
              <Typography
                variant={matches ? "h5" : "h6"}
                style={{ color: "white", textAlign: "center" }}
                gutterBottom
              >
                <strong>SOLAR AC CABLE</strong>
              </Typography>
            </div>
            <Collapse in={expanded.acCable} timeout="auto" unmountOnExit>
              <div
                style={{
                  backgroundColor: "white",
                  padding: matches ? "2rem" : "1rem",
                  margin: matches ? "2rem" : "",
                  borderRadius: "10px",
                }}
              >
                <Typography variant="h6" color="secondary">
                  <strong>WARRANTY OF SOLAR AC CABLES:</strong>
                </Typography>
                <br />
                <Typography variant="body1" component="p" color="secondary">
                  AC Cables have an equipment warranty of 1-2 years provided by
                  the company.
                </Typography>
                <br />
                <Typography variant="body1" color="secondary">
                  <strong>Solar DC Brands Availability:</strong>
                </Typography>
                <Typography variant="body1" color="secondary">
                  You can purchase Solar DC directly through our company website
                  “SOLRUF”. The link for purchasing solar cables is given below:
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
                  src={warrantyAC}
                  alt="Warranty AC Cable"
                  style={{
                    width: "100%",
                    height: matches ? "250px" : "",
                    display: "flex",
                  }}
                />
              </div>
            </Collapse>
          </div>
          <div className={classes.cardButton}>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded.acCable,
              })}
              onClick={() => handleExpandClick("part2")}
              aria-expanded={expanded.acCable}
              aria-label="show more"
              style={{ padding: "0px" }}
            >
              <ExpandMoreIcon style={{ fontSize: "28px" }} />
            </IconButton>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SolarBalance;
