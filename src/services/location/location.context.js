/** @format */

import React, { useState, createContext, useEffect } from "react";
import { LocationRequest, LocationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [location, setLocation] = useState(null);
  const [keyword, setKeyword] = useState("san francisco");

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);

    if (!searchKeyword.length) {
      return;
    }

    LocationRequest(searchKeyword.toLowerCase())
      .then(LocationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
        console.log(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(err);
        console.log(err);
      });
  };

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        isError,
        location,
        keyword,
        search: onSearch,
      }}>
      {children}
    </LocationContext.Provider>
  );
};
