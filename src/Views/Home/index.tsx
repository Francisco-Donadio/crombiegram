import React from "react";
import Post from "../../components/Post";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";

function Home() {
  return (
    <Container sx={{ mt: 9 }} maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          "& > *": {
            m: 3,
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
            alignSelf: "flex-start",
          }}
        >
          <Calendar />
        </Box>
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
      </Box>
    </Container>
  );
}

export default Home;
