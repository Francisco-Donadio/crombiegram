import React from "react";
import Navigate from "./Navigate";
import "./styles/App.css";
import ThemeContext from "./themes";

function App() {
  return (
    <div className="App">
      <ThemeContext>
        <Navigate />
      </ThemeContext>
    </div>
  );
}

export default App;
