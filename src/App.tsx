import React from "react";
import "./styles/App.css";
import ThemeContext from "./themes";
import AppRouter from "./Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ThemeContext>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </ThemeContext>
    </div>
  );
}

export default App;
