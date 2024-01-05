/** @format */

import React, { useContext, useState } from "react";
import { View, FlatList, Pressable, Text } from "react-native";
import RestaurentCard from "../components/restaurentCard.component";
import styled from "styled-components/native";
import { Spacer } from "../../spacer/spacer";
import { SafeView } from "../../safeArea.component";
import { restaurantsContext } from "../../../services/restaurents/restaurents.context";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { Search } from "../components/search.component";
import { FavouritesBar } from "../components/favouritesBar.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled(View)`
  position: absolute;
  left: 50%;
  top: 50%;
`;

const NoFavourite = styled.View`
  align-items: center;
  justify-content: center;
`;

export const RestaurentInfoScreen = ({ navigation }) => {
  const [isToggled, setIsToggled] = useState(false);
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

  const { restaurents, isLoading, isError } = useContext(restaurantsContext);
  return (
    <>
      <SafeView>
        {isLoading && (
          <LoadingContainer>
            <Loading size={50} animating="true" color={MD2Colors.red800} />
          </LoadingContainer>
        )}

        <Search
          isFavouritesToggle={isToggled}
          onFavouritesToggle={() => setIsToggled(!isToggled)}
        />

        {isToggled &&
          (favourites.length > 0 ? (
            <FavouritesBar
              favourites={favourites}
              onNavigate={navigation.navigate}
            />
          ) : (
            <NoFavourite>
              <Spacer position="top" size="large" />
              <Text>No Favourites added yet!! ☺</Text>
              <Spacer position="bottom" size="large" />
            </NoFavourite>
          ))}

        <FlatList
          data={restaurents}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.key}
          contentContainerStyle={{ padding: 16 }}
        />
      </SafeView>
    </>
  );
};
