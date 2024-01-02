/** @format */

import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Account } from "../../components/account/screens/account.screens";
import { Login } from "../../components/account/screens/login.screens";
import { Register } from "../../components/account/screens/register.screens";

const Stack = createStackNavigator();
export const AccountNavigator = () => {
  return (
    <Stack.Navigator headerMode={"none"}>
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};
