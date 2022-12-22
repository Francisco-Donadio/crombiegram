import React from "react";
import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Start from "./components/Start";
import Home from "./pages/Home";
import ThemeContext from "./themes";

function App() {
  return (
    <div className="App">
      <ThemeContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext>
    </div>
  );
}

export default App;
