// AuthContext.js
import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const signIn = (userData) => {
    // Call your backend API for authentication and set user data
    setUser(userData);
  };

  const signOut = () => {
    // Clear user data
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
