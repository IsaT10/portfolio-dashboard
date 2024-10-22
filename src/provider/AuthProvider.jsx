/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store user state
  const [loading, setLoading] = useState(true); // Loading state to simulate data fetching

  // Simulate login
  const logIn = (email, password) => {
    setLoading(true);

    // Simulate API call or simple login check
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'admin@gmail.com' && password === '123456') {
          const userData = { email }; // Simulated user data
          setUser(userData);
          localStorage.setItem('user', JSON.stringify(userData)); // Store user data locally (optional)
          setLoading(false);
          resolve(userData);
        } else {
          setLoading(false);
          reject('Invalid email or password');
        }
      }, 1000); // Simulate API delay
    });
  };

  // Simulate logout
  const logOut = () => {
    setLoading(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        setUser(null);
        localStorage.removeItem('user'); // Remove stored user data
        setLoading(false);
        resolve();
      }, 500); // Simulate API delay
    });
  };

  // Check if user is logged in on page load
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        logIn,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
