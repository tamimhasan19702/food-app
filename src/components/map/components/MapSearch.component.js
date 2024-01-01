/** @format */
import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { View, StatusBar } from "react-native";
import { LocationContext } from "../../../services/location/location.context";

const SearchView = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: absolute;
  z-index: 999;
  top: ${StatusBar.currentHeight}px;
  width: 100%;
`;

export const MapSearch = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchView>
      <Searchbar
        placeholder="Search for a location"
        icon={"map"}
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchView>
  );
};
