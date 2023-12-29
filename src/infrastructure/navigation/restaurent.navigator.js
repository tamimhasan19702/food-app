/** @format */
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurentInfoScreen } from "../../components/restaurents/screens/restaurentInfo.screens";
import RestaurentDetails from "../../components/restaurents/screens/restaurentDetails.screen";
import { Text } from "react-native";
const RestaurentStack = createStackNavigator();

export const RestaurentNavigator = () => {
  return (
    <RestaurentStack.Navigator
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}>
      <RestaurentStack.Screen
        name="Restaurants"
        component={RestaurentInfoScreen}
        options={{
          headerShown: false,
        }}
      />
      <RestaurentStack.Screen
        name="RestaurentDetail"
        component={RestaurentDetails}
        options={{
          headerShown: false,
        }}
      />
    </RestaurentStack.Navigator>
  );
};
