/** @format */

import React from "react";
import { View, Text, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurentCard from "../components/restaurentCard.component";
import styled from "styled-components/native";

export const RestaurentInfoScreen = () => {
  return (
    <>
      <SafeView>
        <SearchView>
          <Searchbar />
        </SearchView>

        <RestaurentView>
          <RestaurentCard />
        </RestaurentView>
      </SafeView>
    </>
  );
};

const SafeView = styled(SafeAreaView)`
  display: flex;
  flex: 1;
  margin-top: ${StatusBar.currentHeight || 0};
`;

const SearchView = styled(View)`
  padding: 16px;
`;

const RestaurentView = styled(View)`
  display: flex;
  flex: 1;
  padding: 0px 16px;
`;
