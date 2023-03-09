import React from "react";
import { Grid, Typography, makeStyles, useMediaQuery } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { companies, approval, equipment, permits, siteandroof } from "./FileLinks";

const useStyles = makeStyles((theme) => ({
  accordion: {
    boxShadow: "none",
    borderRadius: "0px",
    marginBottom: "5px",
    "&.MuiAccordion-root": {
      backgroundColor: "#bfbfbf",
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
      backgroundColor: "#ffd05b",
    },
    "& .MuiTypography-h6": {
      textAlign: "left",
    },
  },
  image: {
    width: "100%",
    display: "flex",
    margin: "0 auto ",
    border: "5px solid #ffd05b",
  },
}));

const CrucialSteps = () => {
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
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
          <Typography variant="h6" color="secondary">
            1. Choose your solar developer
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            <Grid item xs={12} md={7}>
              <div style={{ padding: matches ? "2rem" : "1rem" }}>
                <Typography variant="body1" color="secondary">
                  Once you have decided on your requirement for solar power system, it is time to identify a trustworthy
                  solar company. We would advise you to do your research for the solar company you want to get a solar
                  plant from because it is a product for a lifetime, and you would not want to run everywhere in case of
                  a breakdown. Do check product warranties.
                </Typography>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              style={{ padding: matches ? "2rem" : "2rem 1rem", display: "flex", alignItems: "center" }}
            >
              <div style={{ maxWidth: "350px", margin: "0 auto" }}>
                <img src={companies} className={classes.image} alt="Companies" />
              </div>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      {/* Step2 */}
      <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")} className={classes.accordion}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
          <Typography variant="h6" color="secondary">
            2. Site And Roof Assessment
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            <Grid item xs={12} md={7}>
              <div style={{ padding: matches ? "2rem" : "1rem" }}>
                <Typography variant="body1" color="secondary">
                  The first phase of any residential solar installation is the site assessment. Once you make an
                  installation inquiry with a solar installer, a technician will visit your home to understand its
                  characteristics and make sure the solar design is customized for your unique energy needs. The
                  technician could be an in-house employee of your solar installer or an independent contractor working
                  with your installer.
                </Typography>
                <br />
                <Typography variant="body1" color="secondary">
                  The roof of your house will be one of the major places the engineer will take measurements, evaluate
                  structural integrity, and collect readings on shading and sunlight availability. The engineer will use
                  a tool known as a “Solar Pathfinder” to calculate precisely how much sunlight your solar system will
                  be able to capture. Certain subsidy or rebate programs will require this step as proof that the solar
                  system meets minimum efficiency requirements.
                </Typography>
                <br />
                <Typography variant="body1" color="secondary">
                  The engineer will refer to your electric bill and total appliances wattage to get electrical
                  consumption for calculating required solar system capacity. The engineer will also assess the roof’s
                  structure to make sure it’s able to support the addition of the solar panels without compromising its
                  structural integrity. The technician will also assess your home’s electrical panel to determine if the
                  solar panels will be able to connect to your home’s electrical systems. If the electrical panel is
                  older or you’ve recently completed a renovation or other home improvement project that increased the
                  number of electrical connections in your home, an upgraded electric panel may be required to
                  accommodate the inflow of solar energy.
                </Typography>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              style={{ padding: matches ? "2rem" : "2rem 1rem", display: "flex", alignItems: "center" }}
            >
              <div style={{ maxWidth: "350px", margin: "0 auto" }}>
                <img src={siteandroof} className={classes.image} alt="Companies" />
              </div>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      {/* Step3 */}
      <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")} className={classes.accordion}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
          <Typography variant="h6" color="secondary">
            3. Design Approval
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            <Grid item xs={12} md={7}>
              <div style={{ padding: matches ? "2rem" : "1rem" }}>
                <Typography variant="body1" color="secondary">
                  After your site assessment, your solar installer will recommend an optimal solar system design for
                  your home. They’ll walk you through things like panel wattage and manufacturer, roof facet selection,
                  inverter type, sizing, and which roof facets to use in order to make sure you get the perfect system
                  at the best price.
                </Typography>
                <br />
                <Typography variant="body1" color="secondary">
                  Your installer may recommend different solar panels technology and design as well as different
                  inverters. They’ll describe what makes each of these solar system components the better choice for
                  your specific circumstances and what the tradeoffs of each option would be. Ultimately you, the
                  homeowner, have the final say over the design of your project so don’t be afraid to ask questions and
                  work with the installer on any design or performance questions that you have.
                </Typography>
                <br />
                <Typography variant="body1" color="secondary">
                  Your installer will request your approval before finalizing the design, and applying for the necessary
                  permits. Once you approve the design, your solar system installation will move on to the next phase.
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
                <img src={approval} className={classes.image} alt="Design" />
              </div>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      {/* step4 */}
      <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")} className={classes.accordion}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
          <Typography variant="h6" color="secondary">
            4. Permits and Paperwork
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            <Grid item xs={12} md={7}>
              <div style={{ padding: matches ? "2rem" : "1rem" }}>
                <Typography variant="body1" color="secondary">
                  You’ll need to apply for permits with your local planning and zoning commission before your solar
                  installer can go ahead with the installation. Your installer will handle the entire permitting process
                  for you, but it’s important to make sure you obtain copies of the permits once available and keep them
                  for your records. Copies of the permit can be a requirement for certain incentive and financing
                  programs. Building permit regulations are specific to residential areas, so your installer will be an
                  excellent source of information about the different requirements. For instance, some states allow
                  homeowners to install solar panels across their entire roof, while some others require three feet of
                  clear space surrounding the solar panels for safety access.
                </Typography>
                <br />
                <Typography variant="body1" color="secondary">
                  Your solar installer will also be able to help you manage the paperwork for any incentives associated
                  with your system. Be sure to ask about any paperwork you’ll need including for local, state incentives
                  like subsidy on solar pump and rooftop solar, government rebates, etc.. The time frame for this step
                  is mainly dependent on how long it takes your installer to get it all finished and submitted. If
                  you’re eager to get your panel system up and running immediately, just make sure to follow up with
                  your installer to check on the progress of your paperwork.
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
                <img src={permits} className={classes.image} alt="Permits" />
              </div>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      {/* step5 */}
      <Accordion expanded={expanded === "panel5"} onChange={handleChange("panel5")} className={classes.accordion}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5bh-content" id="panel5bh-header">
          <Typography variant="h6" color="secondary">
            5. Ordering Solar System Equipment
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            <Grid item xs={12} md={7}>
              <div style={{ padding: matches ? "2rem" : "1rem" }}>
                <Typography variant="body1" color="secondary">
                  Once your paperwork and permits are approved (usually within one or two months after submitting your
                  application), your installer will place an equipment order. The equipment order will be based on the
                  approved design finalized after your site assessment.
                </Typography>
                <br />
                <Typography variant="body1" color="secondary">
                  This equipment order includes two major components: inverters and solar panels. Solar installers can
                  be excellent sources of information on the different equipment options, so be sure to ask questions
                  and understand the tradeoffs of each option. Homeowners should consider price, aesthetics, durability
                  and efficiency before choosing any brand. Once the equipment has been ordered, your home will be added
                  to your installer’s queue. Your precise installation day will depend on the installer’s availability,
                  and they’ll usually need to block off a couple of days to complete the work. Once your equipment
                  arrives at the installer’s headquarters, the permits are in hand, and your home is at the top of the
                  queue, it’s time for installation. The process of solar power system installation is mentioned below.
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
                <img src={equipment} className={classes.image} alt="Equipment" />
              </div>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default CrucialSteps;
