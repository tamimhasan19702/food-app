/** @format */

import React, { useContext } from "react";
import { FlatList, Pressable, View, Text } from "react-native";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import RestaurentCard from "../../restaurents/components/restaurentCard.component";
import { Spacer } from "../../spacer/spacer";
import styled from "styled-components/native";
import { FadeInView } from "../../animations/fade.animation";

const NoFavourite = styled.View`
  align-items: center;
  justify-content: center;
`;
export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  const renderItem = ({ item }) => (
    <>
      <FadeInView>
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
      </FadeInView>
    </>
  );
  return (
    <View>
      {favourites.length > 0 ? (
        <FlatList
          data={favourites}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.key}
          contentContainerStyle={{ padding: 16 }}
        />
      ) : (
        <NoFavourite>
          <Spacer position="top" size="large" />
          <Text>No Favourites added yet!! ☺</Text>
          <Spacer position="bottom" size="large" />
        </NoFavourite>
      )}
    </View>
  );
};
