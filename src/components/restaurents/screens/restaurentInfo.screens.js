/** @format */

import React, { useContext } from "react";
import { View, SafeAreaView, StatusBar, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurentCard from "../components/restaurentCard.component";
import styled from "styled-components/native";
import { Spacer } from "../../spacer/spacer";
import { SafeView } from "../../safeArea.component";
import { restaurantsContext } from "../../../services/restaurents/restaurents.context";

const SearchView = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const RestaurentInfoScreen = () => {
  const renderItem = ({ item }) => (
    <>
      <Spacer position="bottom" size="large">
        <RestaurentCard restaurent={item} key={item.name} />
      </Spacer>
    </>
  );

  const { restaurents, isLoading, isError } = useContext(restaurantsContext);

  return (
    <>
      <SafeView>
        <SearchView>
          <Searchbar />
        </SearchView>
        <FlatList
          data={restaurents}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ padding: 16 }}
        />
      </SafeView>
    </>
  );
};
