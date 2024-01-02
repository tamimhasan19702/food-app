/** @format */

import React, { useState, createContext } from "react";
import firebase from "firebase/app";
import { loginRequest } from "./authentication.service";
export const AuthContext = createContext();

export const AuthContaxtProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(err);
        setIsLoading(false);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        isError,
        onLogin,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
