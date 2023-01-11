import React from "react";
import Post from "../../components/Post";
import Box from "@mui/material/Box";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import NewPost from "../../components/NewPost";

function Home() {
  return (
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
      <NewPost />
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
      ></Box>
    </Box>
  );
}

export default Home;
