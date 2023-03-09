import React from "react";
// import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles, Paper, Typography, useMediaQuery } from "@material-ui/core";
//import { tableImagesBaseUrl } from "./FileLinks";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
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
  link: {
    color: "#3f3f3f",
  },
}));

const GujaratTable = () => {
  const matches = useMediaQuery("(min-width:600px)");
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant={matches ? "h6" : "body1"} color="secondary">
                    SR.NO.
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant={matches ? "h6" : "body1"} color="secondary">
                    Activity
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant={matches ? "h6" : "body1"} color="secondary">
                   Sub-Activity
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant={matches ? "h6" : "body1"} color="secondary">
                   Duration in Day(s)
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>1.</TableCell>
                <TableCell>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                  Registration at GEDA{" "}
                  </Typography>
                </TableCell>
                <TableCell>
                <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                GEDA shall issue Registration Certificate
                  </Typography>
                </TableCell>
                <TableCell>
                <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                5 days from receipt of duty completed application
                  </Typography>
                </TableCell>
              </TableRow>

              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>2.</TableCell>
                <TableCell>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                  Approval from Chief Electrical Inspector
                  </Typography>
                </TableCell>
                <TableCell>
                <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                CEI shall approve Single Line Diagram, Earthing Diagram and Wiring Diagram
                  </Typography>
                </TableCell>
                <TableCell>
                <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                10 days from receipt of duty completed application
                  </Typography>
                </TableCell>
              </TableRow>

              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>3.</TableCell>
                <TableCell>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"}>
                  Application Distribution Licensee {" "}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                  Applicant shall submit application in prescribed format along with following compliance and documents to Distribution Licensee
                  </Typography>
                  <br/>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                  <li>Capacity of Solar Rooftop to be installed (Maximum shall be 50% of the Consumer’s sanctioned load)</li>
                  <li>Copy of registration at GEDA</li>
                  <li>Documents related to Legal possession of roof-top/ NOC of co-owners, in case of joint ownership.</li>
                  <li>Approval of Chief Electrical Inspector (CEI) for Single Line Diagram, Earthing Diagram and Wiring Diagram.</li>
                  </Typography>
                </TableCell>
              </TableRow>

              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>4.</TableCell>
                <TableCell>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                  Technical Feasibility Report (TFR)
                  </Typography>
                </TableCell>
                <TableCell>
                <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                On Registration with Distribution Licensee, Letter to concerned Circle/ Division for TFR and informing applicant regarding specifications of CTPT, meter.
                  </Typography>
                </TableCell>
                <TableCell>
                <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                5 days from receipt of duly completed application
                  </Typography>
                </TableCell>
              </TableRow>

              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>5.</TableCell>
                <TableCell>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                  TFR from field
                  </Typography>
                </TableCell>
                <TableCell>
                <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                TFR to include following
                  </Typography>
                  
                  <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                    <ol type="a">
                      <li>Name of Consumer.</li><br/>
                      <li>Load details of the building where Office roof-top is to be installed as under: Name of Division, Sub-Division, Consumer Name, Consumer No., Address, Tariff, Contract Demand/ Load, Connected Load</li><br/>
                      <li>Name of 11KV feeder, Transformer capacity, Solar Rooftop capacity already  connected as well as approved/sanctioned On this transformer including this proposed Solar Rooftop capacity whether total Rooftop solar capacity is within the rated capacity of transformer.</li><br/>
                      <li>Maximum demand  recorded during last one year.</li><br/>
                      <li>No dues certificate.</li><br/>
                      <li>No legal disputes Pending certificate.</li><br/>
                      <li>Detailed estimate to be recovered from applicant for strengthening of Distribution Licensee’s system for the work to be carried out for providing connectivity and evacuation facility of surplus power to be injected by the applicant. <br/><br/>
                      <strong>Note:</strong> Solar installation to  be restricted up to T/C capacity, and if required, it is to be strengthened at the cost of Solar Rooftop Generator. </li>
                    </ol>
                  </Typography>
                  <br/>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                      
                  </Typography>
                </TableCell>
                <TableCell>
                <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                10 days from letter of head office
                  </Typography>
                </TableCell>
              </TableRow>

              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>6.</TableCell>
                <TableCell>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                  Post TFR
                  </Typography>
                </TableCell>
                <TableCell>
                <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                On receipt of TFR from field, Head Office shall issue letter to applicant regarding
                  </Typography>
                  <br/>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                  In principle consent for connectivity, payment of connectivity charges and execution of connectivity agreement within 15 days.
                  <br/><br/>
                  OR<br/><br/>
                  Issuing estimate to applicant for system strengthening (if required) to be paid within 30 days, payment of connectivity charges and execution of connectivity agreement.
                  </Typography>
                </TableCell>
                <TableCell>
                <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                5 days from receipt of TFR from field office
                  </Typography>
                </TableCell>
              </TableRow>

              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>7.</TableCell>
                <TableCell>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                  Signing of connectivity agreement and issuance of letter to applicant for completion of project work
                  </Typography>
                </TableCell>
                <TableCell>
                <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                <strong>Case 1 (No system strengthening required)</strong>
                  </Typography>
                  <br/>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                  On payment of Connectivity Charges and execution of  connectivity Agreement within 15 days of consent. Letter of applicant to complete the project work within 6 months.
                  <br/><br/>
                  <strong>Case 2 (If system Strengthening required)</strong><br/><br/>
                  On payment of Connectivity Charges and execution of Connectivity Agreement within 30 days along with payment of estimate. Letter to applicant to complete the project work within 6 months.
                  </Typography>
                </TableCell>
                <TableCell>
                <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                5 days from execution of agreement. 
                  </Typography>
                </TableCell>
              </TableRow>

              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>8.</TableCell>
                <TableCell>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                  System strengthening by distribution licensee
                  </Typography>
                </TableCell>
                <TableCell>
                <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                Distribution Licensee to complete the work of system strengthening on payment of estimates.
                  </Typography>
                </TableCell>
                <TableCell>
                <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                45 days in parallel to project installation
                  </Typography>
                </TableCell>
              </TableRow>

              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>9.</TableCell>
                <TableCell>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                  Notice to applicant for commissioning
                  </Typography>
                </TableCell>
                <TableCell>
                <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                Issuance of two months notice to applicant for commissioning of the project on expiry of 6 months project completion period.
                  </Typography>
                </TableCell>
                <TableCell>
                <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                Within 5 days on expiry of 6 months
                  </Typography>
                </TableCell>
              </TableRow>

              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>10.</TableCell>
                <TableCell>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                  In case of non-completion by applicant
                  </Typography>
                </TableCell>
                <TableCell>
                <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                If no intimation received from applicant on expiry of 2 months notice period, application shall be cancelled informing the applicant within 30 days forfeiting all charges paid for Solar Rooftop Project.
                  </Typography>
                </TableCell>
                <TableCell>
                <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                Within 5 days on expiry Of 2 months
                  </Typography>
                </TableCell>
              </TableRow>

              
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>11.</TableCell>
                <TableCell>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                  On completion of work by applicantss
                  </Typography>
                </TableCell>
                <TableCell>
                <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                Intimation to applicant to submit following  documents within 5 days: (if not submitted along with intimation of commissioning by applicant)
                  </Typography>
                  
                  <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                    <ol type="1">
                      <li>Ownership of Solar PV system</li><br/>
                      <li>. Installation charging approval of Chief Electrical Inspector (CEI)</li><br/>
                      <li>NMeter/ CTPT testing certificate from High-tech lab and ERDA.</li><br/>
                      <li>All equipment should comply with IEC standards. Applicant to submit relevant IEC certificate/ test reports for all equipments, i.e. For modules/ SPV/ inverters/ cables/ junction box/ Transformer / RMU/ CTPT/ meter etc.</li><br/>
                      <li>Installation of proper protection system (inverter shall have anti islanding feature) along with second line of protection such as no volt relay, applicant has to pay connectivity charges and execute connectivity Agreement with Distribution Licensee</li><br/>
                      <strong>Note:</strong>If applicant is not submitting above documents within 5 days, application shall be cancelled forfeiting all charges paid for Solar Rooftop Project.
                    </ol>
                  </Typography>
                  <br/>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                      
                  </Typography>
                </TableCell>
                <TableCell>
                <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                10 days from letter of head office
                  </Typography>
                </TableCell>
              </TableRow>

              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>12.</TableCell>
                <TableCell>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                  Intimation To Field Office
                  </Typography>
                </TableCell>
                <TableCell>
                <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                On receipt of documents from the applicant, intimation to Field  office/ Sub-division for installation of meter (Solar meter to record total generation and bidirectional/ABT meter for net metering).
                  </Typography>
                </TableCell>
                <TableCell>
                <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                5 days from receipt of documents from the applicant
                  </Typography>
                </TableCell>
              </TableRow>

              
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>13.</TableCell>
                <TableCell>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                  Report from field/sub division
                  </Typography>
                </TableCell>
                <TableCell>
                <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                Installation of meter (Solar meter to record total generation and bidirectional/ABT meter for net metering) and intimate to applicant and report to HO
                  </Typography>
                </TableCell>
                <TableCell>
                <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                7 days from receipt of letter from HO
                  </Typography>
                </TableCell>
              </TableRow>

              
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>14.</TableCell>
                <TableCell>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                  Intimation to GEDA
                  </Typography>
                </TableCell>
                <TableCell>
                <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                Distribution Licensee shall intimate to GEDA for issuing commissioning certificate
                  </Typography>
                </TableCell>
                <TableCell>
                <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                5 days from receipt of letter from Distribution Licensee
                  </Typography>
                </TableCell>
              </TableRow>

              
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>15.</TableCell>
                <TableCell>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                  Issuance Of Commissioning Certificate from GEDA
                  </Typography>
                </TableCell>
                <TableCell>
                <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                GEDA shall visit the site in consultation with  distribution Licensee and applicant and issue Commissioning Certificate
                  </Typography>
                </TableCell>
                <TableCell>
                <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                5 days from the receipt Of intimation from applicant
                  </Typography>
                </TableCell>
              </TableRow>

            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default GujaratTable;
