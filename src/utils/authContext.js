import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState();

  const logout = () => {
    setCurrentUser(null);
  };
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("banana"));
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const value = { currentUser, setCurrentUser, logout };
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;
