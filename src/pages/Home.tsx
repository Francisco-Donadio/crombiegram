import React from "react";
import Header from "../components/Header";
import Post from "../components/Post";
import User from "../components/User";
import Box from "@mui/material/Box";

function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
          justifyContent: "center",
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
    </div>
  );
}

export default Home;
