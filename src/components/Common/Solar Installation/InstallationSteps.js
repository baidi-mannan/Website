import React from "react";
import { Grid, Typography, makeStyles, useMediaQuery } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import {
  Inspection,
  Panel,
  Wiring,
  SystemToInverter,
  InverterAndBattery,
  InverterToGrid,
  Mount,
  StartInverter,
} from "./FileLinks";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  accordion: {
    boxShadow: "none",
    borderRadius: "0px",
    marginBottom: "5px",
    "&.MuiAccordion-root": {
      backgroundColor: "black",
      color: "white",
    },
    "&.MuiAccordion-root:before": {
      backgroundColor: "#bfbfbf",
    },
    "& .MuiAccordionDetails-root": {
      backgroundColor: "#f2f2f2",
      padding: "0px",
    },
    "& .MuiAccordionSummary-content": {
      margin: "0px",
    },
    "& .Mui-expanded": {
      backgroundColor: "#ffd54f",
      color: "black",
    },
    "& .MuiTypography-h6": {
      textAlign: "left",
    },
  },
  image: {
    width: "100%",
    display: "flex",
    margin: "auto",
    border: "5px solid #ffd05b",
  },
}));

const InstallationSteps = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const matches = useMediaQuery("(min-width:600px)");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      {/* Step1 */}
      <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")} className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography variant="h6">Step-1: Mount Installation</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            <Grid item xs={12} md={7}>
              <div style={{ padding: matches ? "2rem" : "1rem" }}>
                <Typography variant="body1" color="secondary">
                  The first step is to fix the mounts that will support the Solar Panels. It can be Roof-ground mounts
                  or flush mounts depending on the requirement. This base structure provides support and sturdiness.
                  Care is taken on the direction in which the PV panels (monocrystalline or polycrystalline) will be
                  installed. For countries in the Northern Hemisphere, the best direction to face solar panels is south
                  because it gets maximum sunlight. East and West directions will also do. For countries in the Southern
                  Hemisphere, the best direction is North. The mounting structure must be slightly tilted. Angle of the
                  tilt could be between 18 to 36 Degrees to have maximum sunlight exposure. Many companies use a solar
                  tracker to increase the conversion efficiency.
                </Typography>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              style={{
                padding: matches ? "2rem" : "2rem 1rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div style={{ maxWidth: "320px", margin: "0 auto" }}>
                <img src={Mount} className={classes.image} alt="Mount Installation" />
              </div>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      {/* step2 */}
      <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")} className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography variant="h6">Step-2: Install the Solar Panels</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            <Grid item xs={12} md={7}>
              <div style={{ padding: matches ? "2rem" : "1rem" }}>
                <Typography variant="body1" color="secondary">
                  Next step is to fix the solar panels with the mounting structure. This is done by tightening nuts and
                  bolts. Care should be taken to secure the whole structure properly so that it is sturdy and lasts
                  long.
                </Typography>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              style={{ padding: matches ? "2rem" : "2rem 1rem", display: "flex", alignItems: "center" }}
            >
              <div style={{ maxWidth: "320px", margin: "0 auto" }}>
                <img src={Panel} className={classes.image} alt="Mount Installation" />
              </div>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      {/* step3 */}
      <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")} className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography variant="h6">Step-3: Do Electrical Wiring</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            <Grid item xs={12} md={7}>
              <Grid item container xs={12}>
                <Grid item xs={12}>
                  <div style={{ padding: matches ? "2rem 2rem 0 2rem" : "1rem" }}>
                    <Typography variant="body1" color="secondary">
                      Next step is to do the electrical wiring. Universal Connectors like MC4 are used during wiring
                      because these connectors can be connected with all types of solar panels. Make sure to shut off
                      the household’s electricity supply during the wiring installation. These panels can be
                      electrically connected with each other in following series:
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={12} md={6} style={{ padding: matches ? "2rem" : "1rem" }}>
                  <div style={{ border: "5px solid #ffd05b", padding: "1rem", height: "100%" }}>
                    <Typography variant="h5" color="secondary">
                      Series Connection
                    </Typography>
                    <br />
                    <Typography variant="body1" color="secondary">
                      In this case, the Positive (+) Wire of one PV module is connected to the Negative (–) Wire of
                      another module. This type of wiring increases the voltage match with the battery bank.
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={12} md={6} style={{ padding: matches ? "2rem" : "1rem" }}>
                  <div style={{ border: "5px solid #ffd05b", padding: "1rem", height: "100%" }}>
                    <Typography variant="h5" color="secondary">
                      Parallel Connection
                    </Typography>
                    <br />
                    <Typography variant="body1" color="secondary">
                      In this case, Positive (+) to Positive (+) and Negative (–) to Negative (–) connection is done.
                      This type of wiring voltage of each panel remains the same.
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              style={{ padding: matches ? "2rem" : "2rem 1rem", display: "flex", alignItems: "center" }}
            >
              <div style={{ maxWidth: "320px", margin: "0 auto" }}>
                <img src={Wiring} className={classes.image} alt="Mount Installation" />
              </div>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      {/* step4 */}
      <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")} className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography variant="h6">Step-4: Connect the System to Solar Inverter</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            <Grid item xs={12} md={7}>
              <div style={{ padding: matches ? "2rem" : "1rem" }}>
                <Typography variant="body1" color="secondary">
                  Next step is to connect the system to a solar inverter. It is typically installed near the main panel
                  and it could be both indoors and outdoors. Inverters are more efficient if kept in a cooler place. If
                  the inverter is outdoors, it should be kept out from the afternoon sun. If it is installed indoors,
                  the garage or utility room are usually the best places, since they stay cool for most of the year and
                  have ventilation. The Positive wire from the solar panel is connected to the Positive terminal of the
                  inverter and the Negative wire is connected to the Negative terminal of the inverter. The solar
                  inverter is then connected to the Solar Battery and Grid input to transmit and store electricity.
                </Typography>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              style={{ padding: matches ? "2rem" : "2rem 1rem", display: "flex", alignItems: "center" }}
            >
              <div style={{ maxWidth: "320px", margin: "0 auto" }}>
                <img src={SystemToInverter} className={classes.image} alt="Mount Installation" />
              </div>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      {/* step5 */}
      <Accordion expanded={expanded === "panel5"} onChange={handleChange("panel5")} className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography variant="h6">Step-5: Connect Solar Inverter and Solar Battery</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            <Grid item xs={12} md={7}>
              <div style={{ padding: matches ? "2rem" : "1rem" }}>
                <Typography variant="body1" color="secondary">
                  Next step is to connect the solar inverter and the solar battery. The positive terminal of the battery
                  is connected with the positive terminal of the inverter and negative to negative. Battery is needed in
                  an off grid solar system to store electricity backup. If the system in consideration is on grid, one
                  should skip step 5 and proceed to step 6.
                </Typography>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              style={{ padding: matches ? "2rem" : "2rem 1rem", display: "flex", alignItems: "center" }}
            >
              <div style={{ maxWidth: "320px", margin: "0 auto" }}>
                <img src={InverterAndBattery} className={classes.image} alt="Mount Installation" />
              </div>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      {/* step6 */}
      <Accordion expanded={expanded === "panel6"} onChange={handleChange("panel6")} className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <Typography variant="h6">Step-6: Connect Solar Inverter to the Grid</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            <Grid item xs={12} md={7}>
              <div style={{ padding: matches ? "2rem" : "1rem" }}>
                <Typography variant="body1" color="secondary">
                  Next step is to connect the inverter to the grid. A generation meter should also be connected to
                  monitor the amount of electricity the solar panels actually produce. You can use your computer or
                  other device to check your solar system’s performance. For example, you can check how much electricity
                  you generate at different times and decide what time is suitable for using your washing machine or
                  other utilities. To make this connection, a normal plug is used to connect to the main power switch
                  board. An output wire is connected with an electric board that supplies electricity to the home. One
                  additional factor that can add time to your installation process is putting in a power meter for. If
                  your installer needs to add a power meter, this will add a few hours to your solar panel installation.
                </Typography>
                <br />
                <Typography variant="body1" color="secondary">
                  Please refer to the link below for more details on Net-Metering:
                </Typography>
                <br />
                <Typography variant="body1" color="secondary">
                  <Link to="/netmetering">
                    <strong>NET-METERING LINK</strong>
                  </Link>
                </Typography>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              style={{ padding: matches ? "2rem" : "2rem 1rem", display: "flex", alignItems: "center" }}
            >
              <div style={{ maxWidth: "320px", margin: "0 auto" }}>
                <img src={InverterToGrid} className={classes.image} alt="Mount Installation" />
              </div>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      {/* step7 */}
      <Accordion expanded={expanded === "panel7"} onChange={handleChange("panel7")} className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel7bh-content"
          id="panel7bh-header"
        >
          <Typography variant="h6">Step-7: Start Solar Inverter</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            <Grid item xs={12} md={7}>
              <div style={{ padding: matches ? "2rem" : "1rem" }}>
                <Typography variant="body1" color="secondary">
                  Now when all the electrical wiring and connections are done, it is time to start the inverter switch
                  ON the Main Switch of the Home. Most solar inverters will have a digital display to show you stats
                  regarding generation and usage of solar units.
                </Typography>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              style={{ padding: matches ? "2rem" : "2rem 1rem", display: "flex", alignItems: "center" }}
            >
              <div style={{ maxWidth: "320px", margin: "0 auto" }}>
                <img src={StartInverter} className={classes.image} alt="Mount Installation" />
              </div>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      {/* step8 */}
      <Accordion expanded={expanded === "panel8"} onChange={handleChange("panel8")} className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel8bh-content"
          id="panel8bh-header"
        >
          <Typography variant="h6">Step-8: City Inspection, Approval, And Interconnection</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            <Grid item xs={12} md={7}>
              <div style={{ padding: matches ? "2rem" : "1rem" }}>
                <Typography variant="body1" color="secondary">
                  Finally, a representative from your town’s planning and zoning commission, and electric company will
                  visit your home to inspect your solar installation and give approval that everything was installed
                  correctly and meet local regulations. Your solar company will send someone to meet the representatives
                  and show them all of the technical details they’ll need to review, including all of the
                  interconnection points and electrical systems. Once these representatives have reviewed the project
                  and give the green light, your solar system is officially ready to be connected to the grid. Your
                  technician will flip the switch and your solar panels will start generating clean renewable energy.
                </Typography>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              style={{ padding: matches ? "2rem" : "2rem 1rem", display: "flex", alignItems: "center" }}
            >
              <div style={{ maxWidth: "320px", margin: "0 auto" }}>
                <img src={Inspection} className={classes.image} alt="Mount Installation" />
              </div>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default InstallationSteps;
