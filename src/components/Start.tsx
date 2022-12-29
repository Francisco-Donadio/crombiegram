import { Box, Button, Container } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Title from "./Title";

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
    <Container sx={{ mt: 9 }} maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 12,
          },
        }}
      >
        <div className="start-page">
          <div>
            <img src="images/logo.png" alt="logo" className="logo" />
          </div>
          <Title />
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" href="/login" color="primary">
              Login
            </Button>
            <Button variant="outlined" href="/register" color="secondary">
              Register
            </Button>
          </Stack>

          <Outlet />
        </div>
      </Box>
    </Container>
  );
}

export default Start;
