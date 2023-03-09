import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import { Grid, Typography, makeStyles, Link, IconButton, useMediaQuery, TableCell, TableHead, TableContainer} from "@material-ui/core";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import { pdfFilesLink, coverImage } from "./FileLinks";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import KarnatakaTable from "./KarnatakaTable";

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
  container: {
    maxHeight: 450,
    "& .MuiTableCell-root": {
      padding: "12px",
    },
    "& .MuiTypography-body1": {
      lineHeight: 1.2,
    },
    "& .MuiTableHead-root .MuiTableCell-root": {
      background: "#e9e9e9",
    },
  },
}));

const Karnataka = () => {
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
                <strong>KARNATAKA</strong>
              </Typography>
              <br />
              <Typography color="secondary" variant="body1" align="justify">
              Karnataka is the seventh largest state located in the southern-western part in the country and one of the high contributors of commissioned solar power. Solar energy plants meet about 20 per cent of Karnataka’s daily power requirements as the overall share of renewables continues to climb. At 7,346 megawatts (MW), the state has the largest installed capacity of solar power in the country, and the biggest local plant is in Pavagada (Tumakuru). 
              </Typography>
              <br />
              <Typography color="secondary" variant="body1" align="justify">
              Karnataka has a very strong focus towards solar and in 2016 revised its target to achieve 6000MW of grid connected solar power by the year 2021. The state solar energy potentials is more than 24,700MW and therefore it will play a key role if India has to reach the target of 100GW by the year 2022. Further, to encourage rooftop solar the latest policy change mandates that at least 40% of this 6000MW must come from rooftop solar with 200MW being set as the highest solar generation allowed per Taluk to ensure a widespread installation. In order to pursue the target several solar parks, schemes such as the Surya Raitha, awareness drives for the farmer as well as a keen focus towards distributed solar have been started. According to data from Karnataka Power Corporation Limited, solar energy accounts for more than 50 per cent of the state’s installed capacity of green energy (13,544 MW).,{" "}
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
                <strong>THE PARTIES ELIGIBLE FOR NET METERING POLICY IN KARNATAKA ARE:</strong>
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
                <li>Consume all of the electricity generated from the Rooftop Solar PV System at the same premises.</li>
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
                  <ol type="a">
                    <li>Shall be within the permissible rated capacity as defined under these Regulations. </li>
                    <li>Shall be located in the consumer’s premises. </li>
                    <li>Shall interconnect and operate safely in parallel with the distribution licensee network.</li>
                  </ol>
                </Typography>

                <Typography color="secondary" variant="body1" align="justify">
                The Government of Karnataka shall promote grid connected solar rooftop projects on public buildings, domestic, commercial and industrial establishments through net metering and gross metering methods based on tariff orders issued by KERC from time to time.
                </Typography>
                <br/> 
                <Typography color="secondary" variant="body1" align="justify">
                <strong>Net Metering:</strong> Net metering arrangements are proposed to focus on self-consumption of energy generated from rooftop PV. The concept is a combination of caprice consumption and exchange of power with the utility.
                </Typography>
                <br/>
                <Typography color="secondary" variant="body1" align="justify">
                <li>In case of solar rooftop PV systems connected to the grid of a distribution company on a net basis, the surplus energy injected shall be paid by the ESCOMs at a tariff determined by KERC from time to time.</li><br/>
                <li>
                Metering shall be in compliance with the CEA (installations and operation of meters) Regulations 2006, the Grid Code, the metering code and other relevant regulations issued by KERC/CERC from time to time.
                </li>
                <br/>
                <li>
                ESCOM’s will define specific guidelines on the standards for connectivity to the network. The scheme shall be administered by respective ESCOM’s. (including registration, approval, metering, protocols, safety protocol, and standards).
                </li>
                <br/>
                <li>
                Fiscal benefits by the way of state and MNRE subsidies shall be through nodal agency.
                </li>
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
            <KarnatakaTable />
          </div>
        </Grid>
        {/* list of documents */}
        <Grid item xs={12}>
          <div className={classes.root} style={{ backgroundColor: "#e9e9e9" }}>
            <Typography color="secondary" variant={matches ? "h4" : "h5"} gutterBottom>
              <strong>List of Documents Required</strong>
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
              <TableContainer className={classes.container}>
              <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant={matches ? "h6" : "body1"} color="secondary">
                  Type of Residential sector
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant={matches ? "h6" : "body1"} color="secondary">
                  CFA (as percentage of bench mark cost or cost discovered through competitive process whichever is lower)
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
                    <TableBody>
                <TableRow hover>
                  <TableCell>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                  Residential sector (upto 3 KW capacity)
                   </Typography> 
                  </TableCell>
                  <TableCell>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                  40% of benchmark cost
                   </Typography> 
                    
                  </TableCell>
                </TableRow>

                <TableRow hover>
                  <TableCell>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                  Residential sector (above 3 KW capacity and upto 10 KW capacity)
                   </Typography> 
                  </TableCell>
                  <TableCell>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                  40% upto 3 KW + 20% for RTS system above 3 KW and upto 10 KW
                   </Typography> 
                    
                  </TableCell>
                </TableRow>

                <TableRow hover>
                  <TableCell>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                  Group Housing Societies/ Residential Welfare associations (GHS/ RWA) etc., for common facilities upto 500 KWP (@10 KWP per house), with the upper limit being inclusive of individual rooftop plants already installed by individual residents in that GHS/ RWA at the time of installation of RTS for common activity
                   </Typography> 
                  </TableCell>
                  <TableCell>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                  20%
                   </Typography> 
                    
                  </TableCell>
                </TableRow>
                </TableBody>

              </Table>
              </TableContainer>
              <br/>
              <Typography style={{ lineHeight: 1.2 }} color="secondary" variant={matches ? "body1" : "body2"} align="justify">
              MNRE has designated Bangalore Electricity Supply Company (BESCOM) as nodal point for implementation of the said scheme and has allotted 30MW for FY 2019-20.
              </Typography>
              <br/>
              <Typography style={{ lineHeight: 1.2 }} color="secondary" variant={matches ? "body1" : "body2"} align="justify">
              The Benchmark cost as per MNRE is as detailed below
              </Typography>
              <br/>

              <TableContainer className={classes.container}>
              <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant={matches ? "h6" : "body1"} color="secondary">
                  Capacity
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant={matches ? "h6" : "body1"} color="secondary">
                  Benchmark Cost (Rs./KWP)
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                <TableRow hover>
                  <TableCell>
                  Above 1 KW and upto 10 KW
                  </TableCell>
                  <TableCell>
                  54,000/-
                  </TableCell>
                </TableRow>

                <TableRow hover>
                  <TableCell>
                  Above 10 KW and upto 100 KW
                  </TableCell>
                  <TableCell>
                  48,000/-
                  </TableCell>
                </TableRow>

                <TableRow hover>
                  <TableCell>
                  Above 100 KW and upto 500 KW
                  </TableCell>
                  <TableCell>
                  45,000/-
                  </TableCell>
                </TableRow>
                </TableBody>

              </Table>
              </TableContainer>
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
                              <strong>Limits in kW:</strong>HT Consumers : upto 1 MWp
                            </li>
                            <li>LT Consumers (Single Phase) : upto 5 kWp</li>
                            <li>LT Consumers (Three Phase): Above 5 kWp to 50 kWp</li>
                            <li>
                              <strong>Conditions: </strong>= 150% of your Sanctioned Load.
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
                            <li>Annual Settlement</li>
                            <li>All electricity injected in the grid shall be paid at applicable tariff rates</li>
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
                            Exempted from wheeling, banking, cross subsidy charges if applicable
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
                              <strong>Limits in kW:</strong>HT Consumers : upto 1 MWp
                            </li>
                            <li>LT Consumers (Single Phase) : upto 5 kWp</li>
                            <li>LT Consumers (Three Phase): Above 5 kWp to 50 kWp</li>
                            <li>
                              <strong>Conditions: </strong>= 150% of your Sanctioned Load.
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
                          <li>Self ownership (CAPEX model)</li>
                            <li>Third party ownership (RESCO model)</li>
                           
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
                            Exempted from wheeling, banking, cross subsidy charges if applicable
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

export default Karnataka;
