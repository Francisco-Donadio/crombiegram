import React from "react";
import { Typewriter } from "react-simple-typewriter";

function Title() {
  const words = ["Crombiegram."];

  return (
    <div className="title">
      <Typewriter
        words={words}
        cursor={true}
        cursorBlinking={true}
        cursorColor={"#fc427b"}
      />
    </div>
  );
}

export default Title;
