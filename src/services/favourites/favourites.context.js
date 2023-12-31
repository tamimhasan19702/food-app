/** @format */

import React, { createContext, useState } from "react";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const add = (restaurent) => {
    setFavourites([...favourites, restaurent]);
  };

  const remove = (restaurent) => {
    setFavourites(favourites.filter((item) => item !== restaurent));
  };

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}>
      {children}
    </FavouritesContext.Provider>
  );
};
