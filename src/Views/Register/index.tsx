import React from "react";
import { Box, Button, Container, TextField } from "@mui/material";

function Register() {
  return (
    <Container sx={{ mt: 9 }} maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
      >
        <img src="images/logo.png" alt="logo" className="logo" />

        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <form>
            <div>
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
              />
            </div>
            <div>
              <TextField id="outlined-basic" label="Email" variant="outlined" />
              <TextField
                id="outlined-basic"
                label="Actual Position"
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
              />
              <TextField
                id="outlined-basic"
                label="Repeat Password"
                variant="outlined"
                type="password"
              />
            </div>
            <div>
              <Button variant="contained" color="secondary">
                Register
              </Button>
            </div>
          </form>
        </Box>
      </Box>
    </Container>
  );
}

export default Register;
