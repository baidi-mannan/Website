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

const BengalTable = () => {
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
                  Search WBSEDCL West Bengal in Google and click on the website or click on the link:{" "}
                    <Link
                      className={classes.link}
                      href="https://www.wbsedcl.in/irj/go/km/docs/internet/new_website/Home.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong>https://www.wbsedcl.in/irj/go/km/docs/internet/new_website/Home.html</strong>
                    </Link>{" "}
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
                  Once you click on the link above, please select “Rooftop Solar Sources - Net Metering” from the “CONSUMER CORNER” on the homepage or click on the link:{" "}
                    <Link
                      className={classes.link}
                      href="https://www.wbsedcl.in/irj/go/km/docs/internet/new_website/Rooftop_Solar_Sources-NetMetering.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong>https://www.wbsedcl.in/irj/go/km/docs/internet/new_website/Rooftop_Solar_Sources-NetMetering.html</strong>
                    </Link>{" "}
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
                  Once you click on the link above, please click on “Apply Online” button in the page and you will be directed to the customer login page and fill out the required login details or click on the link:{" "}
                    <Link
                      className={classes.link}
                      href="https://www.wbsedcl.in/irj/go/km/docs/internet/new_website/Consumer_Login.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong>https://www.wbsedcl.in/irj/go/km/docs/internet/new_website/Consumer_Login.html</strong>
                    </Link>{" "}
                    Once you click on the link above, you can access the screen given in the corresponding “Page view section”.
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
                  In the login portal fill up and submit the ‘Form S1’ for application submission. The application receipt received will be ‘Form S2’<br/><br/>
                  For more reference and help in the application process, you can access the screen given in the corresponding “Page view section”.
                  </Typography>
                </TableCell>
                <TableCell>
                  <Link
                    className={classes.link}
                    href={`${tableImagesBaseUrl}4.pdf`}
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
                  After the application has been approved and passed further for inspection, please file the “Tech feasibility and eligibility report” in the “Form S3”.<br/><br/>
                  For more reference and help in the application process, you can access the screen given in the corresponding “Page view section”.
                  </Typography>
                </TableCell>
                <TableCell>
                  <Link
                    className={classes.link}
                    href={`${tableImagesBaseUrl}5.pdf`}
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
                  After the approval of form S3, please file the ‘Form S6, S7, S8’ for go ahead clearance, draft agreement and work completion report of the installation to finalize the billing mechanism from the electricity board.<br/><br/>
                  For more reference and help in the application process, you can access the screen given in the corresponding “Page view section”.
                  </Typography>
                </TableCell>
                <TableCell>
                  <Link
                    className={classes.link}
                    href={`${tableImagesBaseUrl}6.pdf`}
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

export default BengalTable;
