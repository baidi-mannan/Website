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

const HaryanaTable = () => {
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
                  Open Google.com, type “dakshin haryana bijli vitran nigam” (DHBVN) in Google and visit the website. <br/><br/>Or<br/><br/>Click on the link:{" "}
                    <Link
                      className={classes.link}
                      href="https://dhbvn.org.in/web/portal/home "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong>https://dhbvn.org.in/web/portal/home </strong>
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
                  On DHBVN website, click on Solar Connection or click on the link: {" "}
                    <Link
                      className={classes.link}
                      href="https://esolarconn.dhbvn.org.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong>https://esolarconn.dhbvn.org.in/</strong>
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
                  Now click on Apply. You will see the Application Form. Now you will need documents like Electricity Bill, Aadhar Card, Photographs and Signature of Applicant Name. In Haryana state, the thumb rule is that the name of applicant on electricity bill and property registry should be same. Otherwise, Application may be disapproved.
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
                  Fill in all your details, upload the necessary documents and before you click on “Apply”, kindly make sure all the entered details are correct and up to date. When you will click on the Apply button, your application will be submitted and you will receive Application Number, such as F13-719-7019-9
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
                  Your application form has been submitted. Now you have to pay Rs. 1000 online. You will be automatically redirected on the ePayment website of DHBVN: epayment.dhbvn.org.in. Here, you will see your registration number, consumer id, subdivision number, amount and various payment methods. Just click on the “Pay Now” button.
                  
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

              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>6.</TableCell>
                <TableCell>
                <Typography color="secondary" variant={matches ? "body1" : "body2"} align="justify">
                After payment process completion, now, click on “Go to Home”. You will see the following screen. You can check your application status here. It takes some time to update your status. After you have applied it will show “Current Status of Application: Pending Acceptance of Application”.
                  </Typography>
                </TableCell>
                <TableCell>
                  <Link
                    className={classes.link}
                    href={`${tableImagesBaseUrl}6.jpg`}
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

export default HaryanaTable;
