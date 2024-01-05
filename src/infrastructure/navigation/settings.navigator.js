/** @format */

import Reactm, { useEffect } from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { SettingScreen } from "../../components/settings/screens/setting.screen";
const settingsStack = createStackNavigator();
export const SettingsNavigator = () => {
  return (
    <settingsStack.Navigator>
      <settingsStack.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          headerShown: false,
        }}
      />
    </settingsStack.Navigator>
  );
};
