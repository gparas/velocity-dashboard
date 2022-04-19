import { useState, createContext, useContext } from "react";

const AuthContext = createContext();

function AuthProvider(props) {
  let [user, setUser] = useState(null);

  const signin = (newUser) => {
    setUser(newUser);
  };
  const signout = () => {
    setUser(null);
  };

  const value = { user, signin, signout };
  return <AuthContext.Provider value={value} {...props} />;
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
