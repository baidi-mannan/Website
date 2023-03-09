import React, { useState } from "react";
import { Grid, Typography, makeStyles, Link, IconButton, useMediaQuery } from "@material-ui/core";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import { pdfFilesLink, coverImage } from "./FileLinks";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import DelhiTable from "./DelhiTable";

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

const Delhi = () => {
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
                <strong>DELHI</strong>
              </Typography>
              <br />
              <Typography color="secondary" variant="body1">
                Delhi is blessed with almost 300 sunny days and the rooftop space available for solar panels is
                estimated to be 31 sq. km, giving Delhi a solar energy potential of 2500 MWp (annual Generation approx.
                3,500 million kWh). Of this potential, 26% is in the government/public sector, 25% in the commercial/
                industrial sector, and 49% in the domestic sector.
              </Typography>
              <br />
              <Typography color="secondary" variant="body1">
                Delhi aims to generate 2000 MW of solar energy by 2025. The Renewable Energy Service Company model or
                RESCO mode as it is popularly known as is expected to generate an aggregated demand of 40 MW. The
                aggregation program is expected to benefit consumers like residential, schools, hospitals, and municipal
                segments. Given Delhi’s land-locked position, the high cost and paucity of barren land within its
                borders, and low potential for wind or hydro power, Delhi has to focus on rooftop solar as its primary
                source of renewable energy. In 2014, the peak power demand in Delhi was almost 6000 MW and the total
                annual consumption in 2014-15 was 27,266 million kWh. Power demand can vary considerably across a
                24-hour window, especially in summers owing to the increasing use of air conditioning.,{" "}
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
                <strong>THE PARTIES ELIGIBLE FOR NET METERING POLICY IN DELHI ARE:</strong>
              </Typography>
              <br />
              <br />
              <Typography color="secondary" variant="body1">
                <li>
                  This policy applies to all electricity consumers under all electricity tariffs in Delhi and to all
                  entities that set up and operate power plants in Delhi.
                </li>
                <br />
                <li>
                  The State shall encourage the installation of solar plants with Net Metering on all residential
                  buildings, colonies, townships, housing societies, private bungalows, farm houses, etc.
                </li>
                <br />
                <li>
                  All urban development and housing agencies (private and public, including DDA and PWD), the Municipal
                  Corporations of Delhi, banks and RWAs shall facilitate the deployment of solar project installations.
                  Commercial and Industrial buildings with available rooftop areas are also included but aren’t limited
                  to schools, hospitals, nursing homes, malls, hotels, offices, banquet halls, clubs, restaurants,
                  industries, warehouses, companies, parking lots, and commercial or tourism complexes.
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
                <br />
                <Typography color="secondary" variant="body1">
                  <li>
                    The height of the module structure carrying solar panels shall not be counted towards the total
                    height of the building as permitted by building bylaws, except near airports where building
                    regulations issued by the Airports Authority of India take precedence.
                  </li>
                  <br />
                  <li>
                    No approval will be required from concerned Municipal Corporation or other Urban Development Bodies
                    like the DDA for putting up solar plants including any additional system for monitoring the
                    performance of solar plant in existing or new buildings.
                  </li>
                  <br />
                  <li>
                    The support structure on which rooftop solar panels are installed shall be a temporary structure
                    built in accordance with local building codes.
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
            <DelhiTable />
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
                    Copy of Adhar Card
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
              <Typography style={{ lineHeight: 1.2 }} color="secondary" variant={matches ? "h6" : "body1"}>
                The applicable subsidy for various capacities of rooftop solar power systems installed at individual
                residential households are:
              </Typography>
              <Typography style={{ lineHeight: 1.2 }} color="secondary" variant={matches ? "h6" : "body1"}>
                <li>Residential sector upto 3 kWA: 40% of the benchmark cost</li>
                <li>Residential sector from 3kW -10 kWA: 20% for RTS system</li>
                <li>Group Housing Societies with consumption more than 500 KWA: 20%</li>
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
                          <Typography variant={matches ? "h6" : "body1"} color="secondary">
                            <li>
                              <strong>Size: </strong>Min 1 kWp
                            </li>
                            <li>Max 1 MWp</li>
                            <li>
                              <strong>Voltage level: </strong>230V(Single phase) or 415 V (Three phase), upto 10 kWp
                              max.
                            </li>
                            <li>
                              <strong>415V (Three phase): </strong> 10-100 kWp max.
                            </li>
                            <li>
                              <strong>HT/EHT Level: </strong> 100Wp max.
                            </li>
                            <li>
                              <strong>Conditions: </strong> Cumulative capacity of all solar systems installed in your
                              area shall not exceed 15% of Local Distribution transformer capacity in your area.
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
                            <li>Annual settlement</li>
                            <li>Any net electricity injected in the grid shall be paid at rates decided by DERC</li>
                            <li>
                              Any excess generation (above 90 per cent) at the end of the financial year would be
                              considered as free energy and not offset against the consumers consumption. There shall be
                              no carry forward to next financial year.
                            </li>
                          </Typography>
                        </div>
                      </div>
                      {/* Others */}
                      <div className={classes.innerContent}>
                        <Typography style={{ color: "white" }} variant={matches ? "h4" : "h5"} gutterBottom>
                          OTHERS
                        </Typography>

                        <div>
                          <Typography color="secondary" variant={matches ? "h6" : "body1"}>
                            <li>
                              Exempted from wheeling, banking, transmission charges & electricity tax if applicable
                            </li>
                            <li>
                              Residential consumers opting to implement solar plants to sell power to the grid shall be
                              exempted from the conversion charges requirement of house tax to commercial tax.
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
                          CAPACITY OF SOLAR SYSTEM
                        </Typography>

                        <div>
                          <Typography color="secondary" variant={matches ? "h6" : "body1"}>
                            <li>
                              <strong>Size: </strong>Min 1 kWp
                            </li>
                            <li>Max 1 MWp</li>
                            <li>
                              <strong>Voltage level: </strong>230V(Single phase) or 415 V (Three phase), upto 10 kWp
                              max.
                            </li>
                            <li>
                              <strong>415V (Three phase): </strong> 10-100 kWp max.
                            </li>
                            <li>
                              <strong>HT/EHT Level: </strong> 100Wp max.
                            </li>
                            <li>
                              <strong>Conditions: </strong> Cumulative capacity of all solar systems installed in your
                              area shall not exceed 15% of Local Distribution transformer capacity in your area.
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
                            <li>Annual settlement</li>
                            <li>Any net electricity injected in the grid shall be paid at rates decided by DERC</li>
                            <li>
                              Any excess generation (above 90 per cent) at the end of the financial year would be
                              considered as free energy and not offset against the consumers consumption. There shall be
                              no carry forward to next financial year.
                            </li>
                          </Typography>
                        </div>
                      </div>
                      {/* Others */}
                      <div className={classes.innerContent}>
                        <Typography gutterBottom style={{ color: "white" }} variant={matches ? "h4" : "h5"}>
                          OTHERS
                        </Typography>

                        <div>
                          <Typography color="secondary" variant={matches ? "h6" : "body1"}>
                            <li>
                              Exempted from wheeling, banking, transmission charges & electricity tax if applicable
                            </li>
                            <li>
                              Solar systems up to 200 KWp are exempted from certification by the Electrical inspector.
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

export default Delhi;
