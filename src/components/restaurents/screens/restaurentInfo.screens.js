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
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchView = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurentView = styled(View)`
  display: flex;
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;
