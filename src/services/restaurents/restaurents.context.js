/** @format */

import React, { createContext, useState, useEffect, useMemo } from "react";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurents.services";

export const restaurantsContext = createContext();

export const RestaurantsProvider = ({ children }) => {
  return (
    <restaurantsContext.Provider
      value={{
        restaurents: [1, 2, 3, 4, 5, 6, 7, 8],
      }}>
      {children}
    </restaurantsContext.Provider>
  );
};
