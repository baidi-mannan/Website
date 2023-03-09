import { Box, Button, TextField, Typography, Grid } from '@material-ui/core';
import React, { Fragment, useState } from 'react';
import formValidation from '../../components/Cart/Helper/formValidation';
import { BASE_URL } from '../../config';
import axiosConfig from '../../axiosConfig';
import { useSnackbar } from "notistack";

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

const Auth = () => {
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState(0);
  const [otpSent, setOTPSent] = useState(false);
  const [verified, setVerified] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const isValid = (phone.length >= 10 && !formErrors.phone) || (email.length >= 5 && !formErrors.email);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      setPhone(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "otp") {
      setOTP(value);
    }
    const error = formValidation(name, value, fieldsValidation) || "";
    setFormErrors({
      [name]: error,
    });
  };

  const sendOTP = () => {
    let link, mob;
    if (phone.length >= 10 && !formErrors.phone) {
      if (phone.length === 13) {
        mob = `%2b${phone.slice(1)}`;
      } else if (phone.length === 12) {
        mob = `%2b${phone}`;
      } else if (phone.length === 10) {
        mob = `%2b91${phone}`;
      }
      link = `${BASE_URL}generateOTP?mobile=${mob}&type=SELLER`;
    } else {
      link = `${BASE_URL}generateOTP?email=${email}&type=SELLER`;
    }
    axiosConfig
      .post(link)
      .then((response) => {
        // closeSnackbar();
        // setOTPSent((otpSent) => true);
        // enqueueSnackbar("OTP Sent", {
        //     variant: "success"
        // });
      })
      .catch((error) => {
        // closeSnackbar();
        // // enqueueSnackbar("System Error, Please try later", {
        // //     variant: "error"
        // // });
      });
  }

  const otpVerifyFunc = () => {
    let link, mob;
    if (phone.length >= 10 && !formErrors.phone) {
      if (phone.length === 13) {
        mob = `%2b${phone.slice(1)}`;
      } else if (phone.length === 12) {
        mob = `%2b${phone}`;
      } else if (phone.length === 10) {
        mob = `%2b91${phone}`;
      }
      link = `${BASE_URL}verifyOTP?mobile=${mob}&otp=${otp}&type=SELLER`;
    } else {
      link = `${BASE_URL}verifyOTP?email=${email}&otp=${otp}&type=SELLER`;
    }

    axiosConfig
      .get(link, { withCredentials: true })
      .then((response) => {
        setVerified((verified) => true);
        // closeSnackbar();
        // enqueueSnackbar("OTP Verified!", {
        //   variant: "success",
        // });
        window.location.href = "/seller";
      })
      .catch((err) => {
        // enqueueSnackbar("OTP Not Verified! Please Retry!", {
        //   variant: "error",
        // });
      });
  };

  return (
    <Fragment>
      <Grid container justify="center" style={{ padding: "30px" }}>
        <div style={{ background: "white", padding: "30px", margin: "30px 0 50px" }}>
          <Box style={{ margin: "30px 0 50px" }}>
            <Typography variant="h4" align="center" color="primary">
              SOLRUF LOGIN
            </Typography>
            {verified ?

              <Typography variant="h5"
                color="secondary"
                align="center"
                style={{ margin: "10px 0" }}>
                Welcome.
              </Typography>
              :
              <Typography
                variant="h5"
                align="center"
                color="secondary"
                style={{ margin: "10px 0" }}
              >
                Please verify by mobile or email
              </Typography>}
            <hr />
            <div style={{ padding: "20px", justifyContent: "center" }}>
              {!otpSent ?
                <div>
                  <TextField
                    fullWidth
                    label="Mobile Number"
                    variant="outlined"
                    name="phone"
                    placeholder="Mobile Number"
                    margin="normal"
                    value={phone || ""}
                    onChange={handleChange}
                    error={!!formErrors.phone}
                    helperText={formErrors.phone}
                  />
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
                  /></div>
                :
                null
              }
              {otpSent && !verified ?
                <TextField
                  fullWidth
                  label="OTP"
                  name="otp"
                  placeholder="OTP"
                  margin="normal"
                  value={otp || ""}
                  onChange={handleChange}
                  error={!!formErrors.otp}
                  helperText={formErrors.otp}
                />
                : null}
              {isValid && !otpSent && !verified ?
                <Button
                  variant="contained"
                  color="primary"
                  onClick={sendOTP}
                  style={{ marginTop: "20px" }}
                >
                  Send OTP
                </Button>
                : null}
              {otpSent && !verified ?
                <div style={{ marginTop: "10px" }}>
                  <Button
                    variant="contained"
                    color="default"
                    onClick={otpVerifyFunc}
                    style={{ marginRight: 10 }}
                  >
                    Verify OTP
                  </Button>
                  <Button
                    variant="contained"
                    color="default"
                    onClick={sendOTP}
                    style={{ marginRight: 10 }}
                  >
                    Resend OTP
                  </Button></div>
                : null}
            </div>
          </Box>
        </div>
      </Grid>
    </Fragment>
  )
}

export default Auth;
