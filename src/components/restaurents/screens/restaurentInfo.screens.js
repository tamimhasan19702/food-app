/** @format */

import React from "react";
import { View, SafeAreaView, StatusBar, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurentCard from "../components/restaurentCard.component";
import styled from "styled-components/native";
import { Spacer } from "../../spacer/spacer";
import { SafeView } from "../../safeArea.component";

const SearchView = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const RestaurentInfoScreen = () => {
  const data = [
    { name: 1 },
    { name: 2 },
    { name: 3 },
    { name: 4 },
    { name: 5 },
  ];
  const renderItem = ({ item }) => (
    <>
      <Spacer position="bottom" size="large" key={item.name}>
        <RestaurentCard />
      </Spacer>
    </>
  );
  return (
    <>
      <SafeView>
        <SearchView>
          <Searchbar />
        </SearchView>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ padding: 16 }}
        />
      </SafeView>
    </>
  );
};
