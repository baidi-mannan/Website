import React from "react";
// import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Link, makeStyles, Paper, Typography, useMediaQuery } from "@material-ui/core";
import { tableImagesBaseUrl } from "./FileLinks";

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

const KarnatakaTable = () => {
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
                    DESCRIPTION
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant={matches ? "h6" : "body1"} color="secondary">
                    PAGE VIEW SECTION
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>1.</TableCell>
                <TableCell>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                  Search Bescom in Google and visit the website or click on the link:{" "}
                    <Link
                      className={classes.link}
                      href="https://bescom.karnataka.gov.in/english "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong>https://bescom.karnataka.gov.in/english </strong>
                    </Link>{" "}<br/><br/>
                    Once you click on the link above, you can access the screen given in the corresponding “Page view section”. 
                  </Typography>
                </TableCell>
                <TableCell>
                  <Link
                    className={classes.link}
                    href={`${tableImagesBaseUrl}1.png`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Click here</strong>
                  </Link>
                </TableCell>
              </TableRow>

              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>2.</TableCell>
                <TableCell>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                  Now, you have to click on Solar Rooftop Online Services link for applying Net Meter or click on the link:{" "}
                    <Link
                      className={classes.link}
                      href="https://bescom.karnataka.gov.in/new-page/Solar%20Roof%20Top%20Scheme/en"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong>https://bescom.karnataka.gov.in/new-page/Solar%20Roof%20Top%20Scheme/en</strong>
                    </Link>{" "}<br/><br/>
                    Once you click on the link above, you can access the screen given in the corresponding “Page view section”. 
                  </Typography>
                </TableCell>
                <TableCell>
                  <Link
                    className={classes.link}
                    href={`${tableImagesBaseUrl}2.png`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Click here</strong>
                  </Link>
                </TableCell>
              </TableRow>

              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>3.</TableCell>
                <TableCell>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                  When you click on Solar Roof Top Online Services, then you will see following screen where you will get the basic details of Online Application, Forms and Guidelines, etc. Now, Click on Forms and Guidelines link to know the basic guidelines. You can open one-by-one file and save it in your desktop and mobile.
                  <br/><br/>
                  Once you follow the steps above, you can access the screen given in the corresponding “Page view section”. 
                  </Typography>
                </TableCell>
                <TableCell>
                  <Link
                    className={classes.link}
                    href={`${tableImagesBaseUrl}3.png`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Click here</strong>
                  </Link>
                </TableCell>
              </TableRow>

              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>4.</TableCell>
                <TableCell>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                  After reading the basic guidelines, to click on Online Application. Immediately, the following screen will open. Here, you will see Apply Online, View Status and Office Login link. For rooftop consumers, you need to click on Apply Online for apply for a new Solar Rooftop Connection. Now, Enter your Account ID/Consumer ID to proceed. You will get Account ID/Consumer ID on your electricity bill.
                  <br/><br/>
                  Once you follow the steps above, you can access the screen given in the corresponding “Page view section”. 
                  </Typography>
                </TableCell>
                <TableCell>
                  <Link
                    className={classes.link}
                    href={`${tableImagesBaseUrl}4.png`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Click here</strong>
                  </Link>
                </TableCell>
              </TableRow>

              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>5.</TableCell>
                <TableCell>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                  The system will display automatically as per given Account Id. You need enter rooftop solar installation details, such as type of grid connectivity, solar proposed in kWp, and type of connection. After filling all information, Click on Send OTP. Thumb rule of Solar Proposed in kWp – Not More than Sanctioned Load. If you have already sanctioned load is 1 kW, your net meter will approved  1kW only, not more than 1 kW.
                  <br/><br/>
                  Once you follow the steps above, you can access the screen given in the corresponding “Page view section”. 
                  </Typography>
                </TableCell>
                <TableCell>
                  <Link
                    className={classes.link}
                    href={`${tableImagesBaseUrl}5.png`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Click here</strong>
                  </Link>
                </TableCell>
              </TableRow>

              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>6.</TableCell>
                <TableCell>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                  After payment of Rs. 1770 to submit application for net meter, you can view status of application. You need Application Number and Registered Mobile Number. Now, click on View Status.
                  <br/><br/>
                  Once you follow the steps above, you can access the screen given in the corresponding “Page view section”. 
                  </Typography>
                </TableCell>
                <TableCell>
                  <Link
                    className={classes.link}
                    href={`${tableImagesBaseUrl}6.png`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Click here</strong>
                  </Link>
                </TableCell>
              </TableRow>

              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>7.</TableCell>
                <TableCell>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                  After clicking on View Status, you will see the following screen. You can all information, such as Application Info, Feasibility, PPA, Work Execution and Commissioning.
                  <br/><br/>
                  Once you follow the steps above, you can access the screen given in the corresponding “Page view section”.  
                  </Typography>
                </TableCell>
                <TableCell>
                  <Link
                    className={classes.link}
                    href={`${tableImagesBaseUrl}7.png`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Click here</strong>
                  </Link>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default KarnatakaTable;
