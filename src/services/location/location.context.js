/** @format */

import React, { useState, createContext, useEffect } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const locationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [location, setLocation] = useState(null);
  const [keyword, setKeyword] = useState("san francisco");

  const onSearch = (searchkeyword) => {
    setKeyword(searchkeyword);
    setIsLoading(true);
    locationRequest(searchkeyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
        console.log(result);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
      });
  };

  useEffect(() => {
    onSearch(keyword);
  }, []);

  return (
    <locationContext.Provider
      value={{
        isLoading,
        isError,
        location,
        keyword,
        search: () => null,
      }}>
      {children}
    </locationContext.Provider>
  );
};
