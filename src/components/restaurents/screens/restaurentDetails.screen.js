/** @format */

import { View, Text } from "react-native";
import React from "react";
import SafeAreaView from "react-native-safe-area-view";
import RestaurentCard from "../components/restaurentCard.component";

export const RestaurentDetails = ({ route }) => {
  const { restaurent } = route.params;
  return (
    <SafeAreaView>
      <View style={{ padding: 16 }}>
        <RestaurentCard restaurent={restaurent} />
      </View>
    </SafeAreaView>
  );
};
