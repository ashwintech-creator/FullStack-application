import { Grid, TextField, Box, Button } from "@mui/material";
import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import { useNavigate } from "react-router-dom";

const DeliverAddressForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Fixed typo here

    const data = new FormData(e.currentTarget);
    const address = {
      firstName: data.get("firstname"),
      lastName: data.get("lastname"),
      streetAddress: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: data.get("zip"),
      mobile: data.get("phoneNumber")
    };

    console.log("address", address);
    naviagte("/checkout?step=2");

  };

  const naviagte = useNavigate();

  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={5} className="rounded-e-md bg-white shadow-md h-[30.5rem] overflow-y-scroll hover:shadow-lg">
          <div className="p-5 py-7 border-b cursor-pointer">
            <AddressCard />
            <Button
              sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
              size="large"
              variant="contained"
            >
              Delivery Here
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} lg={7}>
          <Box className=" rounded-s-md bg-white shadow-md p-5 hover:shadow-lg">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstname"
                    name="firstname"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastname"
                    name="lastname"
                    label="Last Name"
                    fullWidth
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autoComplete="shipping address-line1"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="address-level2"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State/Province/Region"
                    fullWidth
                    autoComplete="address-level1"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip/Postal Code"
                    fullWidth
                    autoComplete="postal-code"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone Number"
                    fullWidth
                    autoComplete="tel"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button 
                    // onClick={()=>{naviagte("/checkout?step=2")}}
                    sx={{ py: 1.5, mt: 2, bgcolor: "RGB(145 85 253)" }}
                    size="large"
                    variant="contained"
                    type="submit"
                  >
                    Delivery Here
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliverAddressForm;
