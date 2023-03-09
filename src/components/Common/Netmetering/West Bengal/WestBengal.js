import React, { useState } from "react";
import { Grid, Typography, makeStyles, Link, IconButton, useMediaQuery } from "@material-ui/core";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import { pdfFilesLink, coverImage } from "./FileLinks";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import BengalTable from "./BengalTable";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "3rem",
    [theme.breakpoints.down("xs")]: {
      padding: "1rem",
    },
  },
  iconButton: {
    padding: "0px",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  requiredList: {
    "& .MuiListItem-root": {
      padding: "0px",
    },
  },
  outerDiv: {
    borderRadius: "20px",
    borderBottomRightRadius: "0px",
    borderBottomLeftRadius: "0px",
    [theme.breakpoints.down("xs")]: {
      borderRadius: "10px",
      borderBottomRightRadius: "0px",
      borderBottomLeftRadius: "0px",
    },
  },
  innerDiv: {
    padding: "1.5rem",
    border: "10px solid #ffd05b",
    borderRadius: "20px",
    [theme.breakpoints.down("xs")]: {
      padding: "1rem 0",
      border: "5px solid #ffd05b",
      borderRadius: "10px",
    },
    "& .MuiTypography-root": {
      cursor: "pointer",
      WebkitTapHighlightColor: "transparent",
      WebkitUserSelect: "none",
      WebkitTouchCallout: "none",
      mozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none",
    },
  },
  outerContent: {
    backgroundColor: "#ffd05b",
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "20px",
  },
  innerContent: {
    margin: "20px 0",
    "& div": {
      padding: "1.5rem",
      backgroundColor: "#fafafa",
      borderRadius: "20px",
      [theme.breakpoints.down("xs")]: {
        padding: "1rem",
        borderRadius: "10px",
      },
    },
  },
  cover: {
    minHeight: "400px",
    backgroundImage: `url(${coverImage})`,
    backgroundSize: "100% 100%",
    backgroundPosition: "top center",
    backgroundRepeat: "no-repeat",
    imageRendering: "crisp-edges",
  },
}));

const WestBengal = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:600px)");
  const [view, setView] = useState(true);

  return (
    <div>
      <Grid container>
        <Grid item container>
          <Grid item xs={12} md={6}>
            <div className={classes.root}>
              <Typography color="secondary" variant={matches ? "h3" : "h4"} >
                <strong>WEST BENGAL</strong>
              </Typography>
              <br />
              <Typography color="secondary" variant="body1" align="justify">
              West Bengal is a pioneer in solar technology in India. Government-owned WEBEL was one of the first manufacturers of solar energy panels in the country. As the degree of urbanization in West Bengal is rapidly growing at the rate of 3.92% (Sultana, 2015) energy demand is estimated to be at a high. The projected peak demand is between 8,937 and 10,871 MW in 2021 increasing to about 14,730MW by 2031 which has brought up the government’s keen interest to access renewable energy sources. 
              </Typography>
              <br />
              <Typography color="secondary" variant="body1" align="justify">
              The state government has ambitious plans and more than 1300 government buildings, hospitals and schools have been identified to help install about 180MW of solar in the next couple of years. Not just the villages and cities, but also the islands of Sundervans have been discussed for solar installation as areas that are currently facing a shortage of power. The state has an installed solar capacity of 94 MW as of September 2019, while 64 MW of solar projects are currently under development. It is mandatory for all large housing societies in West Bengal, (having a total contract demand of more than 500 kW) to install solar rooftop systems to meet a minimum of 1.5% of their total electrical load by solar energy. The subsidies are applicable as per SECI guidelines. A new policy too is expected in West Bengal to help set up the action plan towards renewable energy generation, helping the state to achieve the target of 4,500MW of solar power by the year 2022 that the state has set.,{" "}
              </Typography>
            </div>
          </Grid>
          <Grid className={classes.cover} item xs={12} md={6}></Grid>
        </Grid>
        <Grid item xs={12}>
          <div style={{ height: "5rem", backgroundColor: "#ffd05b" }}></div>
        </Grid>
        <Grid item container style={{ backgroundColor: "#e9e9e9" }}>
          {/* The parties eligible */}
          <Grid item xs={12} md={6}>
            <div className={classes.root}>
              <Typography color="secondary" variant={matches ? "h5" : "h6"}>
                <strong>THE PARTIES ELIGIBLE FOR NET METERING POLICY IN WEST BENGAL ARE:</strong>
              </Typography>
              <br />
              <br />
              <Typography color="secondary" variant="body1">
                <li>
                Hospitals / Health centers run by Govt. / Private/ Private charitable organization.
                </li>
                <br />
                <li>
                Schools/ Academic institutions run by Govt./ Private/ Govt. aided
                </li>
                <br />
                <li>
                Govt. offices/ organizations.
                </li>
                <br/>
                <li>Local bodies like Municipalities/ Panchayats</li><br/>
                <li>Housing Complex.</li><br/>
                <li>Commercial/industrial organizations and any institutions registered under any statute</li>
                <br/>
                The above mentioned parties should also be a consumer of WBSEDCL and apply for installation capacity not less than 5KW with a connection type of 3 phase.
              </Typography>
            </div>
          </Grid>
          {/* The Eligible Consumer */}
          <Grid item xs={12} md={6}>
            <div style={{ padding: matches ? "1rem" : "0.5rem", border: "1px solid #bfbfbf" }}>
              <div style={{ padding: matches ? "2rem" : "0.5rem", backgroundColor: "#FAFAFA" }}>
                <Typography color="secondary" variant={matches ? "h5" : "h6"} align="justify">
                  <strong>
                    THE ELIGIBLE CONSUMER MAY INSTALL THE ROOFTOP SOLAR PV SYSTEM UNDER NET METERING ARRANGEMENT WHICH,
                  </strong>
                </Typography>
                <br />
                <Typography color="secondary" variant="body1" align="justify">
                  The energy injected by the solar PV system of the customer into the distribution network of the licensee gets adjusted to the maximum extent of 90% against the drawal of energy by the consumer from the grid. The balance of unadjusted injection of energy by the solar PV system, if any, is carried forward to the next billing period. This process of adjustment will be continued for the entire financial year. At the end of the financial year, after effecting the final adjustment for that month, surplus injection from solar PV system will be treated as unwanted / inadvertent injection.
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
        {/* Table */}
        <Grid item xs={12}>
          <div className={classes.root}>
            <Typography color="secondary" variant={matches ? "h4" : "h5"}>
              <strong>TABLE</strong>
            </Typography>
            <br />
            <Typography variant={matches ? "h5" : "h6"}>
              Application for Net-Metering approval for Photovoltaic system installation:
            </Typography>
            <br />
            <BengalTable />
          </div>
        </Grid>
        {/* list of documents */}
        <Grid item xs={12}>
          <div className={classes.root} style={{ backgroundColor: "#e9e9e9" }}>
            <Typography color="secondary" variant={matches ? "h4" : "h5"} gutterBottom>
              <strong>Information Required for application</strong>
            </Typography>
            <div className={classes.requiredList}>
              <ListItem>
                <ListItemIcon>
                  <CheckBoxIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant={matches ? "h5" : "h6"} color="secondary">
                  Consumer Id
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckBoxIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant={matches ? "h5" : "h6"} color="secondary">
                  Installed Capacity of proposed Solar plant
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckBoxIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant={matches ? "h5" : "h6"} color="secondary">
                   Type of Consumer
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckBoxIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant={matches ? "h5" : "h6"} color="secondary">
                  Acceptance by the consumer bearing the cost for phase conversion/alteration of service
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckBoxIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant={matches ? "h5" : "h6"} color="secondary">
                  Mobile No, Aadhar No(optional), email-id(optional)
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckBoxIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant={matches ? "h5" : "h6"} color="secondary">
                  Applicant address.
                  </Typography>
                </ListItemText>
              </ListItem>
            </div>
            <br />
            <br />
            <div
              className={classes.root}
              style={{ backgroundColor: "#fafafa", borderRadius: matches ? "20px" : "10px" }}
            >
              <Typography color="secondary" variant={matches ? "h5" : "h6"} gutterBottom>
                <strong>Solar Subsidy:</strong>
              </Typography>
              <Typography style={{ lineHeight: 1.2 }} color="secondary" variant={matches ? "h6" : "body1"} align="justify">
              According to the latest notification by WBSEDCL, 40% of the benchmark cost is provided in accelerated depreciation for solar PV plant installations from capacity of 1 KW to 5 KW. 90% of the benchmark cost is provided as discount to farmers for installations of Solar water pumping system.
              </Typography>
            </div>
          </div>
        </Grid>
        {/* Residential & Commericial */}
        <Grid item xs={12} style={{ padding: matches ? "100px 20px" : "50px 10px" }}>
          <Grid item container justify="center">
            <Grid item xs={6}>
              <div
                className={classes.outerDiv}
                style={{
                  padding: matches ? "0px 10px 10px 0px" : "0px 5px 5px 0px",
                  backgroundColor: view ? "#ffd05b" : "#fafafa",
                }}
              >
                <div
                  className={classes.innerDiv}
                  style={{
                    backgroundColor: view ? "#ffd05b" : "#fafafa",
                  }}
                >
                  <Typography
                    variant={matches ? "h4" : "h6"}
                    align="center"
                    onClick={() => setView(true)}
                    style={{ color: view ? "white" : "#ffd05b" }}
                  >
                    <strong>RESIDENTIAL</strong>
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div
                className={classes.outerDiv}
                style={{
                  padding: matches ? "0px 0px 10px 10px" : "0px 0px 5px 5px",
                  backgroundColor: !view ? "#ffd05b" : "#fafafa",
                }}
              >
                <div
                  className={classes.innerDiv}
                  style={{
                    backgroundColor: !view ? "#ffd05b" : "#fafafa",
                  }}
                >
                  <Typography
                    variant={matches ? "h4" : "h6"}
                    align="center"
                    onClick={(e) => setView(false)}
                    style={{ color: !view ? "white" : "#ffd05b" }}
                  >
                    <strong>COMMERCIAL</strong>
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
          {/* content */}
          <Grid
            item
            container
            className={classes.outerContent}
            style={{
              borderTopRightRadius: view && (matches ? "20px" : "10px"),
              borderTopLeftRadius: !view && (matches ? "20px" : "10px"),
            }}
          >
            <Grid item xs={12}>
              <div style={{ padding: matches ? "1rem 3rem" : "1rem" }}>
                {view ? (
                  <>
                    {/* Residential */}
                    <div>
                      {/* ROOFTOP */}
                      <div className={classes.innerContent}>
                        <Typography style={{ color: "white" }} variant={matches ? "h4" : "h5"} gutterBottom>
                          ROOFTOP
                        </Typography>
                        <div>
                          <Typography variant={matches ? "h6" : "body1"} color="secondary" align="justify">
                          Mandatory for all large housing societies having a total contract demand of more than 500 kW will be required to install solar rooftop systems to meet at least 1.5% of their total electrical load.
                          </Typography>
                        </div>
                      </div>
                    
                    </div>{" "}
                  </>
                ) : (
                  <>
                    {/* Commercial */}
                    <div>
                      {/* Rooftop */}
                      <div className={classes.innerContent}>
                        <Typography gutterBottom style={{ color: "white" }} variant={matches ? "h4" : "h5"}>
                         ROOFTOP
                        </Typography>

                        <div>
                          <Typography color="secondary" variant={matches ? "h6" : "body1"} align="justify">
                          Mandatory for all large housing societies having a total contract demand of more than 500 kW will be required to install solar rooftop systems to meet at least 1.5% of their total electrical load.
                          </Typography>
                        </div>
                      </div>
                      {/* Financial Assistance */}
                      <div className={classes.innerContent}>
                        <Typography gutterBottom style={{ color: "white" }} variant={matches ? "h4" : "h5"}>
                          FINANCIAL ASSISTANCE
                        </Typography>

                        <div>
                          <Typography color="secondary" variant={matches ? "h6" : "body1"}>
                            <li>40% Accelerated Depreciation</li>
                            <li>10 year Tax holiday on solar projects</li>
                            <li>Loans available for up to Rs.15 Crore for renewable energy projects under Priority sector lending
                            </li>
                            <li>The host and obligated distribution utilities shall provide revolving Letter of Credit from a nationalized bank as a payment security mechanism for all RE projects.</li>
                          </Typography>
                        </div>
                      </div>
                      
                    </div>
                  </>
                )}
              </div>
            </Grid>
          </Grid>
        </Grid>
        {/* Pdf Downloads */}
        <Grid item xs={12}>
          <div style={{ backgroundColor: "#efefef", padding: matches ? "2rem 3rem" : "1rem" }}>
            <Typography color="secondary" variant={matches ? "h4" : "h5"}>
              <strong>PDF DOWNLOADS</strong>
            </Typography>
          </div>
          <div className={classes.root}>
            {pdfFilesLink.map((pdf, index) => {
              return (
                <React.Fragment key={index}>
                  <Grid item container alignItems="center" style={{ marginBottom: "2rem" }}>
                    <Grid item xs={12} md={10}>
                      <Typography
                        color="secondary"
                        gutterBottom
                        style={{ lineHeight: 1.1 }}
                        variant={matches ? "h5" : "h6"}
                      >
                        {pdf.fileName}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={2}>
                      <Link color="secondary" href={pdf.fileUrl} download>
                        <div>
                          <IconButton disableRipple className={classes.iconButton}>
                            <PictureAsPdfIcon style={{ fontSize: matches ? "50px" : "40px" }} />
                            <Typography variant="body1">Download Pdf</Typography>
                          </IconButton>
                        </div>
                      </Link>
                    </Grid>
                  </Grid>
                </React.Fragment>
              );
            })}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default WestBengal;
