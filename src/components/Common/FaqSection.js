import React from "react";
import { Grid, Typography, IconButton, makeStyles, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import CallIcon from "@material-ui/icons/Call";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  btnRoot: {
    backgroundColor: "#4d4d4d;",
    fontSize: "large",
    "&:hover": {
      backgroundColor: "#4d4d4d",
    },
  },
  accordion: {
    boxShadow: "none",
    borderRadius: "5px",
    marginBottom: "10px",
    "&.MuiAccordion-root:before": {
      backgroundColor: "#f2f2f2",
    },
    "& .Mui-expanded": {
      backgroundColor: "#ffd54f",
    },
  },
}));

const FaqSection = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const matches = useMediaQuery("(min-width:600px)");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div style={{ padding: matches ? "50px 80px" : "50px 30px", backgroundColor: "#f2f2f2" }}>
      <Grid container>
        <Grid item xs={12} md={5}>
          <div style={{ padding: "10px", marginBottom: "2rem" }}>
            <Typography variant={matches ? "h3" : "h4"} color="secondary" gutterBottom>
              <strong>Frequently asked question</strong>
            </Typography>
            <Typography variant={matches ? "h6" : "body1"} color="secondary" gutterBottom>
              Everything you need to know so you don't have any doubts regarding Solruf.
            </Typography>
            <Typography
              variant={matches ? "h6" : "body1"}
              color="secondary"
              style={{ margin: "20px 0px", fontSize: matches ? "18px" : "15px" }}
            >
              Need more helps?
            </Typography>
            <Link to="/contact">
              <Button
                variant="contained"
                color="primary"
                style={{ borderRadius: "50px", textTransform: "none", padding: "5px" }}
              >
                <div style={{ display: "flex", alignItems: "center", textDecoration: "none", marginRight: "7px" }}>
                  <IconButton style={{ width: "40px", height: "40px", padding: "0px" }} className={classes.btnRoot}>
                    <CallIcon color="primary" fontSize="medium" />
                  </IconButton>
                  &nbsp;
                  <Typography variant={matches ? "h6" : "body1"} style={{ color: "#4d4d4d" }}>
                    Contact Us
                  </Typography>
                </div>
              </Button>
            </Link>
          </div>
        </Grid>
        <Grid item xs={12} md={7}>
          <div style={{ padding: "10px" }}>
            {/* Q1 */}
            <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")} className={classes.accordion}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                <Typography variant="body1" color="secondary">
                  How can I know my electricity consumption and solar energy requirements?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" color="secondary">
                  One can know his/ her electricity consumption from the electricity bill for a given month. Another way
                  is to make a note of all the electric appliances used in the household with energy consumption in
                  watt-hour or units. You can get your solar photovoltaic system requirements by using the solar energy
                  capacity and price calculator in the link is{" "}
                  <a href="https://solruf.com/solarcalculator">https://solruf.com/solarcalculator</a>
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* Q2 */}
            <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")} className={classes.accordion}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
                <Typography variant="body1" color="secondary">
                  What is the warranty of solar panels used in photovoltaic installation systems?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" color="secondary">
                  The performance warranty of solar panels is 25 years.
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* Q3 */}
            <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")} className={classes.accordion}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
                <Typography variant="body1" color="secondary">
                  How long does it take to install solar photovoltaic system?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" color="secondary">
                  System installation of a 1-10 KW installation takes around 3-4 days. SOLRUF will connect you to the
                  best rated installer in your vicinity and the installer will handle the installation and paperwork.
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* Q4 */}
            <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")} className={classes.accordion}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
                <Typography variant="body1" color="secondary">
                  What are the benefits of solar installation system?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" color="secondary">
                  1. Produce own electricity at very low maintenance with long lasting systems. 2. Minimize the
                  electricity expenses to zero with a potential of generating surplus as a source of income. 3. Produce
                  electricity anywhere there is sunlight even in locations with restrictions to power grid availibility.
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* Q5 */}
            <Accordion expanded={expanded === "panel5"} onChange={handleChange("panel5")} className={classes.accordion}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5bh-content" id="panel5bh-header">
                <Typography variant="body1" color="secondary">
                  Where can I install solar panels at my home?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" color="secondary">
                  Solar panels need access to an abundant sunlight source preferrably an open space. Hence it can be
                  installed on terrace, lawn, roof, or any other open spaces.
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* Q6 */}
            <Accordion expanded={expanded === "panel6"} onChange={handleChange("panel6")} className={classes.accordion}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel6bh-content" id="panel6bh-header">
                <Typography variant="body1" color="secondary">
                  I want to know more about solar products. How can I get further information?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" color="secondary">
                  To learn more about solar products please visit SOLRUF website. The link is{" "}
                  <a href="https://solruf.com/blog">https://solruf.com/blog</a> . Solar technology is still a developing
                  technology and there are various developments going on. We have specified details for each category of
                  product and if you still have any queries please contact us.
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* Q7 */}
            <Accordion expanded={expanded === "panel7"} onChange={handleChange("panel7")} className={classes.accordion}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel7bh-content" id="panel7bh-header">
                <Typography variant="body1" color="secondary">
                  What are solar panels made of and how do they generate electricity?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" color="secondary">
                  Solar panel is made up of an array of solar cells. These cells are made of silicon wafers and generate
                  electricity when light falls on it. Solar cells are glass plated to form panels and hence are highly
                  durable to changing weather conditions and external environment.
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* Q8 */}
            <Accordion expanded={expanded === "panel8"} onChange={handleChange("panel8")} className={classes.accordion}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel8bh-content" id="panel8bh-header">
                <Typography variant="body1" color="secondary">
                  Can I get designs to understand how would the installed system would look on my home?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" color="secondary">
                  Yes, each of our customers get a completely personalized solar installation design which shows them in
                  detail how the system would look like in their house and also other reports such as electrical design,
                  Shadow analysis (For aesthetic purposes) and installation costing so that one can get better
                  understanding about photovoltaic installation. You can get designs on{" "}
                  <a href="https://solruf.com/solardesign">https://solruf.com/solardesign</a>
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* Q9 */}
            <Accordion expanded={expanded === "panel9"} onChange={handleChange("panel9")} className={classes.accordion}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel9bh-content" id="panel9bh-header">
                <Typography variant="body1" color="secondary">
                  What would be the cost of installing solar panels at my house?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" color="secondary">
                  You can get the costs of installing solar photovoltaic system at your home by referring to the link{" "}
                  <a href="https://solruf.com/solarcalculator">https://solruf.com/solarcalculator</a>
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* Q10 */}
            <Accordion
              expanded={expanded === "panel10"}
              onChange={handleChange("panel10")}
              className={classes.accordion}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel10bh-content" id="panel10bh-header">
                <Typography variant="body1" color="secondary">
                  Can I connect with solar installers using SOLRUF?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" color="secondary">
                  Yes, SOLRUF is an online solar marketplace. We aim to simplify solar adoption in India by providing
                  best assistance in choosing products everywhere at best price and connecting customers to the best
                  rated installer in their vicinity. Please contact us at{" "}
                  <a href="https://solruf.com/contact">https://solruf.com/contact</a>
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* Q11 */}
            <Accordion
              expanded={expanded === "panel11"}
              onChange={handleChange("panel11")}
              className={classes.accordion}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel11bh-content" id="panel11bh-header">
                <Typography variant="body1" color="secondary">
                  How much area space does a 1KW solar system require?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" color="secondary">
                  Installing a 1KW system requires around 100 sq.ft of area.
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* Q12 */}
            <Accordion
              expanded={expanded === "panel12"}
              onChange={handleChange("panel12")}
              className={classes.accordion}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel12bh-content" id="panel12bh-header">
                <Typography variant="body1" color="secondary">
                  What are the types of solar installation system?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" color="secondary">
                  There are 3 types of solar photovoltaic system: 1. On-grid system 2. Off-grid system 3. Hybrid system
                  To know more about these types of system. Please refer to{" "}
                  <a href="https://solruf.com/blog">https://solruf.com/blog</a>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default FaqSection;
