/** @format */

import { AppNavigator } from "./app.navigator";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

export default function Navigation() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
