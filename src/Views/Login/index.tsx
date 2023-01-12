import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useUserContext } from "../../Context/UserContext";
import useFetch from "../../Hooks/useFetch";
import { useNavigate } from "react-router-dom";
interface IFormInput {
  email: string;
  password: string;
}

function Login() {
  const handleFetch = useFetch();
  const { handleSetValues } = useUserContext();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { email: "", password: "" } });

  console.log(errors);

  const onSubmit = handleSubmit(async (data) => {
    const jsonResponse = await handleFetch({
      path: "auth/login",
      data,
      method: "POST",
    });
    handleSetValues("token", jsonResponse.payload.token);
    localStorage.setItem("token", jsonResponse.payload.token);
    setTimeout(() => navigate("/home"), 2000);
  });

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

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
        onSubmit={onSubmit}
        component="form"
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
          <OutlinedInput
            {...register("email", { required: true })}
            // id="outlined-adornment-email"
            type={"text"}
            label="Email"
          />
        </FormControl>

        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            {...register("password", { required: true })}
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

        <Button variant="outlined" color="primary" type="submit">
          Login
        </Button>
      </Box>
    </Box>
  );
}

export default Login;
