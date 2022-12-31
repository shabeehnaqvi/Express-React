import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddressForm from "./AddressfForm";
import PaymentForm from "./PaymentForm";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const steps = ["User Address", "Budget/Payment"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    default:
      throw new Error("Unknown step");
  }
}

const theme = createTheme();

function Home() {
  const history = useNavigate();
  const [activeStep, setActiveStep] = React.useState(0);
  React.useEffect(() => {
    toast("Welcome To Construct it");
  }, []);
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const addData = (e) => {
    const jobPaymentDetails = JSON.parse(
      localStorage.getItem("job_details_payment")
    );
    let userDetails = JSON.parse(localStorage.getItem("user_login"));
    let jobDetails = JSON.parse(localStorage.getItem("job_details"));

    jobDetails = {
      ...userDetails,
      ...jobDetails["0"],
      ...jobPaymentDetails["0"],
      approved: false,
      completed: false,
    };
    console.log(jobDetails);
    fetch("http://localhost:3001/jobs")
      .then((response) => response.json())
      .then((data) => {
        fetch("http://localhost:3001/jobs", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(jobDetails),
        }).then((res) => {
          if (res.status >= 200 && res.status <= 300) {
            toast("Successfuly Posted Job!");
            history("/profile");
            localStorage.removeItem("job_details");
            localStorage.removeItem("job_details_payment");
          } else {
            toast("Failed! Contact Support1");
          }
        });
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          // borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      ></AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Post a Job
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h7" gutterBottom>
                Press the Submit Button to Post Your Request
              </Typography>

              <Button
                variant="primary"
                className="col-lg-12"
                onClick={addData}
                style={{ background: "rgb(67, 185, 127)" }}
                type="submit"
              >
                Submit
              </Button>

              <Typography variant="h7" gutterBottom>
                Thank you for your order.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? "Place order" : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default Home;
