/** @format */

import React, { createContext, useState, useEffect, useContext } from "react";
import {
  RestaurentRequests,
  RestaurentTransforms,
} from "./restaurents.services";
import { LocationContext } from "../location/location.context";

export const restaurantsContext = createContext();

export const RestaurantsProvider = ({ children }) => {
  const [restaurents, setRestaurents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { location } = useContext(LocationContext);

  const retriveRestaurents = (loc) => {
    setIsLoading(true);
    setRestaurents([]);
    setTimeout(() => {
      RestaurentRequests(loc)
        .then(RestaurentTransforms)
        .then((results) => {
          setIsLoading(false);
          setRestaurents(results);
        })
        .catch(() => {
          setIsLoading(false);
          setIsError(true);
        });
    }, 1000);
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retriveRestaurents(locationString);
    }
  }, [location]);
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
