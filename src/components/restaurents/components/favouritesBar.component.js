/** @format */

import { View } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { CompactRestaurant } from "./CompactRestaurent.component";
import { ScrollView, TouchableOpacity } from "react-native";
import { Spacer } from "../../spacer/spacer";
import { Text } from "../../typography/text.component";

const FavouritesView = styled(View)`
  padding: 16px;
`;

export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesView>
      <Spacer position="left" size="large">
        <Text variant="caption">Favourites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurent) => {
          const key = restaurent.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() => onNavigate("RestaurentDetail", { restaurent })}>
                <CompactRestaurant restaurent={restaurent} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesView>
  );
};
