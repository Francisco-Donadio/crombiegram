import React, { useState } from "react";
import Post from "../../components/Post";
import User from "../../components/User";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import NewPost from "../../components/NewPost";

type PostListType = {
  contentText: string;
  id: string;
  imageName?: string;
  user: { firstName: string; lastName: string };
}[];

function Home() {
  const [postList, setPostList] = useState<PostListType>([
    {
      contentText: "asdasdasdasdasd",
      id: "asdasdas",
      imageName: "03ce64b7-8142-42d6-a140-ec84580fd991hola.png",
      user: { firstName: "Joaquin", lastName: "Giacusa" },
    },
    {
      contentText: "asdasdasdasdasd",
      id: "asdasdas",
      imageName: "03ce64b7-8142-42d6-a140-ec84580fd991hola.png",
      user: { firstName: "Joaquin", lastName: "Giacusa" },
    },
  ]);

  return (
    <Container sx={{ mt: 9 }} maxWidth="xl">
      <NewPost></NewPost>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          mt: 9,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {postList.map((p) => (
            <Post
              key={p.id}
              firstName={p.user.firstName}
              lastName={p.user.lastName}
              contentText={p.contentText}
              imageName={p.imageName}
            />
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "right",
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
