import { isPossiblePhoneNumber, isValidPhoneNumber, parsePhoneNumber } from "react-phone-number-input";

const isText = RegExp(/^[A-Z ]+$/i);
const isEmail = RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
const isNumber = RegExp(/^\d+$/);
const isOTP = RegExp(/^\D?(\d{4})$/);

export default function formValidation(name, value, country, schema) {
  const { validate, minLength, maxLength } = schema[name];
  let error = "";

  if (minLength && value.length < minLength) error = `Minimum ${minLength} characters is required.`;
  else if (maxLength && value.length > maxLength) error = `Maximum length of ${maxLength} exceeded!`;
  if (!validate) return error;

  switch (validate) {
    case "text":
      if (!isText.test(value)) error = "This field accept text only.";
      break;

    case "number":
      if (!isNumber.test(value)) error = "This field accept numbers only.";
      break;

    case "email":
      if (!isEmail.test(value)) error = "Please enter a valid email";
      break;

    // https://www.npmjs.com/package/react-phone-number-input
    // The package used for validating phone number, please visit docs to understand
    // Also if the package dont update and some country code structure gets updated then this package may fail
    case "phone":
      if (
        parsePhoneNumber(value)
          ? parsePhoneNumber(value).country === country.countryCode.toUpperCase()
            ? !isValidPhoneNumber(value)
            : !isPossiblePhoneNumber(value)
          : true
      ) {
        error = `Please enter a valid phone number of ${country.name}`;
      }
      break;

    case "otp":
      if (!isOTP.test(value)) error = "Please enter valid OTP. i.e: xxxx";
      break;

    default:
      break;
  }

  return error;
}
