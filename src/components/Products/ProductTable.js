import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    boxShadow: "none",
    borderRadius: "0px",
    border: "2px solid #bfbfbf",
  },
  container: {
    maxHeight: 220,
    "& .MuiTableCell-root": {
      padding: "5px 10px",
    },
    "& .MuiTableHead-root .MuiTableCell-root": {
      background: "#e9e9e9",
    },
  },
}));

const ProductTable = ({ product }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h6" component="p" style={{ color: "#3f3f3f" }}>
                  Product Details:
                </Typography>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {product.materialType && (
              <TableRow>
                <TableCell component="th" scope="row">
                  <Typography variant="body1" component="p" color="secondary">
                    <strong>Material</strong>
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="body1" component="p" color="secondary">
                    {product.materialType}
                  </Typography>
                </TableCell>
              </TableRow>
            )}
            {product.size && (
              <TableRow>
                <TableCell component="th" scope="row">
                  <Typography variant="body1" component="p" color="secondary">
                    <strong>Size</strong>
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="body1" component="p" color="secondary">
                    {product.size}
                  </Typography>
                </TableCell>
              </TableRow>
            )}
            {product.ratedPower && (
              <TableRow>
                <TableCell component="th" scope="row">
                  <Typography variant="body1" component="p" color="secondary">
                    <strong>Rated power</strong>
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="body1" component="p" color="secondary">
                    {product.ratedPower}
                  </Typography>
                </TableCell>
              </TableRow>
            )}
            {product.numberOfCells && (
              <TableRow>
                <TableCell component="th" scope="row">
                  <Typography variant="body1" component="p" color="secondary">
                    <strong>Number of cells</strong>
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="body1" component="p" color="secondary">
                    {product.numberOfCells}
                  </Typography>
                </TableCell>
              </TableRow>
            )}
            {product.efficiency && (
              <TableRow>
                <TableCell component="th" scope="row">
                  <Typography variant="body1" component="p" color="secondary">
                    <strong> Efficiency</strong>
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="body1" component="p" color="secondary">
                    {product.efficiency}
                  </Typography>
                </TableCell>
              </TableRow>
            )}
            {product.warranty && (
              <TableRow>
                <TableCell component="th" scope="row">
                  <Typography variant="body1" component="p" color="secondary">
                    <strong> Warranty</strong>
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="body1" component="p" color="secondary">
                    {product.warranty}
                  </Typography>
                </TableCell>
              </TableRow>
            )}
            {product.openCircuitVoltage && (
              <TableRow>
                <TableCell component="th" scope="row">
                  <Typography variant="body1" component="p" color="secondary">
                    <strong>Open circuit voltage</strong>
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="body1" component="p" color="secondary">
                    {product.openCircuitVoltage}
                  </Typography>
                </TableCell>
              </TableRow>
            )}
            {product.shortCircuitCurrent && (
              <TableRow>
                <TableCell component="th" scope="row">
                  <Typography variant="body1" component="p" color="secondary">
                    <strong>Short circuit current</strong>
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="body1" component="p" color="secondary">
                    {product.shortCircuitCurrent}
                  </Typography>
                </TableCell>
              </TableRow>
            )}
            {product.moduleVoltage && (
              <TableRow>
                <TableCell component="th" scope="row">
                  <Typography variant="body1" component="p" color="secondary">
                    <strong>Short circuit current</strong>
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="body1" component="p" color="secondary">
                    {product.moduleVoltage}
                  </Typography>
                </TableCell>
              </TableRow>
            )}

            {product.maxPowerCurrent && (
              <TableRow>
                <TableCell component="th" scope="row">
                  <Typography variant="body1" component="p" color="secondary">
                    <strong>Maximum power current</strong>
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="body1" component="p" color="secondary">
                    {product.maxPowerCurrent}
                  </Typography>
                </TableCell>
              </TableRow>
            )}
            {product.maxPowerVoltage && (
              <TableRow>
                <TableCell component="th" scope="row">
                  <Typography variant="body1" component="p" color="secondary">
                    <strong>Maximum power voltage</strong>
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="body1" component="p" color="secondary">
                    {product.maxPowerVoltage}
                  </Typography>
                </TableCell>
              </TableRow>
            )}
            {product.maximumSeriesFuseRating && (
              <TableRow>
                <TableCell component="th" scope="row">
                  <Typography variant="body1" component="p" color="secondary">
                    <strong>Maximum series fuse rating</strong>
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="body1" component="p" color="secondary">
                    {product.maximumSeriesFuseRating}
                  </Typography>
                </TableCell>
              </TableRow>
            )}

            {product.maximumSystemVoltage && (
              <TableRow>
                <TableCell component="th" scope="row">
                  <Typography variant="body1" component="p" color="secondary">
                    <strong>Maximum system voltage</strong>
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="body1" component="p" color="secondary">
                    {product.maximumSystemVoltage}
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ProductTable;
