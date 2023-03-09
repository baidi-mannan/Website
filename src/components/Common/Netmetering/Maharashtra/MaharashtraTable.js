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

const MaharashtraTable = () => {
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
                  Search in Google "mahadiscom", and Visit on the consumer portal of Maharashtra State Electricity Distribution Company Limited (Mahadiscom) website or click on the link:{" "}
                    <Link
                      className={classes.link}
                      href="https://www.mahadiscom.in/consumer/en/home/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong>www.mahadiscom.in/consumer/en/home/</strong>
                    </Link>{" "}
                    . Once you click on the link above, you can access the screen given in the corresponding “Page view section”.
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
                  After clicking Consumer Portal, you will redirect on Consumer Access Portal. Under the “Quick Access” tab, go to Rooftop RE Applications &#62; Apply for RE Rooftop link.{" "}
                    {" "}
                    Once you follow the steps above, you can access the screen given in the corresponding “Page view section”.
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
                  Fill up the application form. {" "}
                  </Typography>
                  <br/>
                 {/* Fill out application form */}
                  <Typography color="secondary" variant={matches ? "body1" : "body2"}>
                    <strong>Steps to fill out the application form:{" "}</strong>
                  </Typography>
                  <br/>
                  <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>
                  <Typography variant="body1" color="secondary">
                    SR.NO.
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1" color="secondary">
                    DESCRIPTION
                  </Typography>
                </TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>1.</TableCell>
                <TableCell>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                  Correct Email address and Mobile number is mandatory for OTP. If you want to modify, please Click here.{" "}
                  </Typography>
                </TableCell>
                </TableRow>

                <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>2.</TableCell>
                <TableCell>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                  Kindly fill complete and correct information in relevant column.{" "}
                  </Typography>
                </TableCell>
                </TableRow>

                <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>3.</TableCell>
                <TableCell>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                  Applicant will be solely responsible for incomplete or incorrect information.{" "}
                  </Typography>
                </TableCell>
                </TableRow>

                <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>4.</TableCell>
                <TableCell>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                  Applicant is requested to note the request id for future tracking of the application.{" "}
                  </Typography>
                </TableCell>
                </TableRow>

                <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>5.</TableCell>
                <TableCell>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                  Please provide the correct consumer number, so that your request can be assigned to proper MSEDCL field office.{" "}
                  </Typography>
                </TableCell>
                </TableRow>

                <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>6.</TableCell>
                <TableCell>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                  System will check for outstanding arrears on connection if any. Your application will not be accepted or liable for cancellation at any stage if the connection is default in Arrears.{" "}
                  </Typography>
                </TableCell>
                </TableRow>

                <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>7.</TableCell>
                <TableCell>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                  Application Processing fees (Non Refundable){" "}
                  </Typography>
                  <br/>
                  <Typography color="secondary" variant="body1" align="justify">
                    <li>
                    Low Tension Consumer Rs. 500 for consumer having Sanctioned Load or Contract Demand upto 20 kW and Rs 100 thereafter for every 20 kW or part thereof.
                    </li>
                    <br/>
                    <li>
                    High Tension Consumer Rs. 5000/-
                    </li>
                  </Typography>
                </TableCell>
                </TableRow>

                <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>8.</TableCell>
                <TableCell>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                  Cost of Net Meter, Generation meter (Source wise) and all costs related to the setting up of the Renewable Energy Generating System shall be borne by consumer.{" "}
                  </Typography>
                </TableCell>
                </TableRow>

                <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>9.</TableCell>
                <TableCell>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                  Application will be submitted only after the payment of processing fees. Till then application can be saved.{" "}
                  </Typography>
                </TableCell>
                </TableRow>

                <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>10.</TableCell>
                <TableCell>
                  <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                  Application will be automatically cancelled if the Rooftop Renewable Energy Generating system is not commissioned within 6 months from the date of Sanction of application.{" "}
                  </Typography>
                </TableCell>
                </TableRow>
                </TableBody>
                </Table>
                </TableCell>
                 {/* End of step to fill form */}

              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default MaharashtraTable;
