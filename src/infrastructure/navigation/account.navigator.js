/** @format */

import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const accountStack = createStackNavigator();
export const AccountNavigator = () => {
  return (
    <View>
      <Text>AccountNavigator</Text>
    </View>
  );
};
