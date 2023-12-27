/** @format */
import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { View } from "react-native";
import { LocationContext } from "../../../services/location/location.context";

const SearchView = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  useEffect(() => {
    search(searchKeyword);
  }, []);
  return (
    <SearchView>
      <Searchbar
        placeholder="Search for a location"
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
