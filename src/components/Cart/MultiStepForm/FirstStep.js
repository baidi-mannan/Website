import React, { Fragment, useEffect } from "react";
import { FormControl, TextField, Grid, useMediaQuery, withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import "./styles.css";
import { Typography } from "@material-ui/core";

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

// Destructuring props
const FirstStep = ({
  setView,
  handleNext,
  handleChange,
  values: { phone, street, email, pincode, city, country },
  formErrors,
}) => {
  const matches = useMediaQuery("(min-width:600px)");
  const [countryName, setCountryName] = React.useState(country);

  useEffect(() => {
    handleChange({ target: { name: "country", value: countryName } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryName]);

  // Check if all values are not empty or if there are some error
  const isValid =
    phone.length >= 10 &&
    !formErrors.phone &&
    street.length > 0 &&
    email.length > 0 &&
    !formErrors.email &&
    pincode.length > 0 &&
    city.length > 0 &&
    country.length > 0;

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
    setCountryName(country.name);
  };

  return (
    <Fragment>
      <Grid container noValidate>
        <FormControl>
          <Grid item xs={12}>
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
              containerClass="cart-form-container"
              inputClass="cart-form"
            />
            {!!formErrors.phone && (
              <Typography variant="caption" align="left" component="p" color="error" style={{ marginTop: "5px" }}>
                {formErrors.phone}
              </Typography>
            )}
          </Grid>

          <Grid item xs={12}>
            <CssTextField
              fullWidth
              variant="outlined"
              label="Email"
              name="email"
              placeholder="Your email address"
              type="email"
              value={email || ""}
              onChange={handleChange}
              margin="dense"
              error={!!formErrors.email}
              helperText={formErrors.email}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <CssTextField
              fullWidth
              variant="outlined"
              label="Street"
              name="street"
              placeholder="Street"
              margin="dense"
              value={street || ""}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <CssTextField
              fullWidth
              variant="outlined"
              label="City"
              name="city"
              placeholder="City"
              margin="dense"
              value={city || ""}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <CssTextField
              fullWidth
              variant="outlined"
              label="Pincode"
              name="pincode"
              placeholder="Pincode"
              margin="dense"
              value={pincode || ""}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <CssTextField
              fullWidth
              variant="outlined"
              margin="dense"
              label="Country"
              name="country"
              placeholder="Country"
              value={countryName || ""}
              onChange={(e) => setCountryName(e.target.value)}
              required
            />
          </Grid>
          {/* Back Button for mobile viewers only to go back to cart items */}
          {!matches && (
            <Grid item xs={12} style={{ marginTop: "30px" }}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => setView(false)}
                style={{ color: "black" }}
              >
                <strong>Back</strong>
              </Button>
            </Grid>
          )}

          <Grid item xs={12} style={{ marginTop: "30px" }}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => {
                setView(true);
                handleNext();
              }}
              style={{ color: "black", visibility: isValid ? "visible" : "hidden" }}
            >
              <strong>Next</strong>
            </Button>
          </Grid>
        </FormControl>
      </Grid>
    </Fragment>
  );
};
export default FirstStep;
