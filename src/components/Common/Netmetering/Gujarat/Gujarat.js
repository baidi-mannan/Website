import React, { useState } from "react";
import { Grid, Typography, makeStyles, Link, IconButton, useMediaQuery } from "@material-ui/core";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import { pdfFilesLink, coverImage } from "./FileLinks";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import GujaratTable from "./GujaratTable";

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

const Gujarat = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:600px)");
  const [view, setView] = useState(true);

  return (
    <div>
      <Grid container>
        <Grid item container>
          <Grid item xs={12} md={6}>
            <div className={classes.root}>
              <Typography color="secondary" variant={matches ? "h3" : "h4"}>
                <strong>GUJARAT</strong>
              </Typography>
              <br />
              <Typography color="secondary" variant="body1" align="justify">
              Gujarat is the sixth largest state in India with an area of 196,024 Km2. As of December 2020, Gujarat has an installed solar capacity of 3273 Mw with a solar policy aiming towards increasing total solar capacity from 10 per cent to 17 percent of renewable energy generation by 2022. 
              </Typography>
              <br />
              <Typography color="secondary" variant="body1" align="justify">
              Government policies aim at increasing the solar power generation by 3000 MW annually. Gujarat ranks fifth in solar generation capacity by states in India. It is one of the fastest growing states when it comes to solar deployment- both in rooftop and large-scale solar projects. Ahmedabad airport has commissioned a solar plant capacity of 700 MW in 2018 in a push towards installing solar abiding by government’s policies. Gujarat is also a home to Charanka Solar Park that is being constructed on a 2,000 hectare land in Northern Gujarat, encompassing 19 different solar projects. The solar park is expected to host at least 790 MW solar power systems when it is fully completed and commissioned.,{" "}
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
                <strong>THE PARTIES ELIGIBLE FOR NET METERING POLICY IN GUJARAT ARE:</strong>
              </Typography>
              <br />
              <br />
              <Typography color="secondary" variant="body1" align="justify">
                <li>
                Be a consumer of the local distribution licensee. 
                </li>
                <br />
                <li>
                Own or be in legal possession of the premises including the rooftop or terrace or building or infrastructure or open areas of the land or part or combination thereof on which the Solar PV System is proposed to be installed.
                </li>
                <br />
                <li>
                Connect the proposed Rooftop Solar PV System to the Distribution System of the Licensee.
                </li>
                <br/>
                <li>
                Consume all of the electricity generated from the Rooftop Solar PV System at the same premises.
                </li>
              </Typography>
            </div>
          </Grid>
          {/* The Eligible Consumer */}
          <Grid item xs={12} md={6}>
            <div style={{ padding: matches ? "1rem" : "0.5rem", border: "1px solid #bfbfbf" }}>
              <div style={{ padding: matches ? "2rem" : "0.5rem", backgroundColor: "#FAFAFA" }}>
                <Typography color="secondary" variant={matches ? "h5" : "h6"}>
                  <strong>
                    THE ELIGIBLE CONSUMER MAY INSTALL THE ROOFTOP SOLAR PV SYSTEM UNDER NET METERING ARRANGEMENT WHICH,
                  </strong>
                </Typography>
                <br />
                <br/>
                <Typography color="secondary" variant="body1" align="justify">
                  <li>
                  Shall be within the permissible rated capacity as defined under these Regulations. 
                  </li>
                  <br />
                  <li>
                  Shall be located in the consumer’s premises
                  </li>
                  <br />
                  <li>
                  Shall interconnect and operate safely in parallel with the distribution licensee network.
                  </li>
                  <br/>
                </Typography>
                
                <Typography color="secondary" variant="body1" align="justify">
                The cumulative capacity to be allowed at a particular distribution transformer in consumer’s locality shall not exceed 65% of the peak capacity of the distribution transformer. The Rooftop Solar PV Energy Generator shall be responsible for safe operation, maintenance and rectification of defects of its system up to the interconnection point beyond which the responsibility of safe operation, maintenance and rectification of any defects in the system including the net meter shall rest with the distribution licensee.
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
            <GujaratTable />
          </div>
        </Grid>
        {/* list of documents */}
        <Grid item xs={12}>
          <div className={classes.root} style={{ backgroundColor: "#e9e9e9" }}>
            <Typography color="secondary" variant={matches ? "h4" : "h5"} gutterBottom>
              <strong>LIST OF DOCUMENTS REQUIRED</strong>
            </Typography>
            <div className={classes.requiredList}>
              <ListItem>
                <ListItemIcon>
                  <CheckBoxIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant={matches ? "h5" : "h6"} color="secondary">
                  Copy of Latest Electricity Bill
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckBoxIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant={matches ? "h5" : "h6"} color="secondary">
                  Copy of Latest Municipality Tax or Index-2
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckBoxIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant={matches ? "h5" : "h6"} color="secondary">
                  Copy of Aadhar Card
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckBoxIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant={matches ? "h5" : "h6"} color="secondary">
                  Copy of Pan Card
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckBoxIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant={matches ? "h5" : "h6"} color="secondary">
                  Passport Size Photo-3 Copy
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckBoxIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant={matches ? "h5" : "h6"} color="secondary">
                  Contact Number
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
              <Typography style={{ lineHeight: 1.2 }} color="secondary" align="justify" variant={matches ? "h6" : "body1"}>
              Under the Grid-connected Rooftop Solar Scheme (Phase-II), Ministry is providing 40% subsidy for the first 3 kW and 20% subsidy beyond 3 kW and upto 10 kW. The scheme is being implemented in the states by local Electricity Distribution Companies (DISCOMs).
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
                      {/* Capacity */}
                      <div className={classes.innerContent}>
                        <Typography style={{ color: "white" }} variant={matches ? "h4" : "h5"} gutterBottom>
                          CAPACITY OF SOLAR SYSTEM
                        </Typography>
                        <div>
                          <Typography variant={matches ? "h6" : "body1"} color="secondary" align="justify">
                            <li>
                              <strong>Size: </strong>Min 1 kWp
                            </li>
                            <li>
                            Max 1 MWp
                            </li>
                            <li>
                              <strong>Voltage level: </strong>Upto 6 kW, 230V- single phase
                            </li>
                            <li>
                              <strong>415V (Three phase): </strong>Above 6 kW and upto 100 kW
                            </li>
                            <li>
                              <strong>11 kV-Three phase: </strong>Above 100 kW
                            </li>
                            <li>
                              <strong>Conditions: </strong> Cumulative capacity of all solar systems installed in your area shall not exceed 30% of distribution transformer capacity in your area.
                            </li>
                            
                          </Typography>
                        </div>
                      </div>
                      {/* ownership */}
                      <div className={classes.innerContent}>
                        <Typography style={{ color: "white" }} variant={matches ? "h4" : "h5"} gutterBottom>
                          OWNERSHIP OPTIONS
                        </Typography>

                        <div>
                          <Typography color="secondary" variant={matches ? "h6" : "body1"}>
                            <li>Self ownership (CAPEX model)</li>
                            <li>Third Party Sale (Through lease / Power Sale Agreement)</li>
                          </Typography>
                        </div>
                      </div>
                      {/* Billing */}
                      <div className={classes.innerContent}>
                        <Typography style={{ color: "white" }} variant={matches ? "h4" : "h5"} gutterBottom>
                          BILLING MECHANISM
                        </Typography>

                        <div>
                          <Typography color="secondary" variant={matches ? "h6" : "body1"}>
                            <li>Annual (April to March)</li>
                            <li>Any unadjusted electricity credits shall be paid as per the rates notified by GERC.</li>
                          </Typography>
                        </div>
                      </div>
                      {/* Others */}
                      <div className={classes.innerContent}>
                        <Typography style={{ color: "white" }} variant={matches ? "h4" : "h5"} gutterBottom>
                          OTHERS
                        </Typography>

                        <div>
                          <Typography color="secondary" variant={matches ? "h6" : "body1"} align="justify">
                            <li>
                            Exempted from Transmission Charge, Transmission Loss, Wheeling Charge, Wheeling Loss, Banking Charges.
                            </li>
                            <li>
                            Cross Subsidy and additional charges not applicable for self consumption, but it is applicable for third party sale
                            </li>
                            <li>Electricity Duty is applicable as per the provision of Gujarat Electricity Act,1958.</li>
                          </Typography>
                        </div>
                      </div>
                    </div>{" "}
                  </>
                ) : (
                  <>
                    {/* Commercial */}
                    <div>
                      {/* Capacity */}
                      <div className={classes.innerContent}>
                        <Typography gutterBottom style={{ color: "white" }} variant={matches ? "h4" : "h5"}>
                          CAPACITY OF SOLAR SYSTEM
                        </Typography>

                        <div>
                          <Typography color="secondary" variant={matches ? "h6" : "body1"} align="justify">
                            <li>
                              <strong>Size: </strong>Min 1 kWp
                            </li>
                            <li>Max 1 MWp</li>
                            <li>
                              <strong>Voltage level: </strong>Upto 6 kW, 230V- single phase
                            </li>
                            <li>
                              <strong>415V (Three phase): </strong>Above 6 kW and upto 100 kW
                            </li>
                            <li>
                              <strong>11 kV-Three phase: </strong>Above 100 kW
                            </li>
                            <li>
                              <strong>Conditions: </strong>≤50% of your Sanctioned Load
                            </li>
                            <li>
                            Cumulative capacity of all solar systems installed in your area shall not exceed 30% of distribution transformer capacity in your area.
                            </li>
                           
                          </Typography>
                        </div>
                      </div>
                      {/* ownership */}
                      <div className={classes.innerContent}>
                        <Typography gutterBottom style={{ color: "white" }} variant={matches ? "h4" : "h5"}>
                          OWNERSHIP OPTIONS
                        </Typography>

                        <div>
                          <Typography color="secondary" variant={matches ? "h6" : "body1"}>
                            <li>Self ownership (CAPEX model)</li>
                            <li>Group Captive</li>
                            <li>Third Party sale within same premises or outside of the premises (through lease agreement / power sale agreement)</li>
                          </Typography>
                        </div>
                      </div>
                      {/* Billing */}
                      <div className={classes.innerContent}>
                        <Typography gutterBottom style={{ color: "white" }} variant={matches ? "h4" : "h5"}>
                          BILLING MECHANISM
                        </Typography>

                        <div>
                          <Typography color="secondary" variant={matches ? "h6" : "body1"}>
                            <li>Annual (April to March)</li>
                            <li>Any unadjusted electricity credits shall be paid as per the rates notified by GERC.</li>
                           
                          </Typography>
                        </div>
                      </div>
                      {/* Others */}
                      <div className={classes.innerContent}>
                        <Typography gutterBottom style={{ color: "white" }} variant={matches ? "h4" : "h5"}>
                          OTHERS
                        </Typography>

                        <div>
                          <Typography color="secondary" variant={matches ? "h6" : "body1"} align="justify">
                            <li>
                            Banking Charges- Rs.1.10 per unit of energy consumed for MSME and other than demand based consumers. Rs. 1.50 per unit of energy consumed for demand based consumers. Exempted for Government Buildings.
                            </li>
                            <li>
                            Transmission and wheeling charges if applicable depending on plant and point of consumption decided by GERC.
                            </li>
                            <li>Cross Subsidy and Additional charges are applicable as decided by GERC from time to time.</li>
                            <li>Electricity Duty is applicable as per the provision of Gujarat Electricity Act,1958.</li>
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

export default Gujarat;
