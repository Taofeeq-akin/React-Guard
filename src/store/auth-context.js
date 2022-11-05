import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  // we can noe manage all authentication states in this seperate provider componenet
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // to avoid reloading of this if page is being reload
  useEffect(() => {
    const storedInfo = localStorage.getItem("loggedIn");

    if (storedInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("loggedIn");
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem("loggedIn", "1");
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

// Basic 2 things to make it useable
// 1) Provide it
// 2) Consume it
