import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axiosConfig from "../../../axiosConfig";
import { useSnackbar } from "notistack";

import { BASE_URL } from "../../../config";
import { Order } from "../../Payment/Order";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, withStyles } from "@material-ui/core";
import { useRef } from "react";

//Styling
const useStyles = makeStyles(() => ({
  textField: {
    color: "rgb(245,246,230)",
    fontSize: "15px",
  },
  text: {
    borderBottom: "1px solid rgb(245,246,230)",
    color: "rgb(245,246,230)",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "1rem",
  },
}));

const CssTextField = withStyles({
  root: {
    marginTop: "15px",
    "& input": {
      color: "white",
      caretColor: "white",
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 1000px #4d4d4d inset",
        WebkitTextFillColor: "white",
      },
    },
    "& label": {
      color: "white",
    },
    "& label.Mui-focused": {
      color: "#ffd05b",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "#ffd05b",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#ffd05b",
      },
    },
  },
})(TextField);

const SecondStep = ({
  handleNext,
  handleBack,
  handleChange,
  values: { email, phone, street, pincode, city, country, otp, total, products },
  formErrors,
}) => {
  const buyer = {
    email,
    phone,
    street,
    pincode,
    city,
    country,
    total,
  };
  const classes = useStyles(); //Styling
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [verifiedOTP, setverifyOTP] = useState(false); // otp verified or not
  const [verifiedKey, setVerifiedKey] = useState(false); // cookie verified or not
  const [optionsToSend, setOptionsToSend] = useState(); // contains the response after order is placed
  const [paymentSuccessful, setPaymentSuccessful] = useState(false); // payment successfull or not

  // A timer shows when component is mounted, resend button is replaced by timer after countdown finishes
  const [time, setTime] = useState("1:00");
  const intervalRef = useRef(null);

  const countDownTimer = () => {
    let totalTime = 60; // as 1 minute is 60 sec,so multiply 1*60 -> 60sec
    intervalRef.current = setInterval(() => {
      const minutes = Math.floor(totalTime / 60);
      let seconds = Math.floor(totalTime % 60);
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      setTime(`${minutes}:${seconds}`);
      totalTime = totalTime - 1;
    }, 1000);
  };

  let mob = "";
  // console.log(buyer.phone) --> +919876543210 (india)
  // validation passed number too
  mob = buyer.phone;

  /* 
    --- Below Code Not needed as we are already getting a validated number of every country ---
    --- also this code was only for india ,to restructure the number to a validated one ---
    if (buyer.phone.length === 13) {
    mob = `${buyer.phone}`;
  } else if (buyer.phone.length === 12) {
    mob = `+${buyer.phone}`;
  } else if (buyer.phone.length === 10) {
    mob = `+91${buyer.phone}`;
  } 
  */
  const productsOrder = products.map((product) => {
    return {
      productId: product.id,
      productName: product.name,
      quantity: product.quantity,
      price: product.discountedPrice,
    };
  });
  const data = {
    amount: buyer.total.sum,
    mobile: mob,
    street: buyer.street,
    email: buyer.email,
    pinCode: buyer.pincode,
    city: buyer.city,
    country: buyer.country,
    productOrders: productsOrder,
  };
  const orderLink = `${BASE_URL}order`;
  const generateOTPLink = `${BASE_URL}generateOTP?mobile=%2b${mob.substring(1)}&email=${email}&type=BUYER`;

  // Step - 1 : check if cookies.
  useEffect(() => {
    axiosConfig
      .post(orderLink, data, { withCredentials: true })
      .then((response) => {
        // cookie is verified
        setOptionsToSend(response.data);
        setVerifiedKey(true);
      })
      .catch((error) => {
        // cookie not verified -> send OTP

        axiosConfig
          .post(generateOTPLink)
          .then((response) => {
            enqueueSnackbar(`OTP Sent to ${phone} and ${email}`, {
              variant: "success",
            });
            countDownTimer(); // Start timer after we succesfully receive response
          })
          .catch((err) => {
            enqueueSnackbar("Sorry System Error!", {
              variant: "error",
            });
          });
      });
    return () => clearInterval(intervalRef.current); // return to avoid memoty leak of intervalRef
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // function to RESEND OTP
  const resendOTP = () => {
    axiosConfig
      .post(generateOTPLink)
      .then((response) => {
        enqueueSnackbar(`OTP Sent to ${phone} and ${email}`, {
          variant: "success",
        });
        setTime("1:00");
        countDownTimer();
      })
      .catch((err) => {
        enqueueSnackbar("Sorry System Error!", {
          variant: "error",
        });
      });
  };

  // util function to check Payment Status
  useEffect(() => {
    if (paymentSuccessful === true) {
      handleNext();
    }
  }, [paymentSuccessful, handleNext]);

  // function to VERIFY OTP
  const otpVerifyFunc = () => {
    var link = `${BASE_URL}verifyOTP?mobile=%2b${mob.substring(1)}&otp=${otp}&type=BUYER`;
    axiosConfig
      .get(link, { withCredentials: true })
      .then((response) => {
        closeSnackbar();
        setverifyOTP((verifiedOTP) => true);
        clearInterval(intervalRef.current);
        enqueueSnackbar("OTP Verified!", {
          variant: "success",
        });

        // create order now
        axiosConfig
          .post(orderLink, data, { withCredentials: true })
          .then((response) => {
            setOptionsToSend(response.data);
            setVerifiedKey(true);
          })
          .catch((error) => {});
      })

      .catch((err) => {
        enqueueSnackbar("OTP Not Verified! Please Retry!", {
          variant: "error",
        });
      });
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          {!verifiedKey ? (
            <>
              <CssTextField
                required
                fullWidth
                variant="outlined"
                label="OTP Sent"
                name="otp"
                autoComplete="off"
                placeholder="i.e: xxxx"
                value={otp || ""}
                onChange={handleChange}
                error={!!formErrors.otp}
                helperText={formErrors.otp}
                margin="dense"
              />
              {/* Only make the buttons visible if the otp hasn't been verified */}
              <div className={classes.buttonGroup}>
                <Button
                  variant="contained"
                  color="default"
                  onClick={otpVerifyFunc}
                  style={{ width: "45%", color: "black", visibility: verifiedOTP ? "hidden" : "visible" }}
                >
                  <strong>Confirm</strong>
                </Button>
                {time === "0:00" ? (
                  <>
                    {clearInterval(intervalRef.current)}
                    <Button
                      variant="contained"
                      color="default"
                      onClick={resendOTP}
                      style={{ width: "45%", color: "black", visibility: verifiedOTP ? "hidden" : "visible" }}
                    >
                      <strong>Resend</strong>
                    </Button>
                  </>
                ) : (
                  <Typography
                    variant="h5"
                    color="default"
                    style={{
                      width: "45%",
                      textAlign: "right",
                      color: "#ffd05b",
                      visibility: verifiedOTP ? "hidden" : "visible",
                    }}
                  >
                    <strong>{`${time}`}</strong>
                  </Typography>
                )}
              </div>
            </>
          ) : (
            <>
              {clearInterval(intervalRef.current)}
              <div style={{ marginTop: "3rem", textAlign: "left", color: "rgb(245,246,230)" }}>
                <Typography variant="h6">Your Email and Phone has been verified</Typography>
              </div>
            </>
          )}
        </Grid>
        <Grid item xs={12}>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              style={{
                backgroundColor: "#ffd05b",
                color: "black",
                marginTop: "3rem",
              }}
              onClick={() => {
                handleBack();
                clearInterval(intervalRef.current);
              }}
            >
              <strong>Back</strong>
            </Button>
          </Grid>
          <Grid item xs={12}>
            {verifiedOTP || verifiedKey ? (
              <div style={{ marginTop: "1.5rem" }}>
                <Order
                  options={optionsToSend}
                  buyer={buyer}
                  cart={products}
                  setPaymentStatus={() => {
                    setPaymentSuccessful(true);
                  }}
                />
              </div>
            ) : null}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SecondStep;
