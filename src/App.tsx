import React from "react";
import ThemeColorProvider from "./Context/ColorModeContext";
import UserProvider from "./Context/UserContext";
import Navigate from "./Navigate";
import "./styles/App.css";
import ThemeContext from "./themes";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <ThemeColorProvider>
          <ThemeContext>
            <Navigate />
          </ThemeContext>
        </ThemeColorProvider>
      </UserProvider>
    </div>
  );
}

export default App;
