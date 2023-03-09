import { Box, Button, TextField, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import formValidation from "../Cart/Helper/formValidation";
import { BASE_URL } from "../../config";
import axiosConfig from "../../axiosConfig";
import { useSnackbar } from "notistack";
import LoadOrders from "./LoadOrders";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import "./styles.css";

const fieldsValidation = {
  email: {
    error: "",
    validate: "email",
  },
  phone: {
    error: "",
    validate: "phone",
    maxLength: 15,
  },
  otp: {
    error: "",
    validate: "otp",
    maxLength: 4,
    minLength: 4,
  },
};

const VerifyOTP = ({ setOrderView }) => {
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState(0);
  const [formErrors, setFormErrors] = useState({});

  const isValid = (phone.length >= 10 && !formErrors.phone) || (email.length >= 5 && !formErrors.email);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const [otpSent, setOTPSent] = useState(false);
  const [verified, setVerified] = useState(false);
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState("");

  const handleChange = (e) => {
    const { name, value, country } = e.target;
    if (name === "phone") {
      setPhone(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "otp") {
      setOTP(value);
    }
    const error = formValidation(name, value, country, fieldsValidation) || "";
    setFormErrors({
      [name]: error,
    });
  };

  const sendOTP = () => {
    let link, mob;
    if (phone.length >= 10 && !formErrors.phone) {
      mob = `%2b${phone.slice(1)}`;
      // if (phone.length === 13) {
      //   mob = `%2b${phone.slice(1)}`;
      // } else if (phone.length === 12) {
      //   mob = `%2b${phone}`;
      // } else if (phone.length === 10) {
      //   mob = `%2b91${phone}`;
      // }
      link = `${BASE_URL}generateOTP?mobile=${mob}&type=BUYER`;
      setUser(phone);
    } else {
      link = `${BASE_URL}generateOTP?email=${email}&type=BUYER`;
      setUser(email);
    }
    axiosConfig
      .post(link)
      .then((response) => {
        closeSnackbar();
        setOTPSent((otpSent) => true);
        enqueueSnackbar("OTP Sent", {
          variant: "success",
        });
      })
      .catch((error) => {
        closeSnackbar();
        enqueueSnackbar("System Error, Please try later", {
          variant: "error",
        });
      });
  };
  const otpVerifyFunc = () => {
    let link, mob;
    if (phone.length >= 10 && !formErrors.phone) {
      mob = `%2b${phone.slice(1)}`;
      // if (phone.length === 13) {
      //   mob = `%2b${phone.slice(1)}`;
      // } else if (phone.length === 12) {
      //   mob = `%2b${phone}`;
      // } else if (phone.length === 10) {
      //   mob = `%2b91${phone}`;
      // }
      link = `${BASE_URL}verifyOTP?mobile=${mob}&otp=${otp}&type=BUYER`;
    } else {
      link = `${BASE_URL}verifyOTP?email=${email}&otp=${otp}&type=BUYER`;
    }

    axiosConfig
      .get(link, { withCredentials: true })
      .then((response) => {
        setVerified((verified) => true);
        closeSnackbar();
        enqueueSnackbar("OTP Verified!", {
          variant: "success",
        });
        setTimeout(closeSnackbar, 2000);
      })
      .catch((err) => {
        enqueueSnackbar("OTP Not Verified! Please Retry!", {
          variant: "error",
        });
      });
  };

  // If Verified changes send api call
  useEffect(() => {
    const link = `${BASE_URL}orders`;
    if (verified === true) {
      axiosConfig
        .get(link, { withCredentials: true })
        .then((response) => {
          setOrders(response.data);
        })
        .catch((error) => {
          // console.log("not loaded.");
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [verified]);

  const handlePhoneWithCountry = (formattedNumber, country) => {
    // Append + sign to start of number, needed for validation
    const phoneNumber = "+" + formattedNumber;
    handleChange({
      target: {
        name: "phone",
        country: country,
        value: formattedNumber ? phoneNumber : "",
      },
    });
  };

  return (
    <>
      <div>
        <Box style={{ textAlign: "left" }}>
          {verified ? (
            <Typography variant="h5" color="secondary" align="left" style={{ margin: "10px" }}>
              Welcome back {user}.
            </Typography>
          ) : (
            <Typography
              variant="h4"
              align="left"
              color="secondary"
              style={{ margin: "10px 0", padding: "0px 10px", fontSize: "30px" }}
            >
              Please Verify by:
            </Typography>
          )}

          <div>
            {!otpSent ? (
              <div style={{ padding: "10px" }}>
                <PhoneInput
                  country="in"
                  disableAreaCodes={true}
                  enableSearch={true}
                  countryCodeEditable={false}
                  placeholder="Mobile Number"
                  value={phone || ""}
                  inputProps={{
                    name: "Mobile Number",
                    required: true,
                    autoFocus: true,
                  }}
                  onChange={(formattedNumber, country) => handlePhoneWithCountry(formattedNumber, country)}
                  inputStyle={{ borderColor: !!formErrors.phone && "red" }}
                  dropdownStyle={{ width: "240px" }}
                  searchStyle={{ width: "180px", margin: "0px" }}
                  containerClass="myorder-form-container"
                  inputClass="myorder-form"
                />
                {!!formErrors.phone && (
                  <Typography variant="caption" align="left" component="p" color="error" style={{ marginTop: "5px" }}>
                    {formErrors.phone}
                  </Typography>
                )}
                <Typography variant="h6" align="center" color="secondary" style={{ marginTop: "10px" }}>
                  OR
                </Typography>
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  name="email"
                  placeholder="Your email address"
                  type="email"
                  value={email || ""}
                  onChange={handleChange}
                  margin="normal"
                  error={!!formErrors.email}
                  helperText={formErrors.email}
                />
              </div>
            ) : null}

            {otpSent && !verified ? (
              <div style={{ padding: "0 10px" }}>
                <TextField
                  fullWidth
                  label="OTP"
                  name="otp"
                  placeholder="OTP"
                  margin="normal"
                  value={otp || ""}
                  variant="outlined"
                  autoComplete="off"
                  onChange={handleChange}
                  error={!!formErrors.otp}
                  helperText={formErrors.otp}
                />
              </div>
            ) : null}

            {isValid && !otpSent && !verified ? (
              <div style={{ padding: "10px" }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={sendOTP}
                  style={{ color: "black", opacity: "80%" }}
                >
                  <strong>Send OTP</strong>
                </Button>
              </div>
            ) : null}

            {otpSent && !verified ? (
              <div style={{ marginTop: "10px", padding: "10px" }}>
                <Button
                  variant="contained"
                  color="default"
                  onClick={otpVerifyFunc}
                  style={{ marginRight: 10, opacity: "80%" }}
                >
                  <strong>Verify OTP</strong>
                </Button>
                <Button
                  variant="contained"
                  color="default"
                  onClick={sendOTP}
                  style={{ marginRight: 10, opacity: "80%" }}
                >
                  <strong>Resend OTP</strong>
                </Button>
              </div>
            ) : null}
          </div>
        </Box>
      </div>
      {/* If Verified display the orderlist in this verifyOtp component itself */}
      {verified ? <LoadOrders res={orders} /> : null}
    </>
  );
};

export default VerifyOTP;
