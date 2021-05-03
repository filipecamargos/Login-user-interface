import React, { useState, Fragment, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //UseEffect to avoid no related and infite loops
  //Takes a anounimus function and array of dependencies
  useEffect(() => {
    const storedLoggedIn = localStorage.getItem("isLoggedIn");

    if (storedLoggedIn === "1") {
      setIsLoggedIn(true);
    }
  }, []) //Manage to handle for the first time since the dependency never changes

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };
  
  const logoutHandler = () => {
    localStorage.removeItem(isLoggedIn);
    setIsLoggedIn(false);
  };

  return (
    <Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </Fragment>
  );
}

export default App;
