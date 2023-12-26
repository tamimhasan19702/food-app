/** @format */

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { RestaurentInfoScreen } from "./src/components/restaurents/screens/restaurentInfo.screens";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { RestaurantsProvider } from "./src/services/restaurents/restaurents.context";
import { LocationContextProvider } from "./src/services/location/location.context";

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const TabIcon = {
  Restaurents: "md-restaurant-sharp",
  Map: "md-map",
  Settings: "md-settings",
};

const screenOptions = ({ route }) => ({
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
});
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
        component={RestaurentInfoScreen}
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
export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsProvider>
            <NavigationContainer>
              <MyTabs />
            </NavigationContainer>
          </RestaurantsProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
