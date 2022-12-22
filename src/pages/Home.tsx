import React from "react";
import Header from "../components/Header";
import Post from "../components/Post";

function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="homepage">
        <Post />
      </div>
    </div>
  );
}

export default Home;
