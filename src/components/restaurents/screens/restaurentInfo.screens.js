/** @format */

import React, { useContext } from "react";
import { View, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurentCard from "../components/restaurentCard.component";
import styled from "styled-components/native";
import { Spacer } from "../../spacer/spacer";
import { SafeView } from "../../safeArea.component";
import { restaurantsContext } from "../../../services/restaurents/restaurents.context";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

const SearchView = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled(View)`
  position: absolute;
  left: 50%;
  top: 50%;
`;

export const RestaurentInfoScreen = () => {
  const renderItem = ({ item }) => (
    <>
      <Spacer position="bottom" size="large">
        <RestaurentCard restaurent={item} />
      </Spacer>
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
        <SearchView>
          <Searchbar />
        </SearchView>
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
