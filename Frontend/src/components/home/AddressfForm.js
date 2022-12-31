import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";
import Button from "@mui/material/Button";

export default function AddressForm() {
  const [data, setData] = React.useState([]);
  const [inpval, setInpval] = React.useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    jobDate: "",
    details: "",
    ZipCode: "",
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

    const { firstName, lastName, address, city, state, jobDate, details } =
      inpval;

    if (
      (firstName === "" && firstName.length >= 4 && firstName.length <= 30) ||
      (lastName === "" && lastName.length >= 4 && lastName.length <= 30)
    ) {
      toast.error("Name field is required!", {
        position: "top-center",
      });
    } else if (address === "") {
      toast.error("Address field is required", {
        position: "top-center",
      });
    } else if (city === "") {
      toast.error("city field is required", {
        position: "top-center",
      });
    } else if (state === "") {
      toast.error("state field is required", {
        position: "top-center",
      });
    } else if (jobDate === "") {
      toast.error("date field is required", {
        position: "top-center",
      });
    } else if (details === "") {
      toast.error("details field is required", {
        position: "bottom-center",
      });
    } else {
      toast("Next Step");
      localStorage.setItem("job_details", JSON.stringify([...data, inpval]));
    }
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Address For the Construction
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            onChange={getdata}
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            onChange={getdata}
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            onChange={getdata}
            name="address"
            label="Address line "
            fullWidth
            autoComplete="shipping address-line"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            onChange={getdata}
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            onChange={getdata}
            label="State/Province/Region"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="ZipCode"
            onChange={getdata}
            label="ZipCode"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid>
          <Form.Group
            // className="mt-4"
            style={{ marginLeft: "25px", marginTop: "25px" }}
            controlId="formBasicdate"
          >
            <TextField
              id="date"
              label="Booking Date"
              type="date"
              name="jobDate"
              defaultValue="2017-05-24"
              sx={{ width: 220 }}
              onChange={getdata}
            />
          </Form.Group>
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="details"
            name="details"
            label="Details about the Construction"
            fullWidth
            variant="standard"
            onChange={getdata}
          />
        </Grid>

        <Grid item xs={18} sm={18}>
          <Button variant="contained" color="success" onClick={addData}>
            Save Data
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
