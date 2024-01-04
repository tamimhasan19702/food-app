/** @format */

import { View, Text } from "react-native";
import React, { useContext } from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { theme } from "../theme";
import { RestaurentNavigator } from "./restaurent.navigator";
import { MapScreen } from "../../components/map/screens/MapView.screen";
import { AccountButton } from "../../components/account/components/account.styles";
import { AuthContext } from "../../services/authentication/authenticationContext";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { RestaurantsProvider } from "../../services/restaurents/restaurents.context";
function SettingsScreen() {
  const { onSignOut } = useContext(AuthContext);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
      <AccountButton title="logout" onPress={() => onSignOut()}>
        Logout
      </AccountButton>
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
        component={MapScreen}
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
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantsProvider>
          <MyTabs />
        </RestaurantsProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
