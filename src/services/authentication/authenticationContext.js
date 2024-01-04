/** @format */

import React, { useState, createContext, useEffect } from "react";
import { loginRequest, registerRequest } from "./authentication.service";
import { FIREBASEAUTH } from "../../../firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";

const auth = FIREBASEAUTH;
export const AuthContext = createContext();

export const AuthContaxtProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState([]);

  const onLogin = async (email, password) => {
    setIsLoading(true);
    try {
      const u = await loginRequest(email, password);
      setUser(u);
    } catch (e) {
      setIsError(e.toString());
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const onRegister = async (email, password, repeatPassword) => {
    setIsLoading(true);
    if (password !== repeatPassword) {
      setIsError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      const u = await registerRequest(email, password);
      setUser(u);
    } catch (err) {
      setIsError(err.toString());
    } finally {
      setIsLoading(false);
    }
  };

  const onSignOut = () => {
    setUser(null);
    signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        isError,
        onLogin,
        onRegister,
        onSignOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
