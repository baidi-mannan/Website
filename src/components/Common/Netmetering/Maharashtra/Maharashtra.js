import React, { useState } from "react";
import { Grid, Typography, makeStyles, Link, IconButton, useMediaQuery } from "@material-ui/core";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import { pdfFilesLink, coverImage } from "./FileLinks";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import MaharashtraTable from "./MaharashtraTable";

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

const Maharashtra = () => {
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
                <strong>MAHARASHTRA</strong>
              </Typography>
              <br />
              <Typography color="secondary" variant="body1" style={{textAlign:"justify"}}>
              Maharashtra is located in the western part of India with third largest state area in Maharashtra. The installed solar capacity of Maharashtra is 40.9 GW commissioned solar energy in 2021. Of this, 44.70MW was commissioned in the Financial year 2016/17. 
              </Typography>
              <br />
              <Typography color="secondary" variant="body1" style={{textAlign:"justify"}}>
              Maharashtra approved its solar energy policy in January 2016, encouraging both public and private entities to go solar. In addition to this, the Civic Development authorities were asked to ensure that construction permission is only given to those buildings, government colonies, etc who pledge to install solar at rooftop. The Maharashtra State Cabinet has issued its ‘Unconventional Energy Generation Policy’ to promote non-conventional source-based energy generation. The policy is divided into two parts. In the first part of the policy, the state aims to implement 17,360 MW of transmission system-connected renewable power projects by 2025. This includes 12,930 MW of solar power projects aiming for 10 GW of standalone solar power projects, 2 GW of grid-connected rooftop solar projects, 500 MW of solar-based water supply projects, 250 MW of solar generation projects for farmers, among others. A transmission-free project refers to power projects that are not connected to the grid. These include 100,000 agricultural solar pumps, 52,000 kV of rooftop solar systems, 2,000 solar water supply stations, the electrification of 10,000 rural homes, micro grid projects for 20 homes, 55,000 square feet of solar water/solar cooking systems, and 800 solar cold-storage projects.,{" "}
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
                <strong>THE PARTIES ELIGIBLE FOR NET METERING POLICY IN MAHARASHTRA ARE:</strong>
              </Typography>
              <br />
              <br />
              <Typography color="secondary" variant="body1" style={{textAlign:"justify"}}>
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
                <br />
                <Typography color="secondary" variant="body1" style={{textAlign:"justify"}}>
                As much as 100% subsidy has been offered to government and semi-government offices and 15% to the private offices to setup rooftop solar. For solar power projects, the minimum capacity shall be 1 MW (outside solar park). The approval for grid connectivity will be given in accordance with the following guidelines -
                </Typography>
                <br/>
                <Typography color="secondary" variant="body1" style={{textAlign:"justify"}}>
                  <li>
                  It will be necessary for the project developer to submit application for grid connectivity recommendation in the prescribed format to MEDA. The application should include, along with other details, details about the project capacity, project site location, details of nearest MSEDCL/MSETCL sub-station etc.
                  </li>
                  <br />
                  <li>
                  There will be a preliminary scrutiny of the application by MEDA office, subsequent to which the developer and MSETCL/MSEDCL will be informed for the purpose of technical feasibility report. MSETCL/MSEDCL shall prepare the technical feasibility report and furnish its copy to MEDA.
                  </li>
                  <br />
                  <li>
                  On receipt of the technical feasibility report, MEDA will verify its conformity with the solar power generation area, and make recommendation to MSETCL/MSEDCL for grid connectivity.
                  </li>
                  <br/>
                  <li>
                  The application for grid connectivity by the project developer will be scrutinized by the Committee for grid connectivity constituted by MSETCL in which thorough consultation will be done.
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
            <MaharashtraTable />
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
                    Aadhar Card
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckBoxIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant={matches ? "h5" : "h6"} color="secondary">
                    Latest Electricity Bill
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckBoxIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant={matches ? "h5" : "h6"} color="secondary">
                    Photo
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckBoxIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant={matches ? "h5" : "h6"} color="secondary">
                    Pan Card
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckBoxIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant={matches ? "h5" : "h6"} color="secondary">
                    Net Meter Application Form
                  </Typography>
                </ListItemText>
              </ListItem>

              <ListItem>
              <ListItemIcon>
                  <CheckBoxIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant={matches ? "h5" : "h6"} color="secondary" align="justify">
                    <ol type="A">
                      <li>If Renewable energy (RE) Generating system is self owned</li>
                      <br/>
                      <ol type="i">
                        <li>Technical details of Renewable Energy Generating Station, Inverter and other equipment of the System proposed to be installed. (Mandatory)</li>
                        <br/>
                        <li>General Power of Attorney in favour of signatory in case of Partnership Firms; certified true copy of the Resolution, authorizing the signatory to deal with the concerned Distribution Licensee, passed by the Board of Directors in case of Companies (as applicable).</li>
                      </ol>
                      <br/>

                      <li>If RE Generating system is not self owned: In addition to above in (a), Third Party Leasing Agreement. (Mandatory)</li>
                      <br/>

                      <li>
                      If RE System Capacity is 200 KW and above: In addition to above in (a), Electrical Inspector Permission (Mandatory)
                      </li>
                    </ol>
                  </Typography>
                  <br/>
                  <Typography variant="h5" color="secondary" align="justify">
                  When we apply Net-Meter for grid connected solar system it will take approx. 30 days to 90 days depending on power distribution companies.
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
              The subsidy available on the installation of grid-connected solar rooftop power plants is 30% of the benchmark cost. Government institutions including PSUs shall not be eligible for the subsidy. Instead, they will be given achievement-linked incentives/awards. All residential and institutional buildings such as schools, health institutions, etc. and the social sector can avail CFA. As much as 100% subsidy has been offered to government and semi-government offices and 15% to the private offices to setup rooftop solar.
              </Typography>
              <br/>
              <Typography style={{ lineHeight: 1.2 }} color="secondary" align="justify" variant={matches ? "h6" : "body1"}>
              Required documentation is needed to submit to MEDA online by a developer on behalf of the eligible customer. Following the provisional approval, the completion report needs to be submitted. After that site visit and site inspection is done by the officials. After all these formalities, the subsidy amount is directly deposited to the customer’s account within 2-3 months of issuing the grant letter.
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
                              <strong>Size: </strong>Up to 1 MWp; with variation of 5%.
                            </li>
                            <li>
                              <strong>Voltage level: </strong>230 / 240V : upto 8 kWp max.
                            </li>
                            <li>
                              <strong>400/415V (Three phase): </strong> Above 8 to 150 kWp max. in Metropolitian Area and 8 to 80 kWp in Other Areas
                            </li>
                            <li>
                              <strong>11 kV and Above Level: </strong> Above 150 to 1000kWp max. in Metropolitian Area and 80 to 1000 kWp in Other Areas
                            </li>
                            <li>
                              <strong>Conditions: </strong> 100% of your Sanctioned Load
                            </li>
                            <li>
                            Cumulative capacity of all solar systems installed in your area shall not exceed 40% of distribution transformer capacity2 in your area. The solar PV installation beyond 40% of DTC rated capacity may be allowed upon consideration of detailed load study on particular DTC.
                            </li>
                            <li>
                            The HT consumers (11 KV and above) may install and connect Rooftop Solar PV systems at their LT bus bar System provided that, in such cases, the Net Meter shall be installed on the HT side of the Transformer
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
                            <li>Annual (April to March)</li>
                            <li>Any unadjusted electricity credits shall be paid as per the rates notified by MERC.</li>
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
                            MSEDCL shall, within 7 working days of the completion of the feasibility study, convey its approval for installing the Roof-top Solar PV System. The approval shall be valid for a period of 6 months from the date of approval, or such extended period as may be agreed to by the MSEDCL.
                            </li>
                            <li>
                            MSEDCL shall complete the testing and commissioning of the System within 10 working days from receipt of testing and commissioning request, and shall install the Net Metering equipment and synchronize the Roof-top Solar PV System within 10 working days thereafter.
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
                          <Typography color="secondary" variant={matches ? "h6" : "body1"} align="justify">
                            <li>
                              <strong>Size: </strong>Up to 1 MWp; with variation of 5%.
                            </li>
                            <li>
                              <strong>Voltage level: </strong>230 / 240V : upto 8 kWp max.
                            </li>
                            <li>
                              <strong>400/415V (Three phase): </strong> Above 8 to 150 kWp max. in Metropolitian Area and 8 to 80 kWp in Other Areas
                            </li>
                            <li>
                              <strong>11 kV and Above Level: </strong> Above 150 to 1000kWp max. in Metropolitian Area and 80 to 1000 kWp in Other Areas
                            </li>
                            <li>
                              <strong>Conditions: </strong> 100% of your Sanctioned Load
                            </li>
                            <li>
                            Cumulative capacity of all solar systems installed in your area shall not exceed 40% of distribution transformer capacity2 in your area. The solar PV installation beyond 40% of DTC rated capacity may be allowed upon consideration of detailed load study on particular DTC.
                            </li>
                            <li>
                            The HT consumers (11 KV and above) may install and connect Rooftop Solar PV systems at their LT bus bar System provided that, in such cases, the Net Meter shall be installed on the HT side of the Transformer
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
                            <li>Annual (April to March)</li>
                            <li>Any unadjusted electricity credits shall be paid as per the rates notified by MERC.</li>
                           
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
                            MSEDCL shall, within 7 working days of the completion of the feasibility study, convey its approval for installing the Roof-top Solar PV System. The approval shall be valid for a period of 6 months from the date of approval, or such extended period as may be agreed to by the MSEDCL.
                            </li>
                            <li>
                            MSEDCL shall complete the testing and commissioning of the System within 10 working days from receipt of testing and commissioning request, and shall install the Net Metering equipment and synchronise the Roof-top Solar PV System within 10 working days thereafter
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

export default Maharashtra;
