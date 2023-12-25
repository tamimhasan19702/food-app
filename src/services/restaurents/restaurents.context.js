/** @format */

import React, { createContext, useState, useEffect, useMemo } from "react";
import {
  RestaurentRequests,
  RestaurentTransforms,
} from "./restaurents.services";

export const restaurantsContext = createContext();

export const RestaurantsProvider = ({ children }) => {
  const [restaurents, setRestaurents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const retriveRestaurents = () => {
    setIsLoading(true);
    setTimeout(() => {
      RestaurentRequests()
        .then(RestaurentTransforms)
        .then((results) => {
          setIsLoading(false);
          setRestaurents(results);
        })
        .catch(() => {
          setIsLoading(false);
          setIsError(true);
        });
    }, 2000);
  };

  useEffect(() => {
    retriveRestaurents();
  }, []);
  return (
    <restaurantsContext.Provider
      value={{
        restaurents,
        isLoading,
        isError,
      }}>
      {children}
    </restaurantsContext.Provider>
  );
};
