import React, { useState } from "react";
import logo from "src/images/logo.png";

function Home() {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleClick = (event: { currentTarget: { id: string } }) => {
    if (event.currentTarget.id === "login") {
      setIsRegistered(true);
      console.log(isRegistered);
    } else if (event.currentTarget.id === "register") {
      setIsRegistered(false);

      console.log(isRegistered);
    }
  };

  return (
    <div className="home">
      <div>
        <h1 className="title">Crombiegram</h1>
      </div>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="home-buttons">
        <button type="submit" id="login" onClick={handleClick}>
          Login
        </button>
        <button type="submit" id="register" onClick={handleClick}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Home;
