/** @format */

import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { theme } from "../theme";
import { RestaurentNavigator } from "./restaurent.navigator";
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  const tabBarIconColor = theme.colors.ui.primary;
  const activeTabBarIconColor = theme.colors.ui.error;
  return (
    <Tab.Navigator
      initialRouteName="Restaurents"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === "Restaurents") {
            iconName = "restaurents";
          } else if (route.name === "Settings") {
            iconName = "settings";
          } else if (route.name === "Map") {
            iconName = "map-marked-alt";
          }

          return <FontAwesome5 name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: activeTabBarIconColor,
        tabBarInactiveTintColor: tabBarIconColor,
      })}>
      <Tab.Screen
        name="Restaurents"
        component={RestaurentNavigator}
        options={{
          headerShown: false,
          tabBarLabel: "Restaurents",
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-restaurant-sharp" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Map",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="map-marked-alt" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};
