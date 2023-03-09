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

const PunjabTable = () => {
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
                  Search PEDA (Punjab Energy Development Agency) Punjab in Google and click on the website or click on the link:{" "}
                    <Link
                      className={classes.link}
                      href="https://www.peda.gov.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong>https://www.peda.gov.in/</strong>
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
                  Click on “Net Meter” Immediately or click on the link:{" "}
                    <Link
                      className={classes.link}
                      href="www.netmeteringpunjab.com/i-Want-to-apply.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong>www.netmeteringpunjab.com/i-Want-to-apply.html</strong>
                    </Link>{" "}
                    Once you click on the link above, you can access the screen given in the corresponding “Page view section”.
                  </Typography>
                </TableCell>
                <TableCell>
                  <Link
                    className={classes.link}
                    href={`${tableImagesBaseUrl}2.jpg`}
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
                  You will see the following application form, you have to fill this form. This form typically ks for details like your postal address and few of your personal data like name, mobile number, email address, etc.. Then you will receive APPLICATION NUMBER and PASSWORD from PEDA.
                   <br/><br/>
                   Once you follow the steps above, you can access the screen given in the corresponding “Page view section”.
                  </Typography>
                </TableCell>
                <TableCell>
                  <Link
                    className={classes.link}
                    href={`${tableImagesBaseUrl}3.jpg`}
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
                  Now, you need to Login on :{" "}
                    <Link
                      className={classes.link}
                      href="www.netmeteringpunjab.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong>www.netmeteringpunjab.com</strong>
                    </Link>{" "}
                    and submit the following documents for verification:
                  </Typography>
                  <br/>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                    <li>Latest Electricity bill</li>
                    <li>Aadhar card</li>
                    <li>Application no. </li>
                  </Typography>
                  <br/>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                  Your application status will show on:{" "}
                    <Link
                      className={classes.link}
                      href="www.netmeteringpunjab.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong>www.netmeteringpunjab.com.</strong>
                    </Link>{" "}
                    Just login on this website to check the latest updates.
                    <br/><br/>
                    Once you follow the steps above, you can access the screen given in the corresponding “Page view section”.
                  </Typography>
                </TableCell>
                <TableCell>
                  <Link
                    className={classes.link}
                    href={`${tableImagesBaseUrl}4.jpg`}
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
                  Lastly, you can view Application here
                  </Typography>
                </TableCell>
                <TableCell>
                  <Link
                    className={classes.link}
                    href={`${tableImagesBaseUrl}5.jpg`}
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

export default PunjabTable;
