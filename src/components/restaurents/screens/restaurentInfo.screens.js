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
`;

export const RestaurentInfoScreen = () => {
  return (
    <>
      <SafeView>
        <SearchView>
          <Searchbar />
        </SearchView>
        <FlatList
          data={[
            { name: 1 },
            { name: 2 },
            { name: 3 },
            { name: 4 },
            { name: 5 },
          ]}
          renderItem={({ item }) => (
            <>
              <Spacer position="bottom" size="large">
                <RestaurentCard />
              </Spacer>
            </>
          )}
          keyExtractor={(item) => Math.random()}
          contentContainerStyle={{ padding: 16 }}
        />
      </SafeView>
    </>
  );
};
