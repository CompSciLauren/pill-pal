import React, { useState, createContext, useContext } from 'react';

const AuthContext = createContext(null);

const useAuth = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const login = async (username, password) => {
    console.log('Logging in...');
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://pillpal-app.de/User/${username}/${password}`,
        {
          method: 'GET',
        }
      );

      const json = await response.json();
      if (json[0]) {
        setUser(json[0]);
        setIsLoggedIn(true);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setUser(null);
      setIsLoggedIn(false);
      setIsLoading(false);
    }
  };

  const logout = async () => {
    console.log('Logging out...');
    setIsLoading(true);

    try {
      setUser(null);
      setIsLoggedIn(false);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setUser(null);
      setIsLoggedIn(false);
      setIsLoading(false);
    }
  };

  return {
    login,
    isLoggedIn,
    user,
    logout,
  };
};

const AuthProvider = (props) => {
  const authSettings = useAuth();

  return (
    <AuthContext.Provider value={authSettings}>
      {props.children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  const authSettings = useContext(AuthContext);
  return authSettings;
};

export default useAuthContext;
export { AuthProvider };
