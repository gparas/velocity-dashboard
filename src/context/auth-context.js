import { useState, createContext } from 'react';

const AuthContext = createContext();

const localStorageKey = 'user';

function AuthProvider(props) {
  let [user, setUser] = useState(() =>
    window.localStorage.getItem(localStorageKey)
  );

  const signin = (newUser, callback) => {
    window.localStorage.setItem(localStorageKey, newUser);
    setUser(newUser);
    callback();
  };
  const signout = () => {
    window.localStorage.removeItem(localStorageKey);
    setUser(null);
    callback();
  };

  const value = { user, signin, signout };
  return <AuthContext.Provider value={value} {...props} />;
}

export { AuthProvider, AuthContext };
