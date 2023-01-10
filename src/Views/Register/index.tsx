import React from "react";
import { Box, Button, Container, TextField } from "@mui/material";
import useFetch from "../../Hooks/useFetch";
import { useForm } from "react-hook-form";

function Register() {
  const handleFetch = useFetch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  const onSubmit = handleSubmit(async (data) => {
    const jsonResponse = await handleFetch({
      path: "register",
      data,
      method: "POST",
    });
  });
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
          <form onSubmit={onSubmit}>
            <div>
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                {...register("First name", { required: true })}
              />
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                {...register("Last name", { required: true })}
              />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                {...register("Email", { required: true })}
              />
              <TextField
                id="date"
                label="Birthday"
                type="date"
                defaultValue="2017-05-24"
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
                {...register("Birthday", { required: true })}
              />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
                {...register("Password", { required: true })}
              />
              <TextField
                id="outlined-basic"
                label="Repeat Password"
                variant="outlined"
                type="password"
                {...register("Repeat Password", { required: true })}
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
