import React, { useState, useEffect} from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import Confirm from "./Confirm";
import Success from "./Success";
import clsx from "clsx";
import formValidation from "../Helper/formValidation";
import { makeStyles } from "@material-ui/core/styles";

//styling
const useStyles = makeStyles(() => ({
  outerDiv: {
    minHeight: "100vh",
    backgroundColor: "#4D4D4D",
    padding: "3rem",
    position: "sticky",
    top: "0px",
  },
  labelBox: {
    display: "flex",
    marginTop: "2.5rem",
    marginBottom: "1.5rem",
    color: "#ffd05b",
  },
  boxStepper: {
    position: "absolute",
    top: "7.5rem",
    right: "100%",
  },
  stepper: {
    align: "center",
    backgroundColor: "#4D4D4D",
    padding: "10px 5px 10px 5px",
    borderTopLeftRadius: "12px",
    borderBottomLeftRadius: "12px",
  },
}));

// Steper icon Styling
const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#6D6968",
    display: "flex",
    height: 22,
    alignItems: "center",
  },
  active: {
    color: "#ffd05b",
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
  completed: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "#ffd05b",
  },
});

// Step titles
const labels = ["BASIC INFO", "VERIFICATION", "CONFIRMATION"];

const initialValues = {
  email: "",
  phone: "",
  street: "",
  pincode: "",
  city: "",
  country: "",
  otp: "",
  total: "",
  products: [],
};

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
  street: {
    error: "",
    validate: "text",
  },
  pincode: {
    error: "",
    validate: "number",
  },
  otp: {
    error: "",
    validate: "otp",
    maxLength: 4,
    minLength: 4,
  },
  city: {
    error: "",
    validate: "text",
  },
  country: {
    error: "",
    validate: "text",
  },
};

const StepForm = ({ setView, sum, cart }) => {
  // initialValues.total = { sum };
  // initialValues.products = cart;
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    setFormValues({ ...formValues, total: { sum }, products: cart });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  //styling
  const classes = useStyles();

  //Stepper Icon Styling
  const QontoStepIcon = (props) => {
    const classes = useQontoStepIconStyles();
    const { active, completed } = props;

    return (
      <div
        className={clsx(classes.root, {
          [classes.active]: active,
        })}
      >
        {completed ? <div className={classes.completed} /> : <div className={classes.circle} />}
      </div>
    );
  };

  // Proceed to next step
  const handleNext = () => setActiveStep((prev) => prev + 1);
  // Go back to prev step
  const handleBack = () => setActiveStep((prev) => prev - 1);

  // Handle form change
  const handleChange = (e) => {
    const { name, value, country } = e.target;

    // Set values
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    // set errors
    const error = formValidation(name, value, country, fieldsValidation) || "";

    setFormErrors({
      [name]: error,
    });
  };

  const handleSteps = (step) => {
    switch (step) {
      case 0:
        return (
          <FirstStep
            setView={setView}
            handleNext={handleNext}
            handleChange={handleChange}
            values={formValues}
            formErrors={formErrors}
          />
        );
      case 1:
        return (
          <SecondStep
            handleNext={handleNext}
            handleBack={handleBack}
            handleChange={handleChange}
            values={formValues}
            formErrors={formErrors}
          />
        );
      case 2:
        return <Confirm handleNext={handleNext} handleBack={handleBack} values={formValues} />;
      default:
        break;
    }
  };

  return (
    <>
      <div className={classes.outerDiv}>
        {activeStep === labels.length ? (
          // Last Component
          <Success values={formValues} />
        ) : (
          <>
            <div className={classes.boxStepper}>
              <Stepper
                className={classes.stepper}
                alternativeLabel
                orientation="vertical"
                connector={null}
                activeStep={activeStep}
              >
                {labels.map((label, index) => {
                  return (
                    <Step key={label}>
                      <QontoStepIcon />
                    </Step>
                  );
                })}
              </Stepper>
            </div>

            <Box className={classes.labelBox}>
              <Typography variant="h5" component="h1">
                {labels[activeStep]}
              </Typography>
            </Box>
            {handleSteps(activeStep)}
          </>
        )}
      </div>
    </>
  );
};

export default StepForm;
