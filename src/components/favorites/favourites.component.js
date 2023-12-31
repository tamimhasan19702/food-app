/** @format */

import React, { useContext } from "react";
import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { FavouritesContext } from "../../services/favourites/favourites.context";

const FavoriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

export default function FavouritesIcon({ restaurent }) {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);
  const isFavourite = favourites.find((r) => r.placeId === restaurent.paleceId);

  return (
    <FavoriteButton
      onPress={() => {
        !isFavourite
          ? addToFavourites(restaurent)
          : removeFromFavourites(restaurent);
      }}>
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "red" : "white"}
      />
    </FavoriteButton>
  );
}
