import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Start() {
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
        <img src="images/logo.png" alt="logo" className="logo" />
      </div>
      <div>
        <h1 className="title">Crombiegram</h1>
      </div>
      <div className="home-buttons">
        <div>
          <Link to="/login" id="login">
            <button type="submit" id="login" onClick={handleClick}>
              Login
            </button>
          </Link>
        </div>
        <Link to="/register" id="register">
          <button type="submit" id="register" onClick={handleClick}>
            Register
          </button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Start;
