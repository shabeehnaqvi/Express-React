import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { toast, ToastContainer } from "react-toastify";
import Button from "@mui/material/Button";
export default function PaymentForm() {
  const [data, setData] = React.useState([]);
  const [inpval, setInpval] = React.useState({
    method: "",
    budget: "",
    worker: 0,
  });
  const getdata = (e) => {
    const { value, name } = e.target;
    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };
  const addData = (e) => {
    e.preventDefault();

    const { method, budget, worker } = inpval;

    if (method === "") {
      toast.error("Mehtod field is requred!", {
        position: "top-center",
      });
    } else if (budget === "") {
      toast.error("budget field is requred", {
        position: "top-center",
      });
    } else if (worker <= 0) {
      toast.error("Number of Workers are Required", {
        position: "top-center",
      });
    } else {
      toast("Next Step");
      localStorage.setItem(
        "job_details_payment",
        JSON.stringify([...data, inpval])
      );
    }
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Budget and Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            onChange={getdata}
            id="name"
            label="User Name"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            onChange={getdata}
            id="method"
            name="method"
            label="Payment Method"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            onChange={getdata}
            id="expDate"
            name="budget"
            label="Budget"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="worker"
            id="worker"
            onChange={getdata}
            label="worker"
            helperText="Number Of Workers Required for the job"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={18} sm={18}>
          <Button variant="contained" color="success" onClick={addData}>
            Save Data
          </Button>
        </Grid>
      </Grid>
      <ToastContainer />
    </React.Fragment>
  );
}
