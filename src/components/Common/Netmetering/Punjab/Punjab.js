import React, { useState } from "react";
import { Grid, Typography, makeStyles, Link, IconButton, useMediaQuery } from "@material-ui/core";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import { pdfFilesLink, coverImage } from "./FileLinks";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import PunjabTable from "./PunjabTable";

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

const Punjab = () => {
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
                <strong>PUNJAB</strong>
              </Typography>
              <br />
              <Typography color="secondary" variant="body1" align="justify">
              Solar adaptation has been on a steady rise in Punjab where the installed capacity increased from 9 MW in 2012 to 920 MW in August 2019. Solar accounts for more than 6% of its total installed electricity generation capacity. The hydro potential is limited to canals based small mini/ hydro projects which has almost been fully harnessed leaving the major accessible potential only in the biofuel/ bio-CNG and solar sector. 
              </Typography>
              <br />
              <Typography color="secondary" variant="body1" align="justify">
              The Punjab Government has launched a draft version of its renewable energy policy, which aims to meet 21% of its power requirement through renewable energy by the year 2030. Punjab Energy Development Agency (PEDA) will be the designated implementation agency of this policy. The policy has set a target of deploying 3,000 MW of solar projects by 2030, which will include utility-scale, canal-top, rooftop, floating, and hybrid solar projects. PSPCL has projected a capacity addition of 50 MW each year for the Solar SPV plants.,{" "}
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
                <strong>THE PARTIES ELIGIBLE FOR NET METERING POLICY IN PUNJAB ARE:</strong>
              </Typography>
              <br />
              <br />
              <Typography color="secondary" variant="body1">
                <li>
                This Policy shall apply to the distribution licensee and consumers of distribution licensee of the State of Punjab.
                </li>
                <br />
                <li>
                The eligible consumer may install the rooftop solar system under net metering arrangement which; 
                <ol type="a">
                  <li>shall be within the permissible rated capacity as defined under this Policy. </li>
                  <li>shall be located in the consumer premises</li>
                  <li>shall interconnect and operate safely in parallel with the distribution licensee network. </li>
                </ol>
                </li>
                <br />
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
                All the consumers of the State Distribution licensee or PSPCL who intend to encourage solar energy and set up solar PV plants at available places on roof-tops of Individual households, industries, Government or Semi-Government or Local Body offices, commercial establishments, institutions, residential complexes shall be eligible with project capacity ranging from minimum 1 KWp upto 1MWp (AC side) with or without battery back-up support.
                </Typography>
                <br/>
                <Typography color="secondary" variant="body1" align="justify">
                In addition, the state is providing slew of incentives for setting-up of NRSE projects such as:
                </Typography>
                <br/>
                <Typography color="secondary" variant="body1" align="justify">
                <li>100% exemption from payment of fee and stamp duty for registration/lease deed charges for the land required for the project.</li>
                <li>100% exemption from payment of CLU and EDC for the land required for Renewable Energy Power Projects.</li>
                <li>100% Electricity Duty exemption for power consumed from state licensee during construction and testing of the project.</li>
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
            <PunjabTable />
          </div>
        </Grid>
        {/* list of documents */}
        <Grid item xs={12}>
          <div className={classes.root} style={{ backgroundColor: "#e9e9e9" }}>
            <Typography color="secondary" variant={matches ? "h4" : "h5"} align="justify" gutterBottom>
              <strong>Documents to be submitted by farmers with the application form for installation of solar pumps are given below:</strong>
            </Typography>
            <div className={classes.requiredList}>
              <ListItem>
                <ListItemIcon>
                  <CheckBoxIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant={matches ? "h5" : "h6"} color="secondary">
                  Photograph of the applicant/applicants. 
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckBoxIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant={matches ? "h5" : "h6"} color="secondary">
                  Copy of AADHAAR CARD.
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckBoxIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant={matches ? "h5" : "h6"} color="secondary">
                  Copy of Scheduled Caste Certificate (Only for SC Farmers). 
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckBoxIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant={matches ? "h5" : "h6"} color="secondary" align="justify">
                  Certificate of Patwari for required land at a place in the village or affidavit / self attested certificate of famer to this effect. 
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckBoxIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant={matches ? "h5" : "h6"} color="secondary" align="justify">
                  PSPCL Certificate for no power connection (agriculture motor) for irrigation or affidavit / self attested certificate of famer to this effect. 
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckBoxIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant={matches ? "h5" : "h6"} color="secondary" align="justify">
                  Certificate for Micro Irrigation system in the land or affidavit / self attested certificate of farmer (only for Micro irrigation farmers for preference in allocation of solar pumps ) 
                  </Typography>
                </ListItemText>
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <CheckBoxIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant={matches ? "h5" : "h6"} color="secondary" align="justify">
                  Photograph of the pond / water tank site.  
                  </Typography>
                </ListItemText>
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <CheckBoxIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant={matches ? "h5" : "h6"} color="secondary" align="justify">
                  Upload customer copy of challan if payment deposited through RTGS / NEFT  
                  </Typography>
                </ListItemText>
              </ListItem>
              <br/>
              <Typography variant={matches ? "h5" : "h6"} color="secondary" align="justify">
              <strong>Note:</strong> The application form and the documents to be submitted are for the information of the farmers only and are required to be submitted as and when the scheme is launched in future by PEDA. 
            </Typography>

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
              As of 8th March 2019, it has been stated that the Punjab State Power Corporation Limited (PSPCL) would provide Central Finance Assistance (CFA)/ Subsidy for Grid Connected Rooftop Solar Plants under Net Metering, approximately a capacity of 1 to 10 kW as per MNRE, Government of India. CFA will be provided if funds are available from MNRE, Government of India. 
              </Typography>
              <br/>
              <Typography style={{ lineHeight: 1.2 }} color="secondary" variant={matches ? "h6" : "body1"} align="justify">
              In domestic sectors, the Government of India will provide a maximum of 40% of subsidy on the installation of rooftop solar power plants. If the residential sector receives,
              </Typography>
              <br/>
              <Typography style={{ lineHeight: 1.2 }} color="secondary" variant={matches ? "h6" : "body1"} align="justify">
              <li>A maximum of up to 3kW capacity, the CFA allotted is 40%</li>
              <li>A capacity ranging from 3kW to 10kW would receive a CFA of 40% up to 3kW</li>
              <li>Capacity above 3kW, will receive an additional 20% CFA</li>
              <li>If the capacity exceeds 10kW no CFA is allotted</li>
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
                          CAPACITY
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
                              <strong>Voltage level: </strong>230V (Single phase) : 7 kWp max.
                            </li>
                            <li>
                              <strong>415V (Three phase): </strong> 100 kWp max.
                            </li>
                            <li>
                              <strong>=11 kV:</strong> 1 MWp max
                            </li>
                            <li>
                              <strong>Conditions: </strong>=80% of your Sanctioned Load
                            </li>
                            <li>
                            Cumulative capacity of all solar systems installed in your area shall not exceed 30% of Local Distribution transformer capacity in your area.
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
                            <li>Third party ownership (RESCO model)</li>
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
                            <li>Annual (October to September)</li>
                            <li>The settlement of net energy including any banked energy shall be done at the end of each settlement period based on 90% of the consumption. At the beginning of each settlement period, cumulative carried over injected energy shall be reset to zero.</li>
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
                            Exemption from wheeling charges and cross subsidy surcharge
                            </li>
                            <li>
                            Electricity generated by the rooftop solar system shall not be more than 90% of the electricity consumption at the end of the settlement period.
                            </li>
                            <li>Exemption from open excess charges
                            </li>
                            <li>
                            The applicant shall pay application fee of Rs. 50/KVA alongwith the application to PSPCL. No parallel operation charges shall be leviable on these projects
                            </li>
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
                          CAPACITY
                        </Typography>

                        <div>
                          <Typography color="secondary" variant={matches ? "h6" : "body1"} align="justify">
                            <li>
                              <strong>Size: </strong>Min 1 kWp
                            </li>
                            <li>
                            Max 1 MWp
                            </li>
                            <li>
                              <strong>Voltage level: </strong>230V (Single phase) : 7 kWp max.
                            </li>
                            <li>
                              <strong>415V (Three phase): </strong> 100 kWp max.
                            </li>
                            <li>
                              <strong>=11 kV: </strong> 1 MWp max
                            </li>
                            <li>
                              <strong>Conditions: </strong>=80% of your Sanctioned Load
                            </li>
                            <li>
                            Cumulative capacity of all solar systems installed in your area shall not exceed 30% of Local Distribution transformer capacity in your area.
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
                            <li>Third party ownership (RESCO model)</li>
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
                            <li>Annual (October to September)</li>
                            <li>The settlement of net energy including any banked energy shall be done at the end of each settlement period based on 90% of the consumption. At the beginning of each settlement period, cumulative carried over injected energy shall be reset to zero.</li>
                           
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
                            Exemption from wheeling charges and cross subsidy surcharge
                            </li>
                            <li>
                            Electricity generated by the rooftop solar system shall not be more than 90% of the electricity consumption at the end of the settlement period.
                            </li>
                            <li>
                            Exemption from open excess charges
                            </li>
                            <li>
                            The applicant shall pay application fee of Rs. 50/KVA alongwith the application to PSPCL. No parallel operation charges shall be leviable on these projects
                            </li>
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

export default Punjab;
