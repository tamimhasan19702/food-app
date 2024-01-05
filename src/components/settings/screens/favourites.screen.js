/** @format */

import React, { useContext } from "react";
import { FlatList, Pressable, View } from "react-native";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import RestaurentCard from "../../restaurents/components/restaurentCard.component";
import { Spacer } from "../../spacer/spacer";

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  const renderItem = ({ item }) => (
    <>
      <Pressable
        onPress={() =>
          navigation.navigate("RestaurentDetail", {
            restaurent: item,
          })
        }>
        <Spacer position="bottom" size="large">
          <RestaurentCard
            restaurent={item}
            style={{ transform: [{ scale: 0.9 }] }}
          />
        </Spacer>
      </Pressable>
    </>
  );
  return (
    <View>
      <FlatList
        data={favourites}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.key}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
};
