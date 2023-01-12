import React from "react";
import Post from "../../components/Post";
import Box from "@mui/material/Box";
import "react-calendar/dist/Calendar.css";
// import Calendar from "react-calendar";
import NewPost from "../../components/NewPost";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        mt: 9,
      }}
    >
      <NewPost />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignSelf: "flex-start",
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      ></Box>
    </Box>
  );
}

export default Home;
