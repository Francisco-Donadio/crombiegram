import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useUserContext } from "../../Context/UserContext";
import useFetch from "../../Hooks/useFetch";

function Login() {
  const handleFetch = useFetch();
  const { handleSetValues } = useUserContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { email: "", password: "" } });

  console.log(errors);

  const onSubmit = handleSubmit(async (data) => {
    const jsonResponse = await handleFetch({
      path: "login",
      data,
      method: "POST",
    });
    handleSetValues("token", jsonResponse.payload.token);
    localStorage.setItem("token", jsonResponse.payload.token);
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    // <Container sx={{ mt: 9 }} maxWidth="xl">
    <Box
      sx={{
        mt: 9,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img src="images/logo.png" alt="logo" />
      <Box
        component="form"
        onSubmit={onSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          width: "400px",
        }}
      >
        <FormControl variant="outlined" fullWidth>
          <InputLabel
            htmlFor="outlined-adornment-password"
            {...register("email", { required: true })}
          >
            Email
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-email"
            type={"text"}
            label="Email"
            sx={{ width: "100%" }}
          />
        </FormControl>

        <div>
          <FormControl sx={{ width: "100%" }} variant="outlined">
            <InputLabel
              htmlFor="outlined-adornment-password"
              {...register("password", { required: true })}
            >
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </div>
        <div>
          <Button variant="contained" color="primary">
            Login
          </Button>
        </div>
      </Box>
    </Box>
    // </Container>
  );
}

export default Login;
