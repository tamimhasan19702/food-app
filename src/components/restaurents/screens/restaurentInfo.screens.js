/** @format */

import React, { useContext, useState } from "react";
import { View, FlatList, Pressable } from "react-native";
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

        {isToggled && (
          <FavouritesBar
            favourites={favourites}
            onNavigate={navigation.navigate}
          />
        )}

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
