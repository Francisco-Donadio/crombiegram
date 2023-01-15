import React from "react";
import { BrowserRouter } from "react-router-dom";
import ThemeColorProvider from "./Context/ColorModeContext";
import UserProvider from "./Context/UserContext";
import Navigate from "./Navigate";
import "./styles/App.css";
import ThemeContext from "./themes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <ThemeColorProvider>
            <ThemeContext>
              <Navigate />
            </ThemeContext>
          </ThemeColorProvider>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
