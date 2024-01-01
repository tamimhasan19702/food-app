/** @format */

import { Image, View } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { CompactRestaurant } from "./CompactRestaurent.component";
import { ScrollView, TouchableOpacity } from "react-native";
import { Spacer } from "../../spacer/spacer";
import { Text } from "react-native";
import WebView from "react-native-webview";

const FavouritesView = styled(View)`
  padding: 16px;
`;

export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesView>
      <View>
        <Text variant="caption">Favourites</Text>
      </View>
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
