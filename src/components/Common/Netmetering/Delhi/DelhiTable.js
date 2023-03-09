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

const DelhiTable = () => {
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
                  <Typography color="secondary" variant={matches ? "body1" : "body2"}>
                    Search BSES in google or open link:{" "}
                    <Link
                      className={classes.link}
                      href="https://www.bsesdelhi.com/web/bses"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong>www.bsesdelhi.com/web/bses</strong>
                    </Link>{" "}
                    . Once you click on the link above, you can access the screen given in the corresponding “Page view
                    section”.
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
                  <Typography color="secondary" variant={matches ? "body1" : "body2"}>
                    Now click on any tabs – BSEB Rajdhani Power Limited or BSES Yamuna Power Limited. Or open the link:{" "}
                    <Link
                      className={classes.link}
                      href="https://www.bsesdelhi.com/web/brpl"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong>https://www.bsesdelhi.com/web/brpl</strong>
                    </Link>{" "}
                    Once you click on the link above, you can access the screen given in the corresponding “Page view
                    section”.
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
                  <Typography color="secondary" variant={matches ? "body1" : "body2"}>
                    Click on new Connection or open link :{" "}
                    <Link
                      className={classes.link}
                      href="https://www.bsesdelhi.com/web/brpl/new-connection"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong>https://www.bsesdelhi.com/web/brpl/new-connection</strong>
                    </Link>{" "}
                    Once you click on the link above, you can access the screen given in the corresponding “Page view
                    section”.
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
                  <Typography color="secondary" variant={matches ? "body1" : "body2"}>
                    Click on Solar Rooftop Net-Metering, it redirects to www.solarbses.com official website. You will
                    see two options here, express interest and Calculate savings. Just close Pop-up. Once you follow the
                    steps above, you can access the screen given in the corresponding “Page view section”.
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
                  <Typography color="secondary" variant={matches ? "body1" : "body2"}>
                    Upon scrolling down, you will get two other options - Rooftop Solar Calculator and Savings and
                    Payback Calculator. If you want to estimate cost, you can click on Savings and Payback Calculator.
                    It asks for your location, average per-unit electricity cost and other financial considerations.
                    Once you follow the steps above, you can access the screen given in the corresponding “Page view
                    section”.
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
                  <Typography color="secondary" variant={matches ? "body1" : "body2"}>
                    Click on Rooftop Solar Calculator, if you want to check the capacity of the rooftop solar plant.
                    Once you follow the steps above, you can access the screen given in the corresponding “Page view
                    section”.
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
                  <Typography color="secondary" variant={matches ? "body1" : "body2"}>
                    Click on “Apply” tab on the top blue panel. Check the “Net metering application” tab. Once you
                    follow the steps above, you can access the screen given in the corresponding “Page view section”.
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

              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>8.</TableCell>
                <TableCell>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"}>
                    Click on the “Login” option if you are an existing customer or “Register” if you are a new customer.
                    You will receive a consumer number and password on your registered email id. Once you follow the
                    steps above, you can access the screen given in the corresponding “Page view section”.
                  </Typography>
                </TableCell>
                <TableCell>
                  <Link
                    className={classes.link}
                    href={`${tableImagesBaseUrl}8.jpeg`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Click here</strong>
                  </Link>
                </TableCell>
              </TableRow>

              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>9.</TableCell>
                <TableCell>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"}>
                    Now login using your email and password. After logging in, you have to input information like CA No,
                    Sanctioned Load, and System Capacity Proposed, etc. Once you follow the steps above, you can access
                    the screen given in the corresponding “Page view section”.
                  </Typography>
                </TableCell>
                <TableCell>
                  <Link
                    className={classes.link}
                    href={`${tableImagesBaseUrl}9.jpeg`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Click here</strong>
                  </Link>
                </TableCell>
              </TableRow>

              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>10.</TableCell>
                <TableCell>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"}>
                    Go on File Upload. You have to upload documents like application form, capacity proof, ID proof,
                    electricity bill, NOC, etc. Download the forms online, fill in the relevant details and upload them.
                    These documents will be reviewed by BSES department. Once you follow the steps above, you can access
                    the screen given in the corresponding “Page view section”.
                  </Typography>
                </TableCell>
                <TableCell>
                  <Link
                    className={classes.link}
                    href={`${tableImagesBaseUrl}10.jpeg`}
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

export default DelhiTable;
