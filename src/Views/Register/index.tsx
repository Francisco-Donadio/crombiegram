import React, { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import useFetch from "../../Hooks/useFetch";
import { useForm } from "react-hook-form";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

function Register() {
  const handleFetch = useFetch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [alert, setAlert] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    const jsonResponse = await handleFetch({
      path: "auth/signup",
      data,
      method: "POST",
    });

    setAlert(jsonResponse.message);
    setTimeout(() => navigate("/login"), 2000);
    console.log(jsonResponse);
  });
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 8,
      }}
    >
      <img src="images/crombie-logo.png" alt="logo" className="logo" />

      <Box
        component={"form"}
        onSubmit={onSubmit}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Grid
          container
          columns={2}
          maxWidth={900}
          spacing={2}
          padding="0px 50px"
        >
          <Grid item xs={2} md={1}>
            <TextField
              label="Email"
              variant="outlined"
              {...register("email", { required: true })}
              fullWidth
            />
          </Grid>
          <Grid item xs={2} md={1}>
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              {...register("password", { required: true })}
              fullWidth
            />
          </Grid>
          <Grid item xs={2} md={1}>
            <TextField
              label="Repeat Password"
              variant="outlined"
              type="password"
              {...register("repeatPassword", { required: true })}
              fullWidth
            />
          </Grid>
          <Grid item xs={2} md={1}>
            <TextField
              label="First Name"
              variant="outlined"
              {...register("firstName", { required: true })}
              fullWidth
            />
          </Grid>
          <Grid item xs={2} md={1}>
            <TextField
              label="Last Name"
              variant="outlined"
              {...register("lastName", { required: true })}
              fullWidth
            />
          </Grid>
          <Grid item xs={2} md={1}>
            <TextField
              id="date"
              label="Birthday"
              type="date"
              defaultValue="2023-01-11"
              InputLabelProps={{
                shrink: true,
              }}
              {...register("birthday", { required: true })}
              fullWidth
            />
          </Grid>
        </Grid>
        <Button variant="contained" color="secondary" type="submit">
          Register
        </Button>
      </Box>
      {alert && <Alert severity="success">{alert}</Alert>}
    </Box>
  );
}

export default Register;
