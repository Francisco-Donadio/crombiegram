import React from "react";
import Post from "../components/Post";
import User from "../components/User";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";

function Home() {
  return (
    <Container sx={{ mt: 9 }} maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
          justifyContent: "center",
          mt: 9,
        }}
      >
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
          <Post />
          <Post />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "right",
            "& > *": {
              m: 1,
            },
            alignSelf: "flex-start",
          }}
        >
          <User />
        </Box>
      </Box>
    </Container>
  );
}

export default Home;
