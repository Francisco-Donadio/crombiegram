import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/system/Stack";
import React, { useState } from "react";
import { Outlet, Route } from "react-router-dom";
import Title from "../../components/Title";
import { Link } from "react-router-dom";
import SwitchTheme from "../../components/SwitchTheme";

function Start() {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleClick = (event: { currentTarget: { id: string } }) => {
    if (event.currentTarget.id === "login") {
      setIsRegistered(true);
      console.log(isRegistered);
    } else if (event.currentTarget.id === "register") {
      setIsRegistered(false);

      console.log(isRegistered);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ alignSelf: "flex-end", mr: 2, mt: 2 }}>
        <SwitchTheme />
      </Box>
      <img src="images/crombie-logo.png" alt="logo" className="logo" />

      <Title />
      <Stack direction="row" spacing={2}>
        <Link to={"/login"}>
          <Button variant="outlined" color="primary">
            Login
          </Button>
        </Link>
        <Link to={"/register"}>
          <Button variant="outlined" color="secondary">
            Register
          </Button>
        </Link>
      </Stack>
    </Box>
  );
}

export default Start;
