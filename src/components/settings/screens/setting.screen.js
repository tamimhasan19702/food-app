/** @format */

import { AuthContext } from "../../../services/authentication/authenticationContext";
import React, { useContext } from "react";
import { SafeView } from "../../safeArea.component";
import { List } from "react-native-paper";
export const SettingScreen = ({ navigation }) => {
  const { onSignOut } = useContext(AuthContext);
  return (
    <SafeView>
      <List.Section>
        <List.Item
          style={{ padding: 16 }}
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <List.Item
          style={{ padding: 16 }}
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onSignOut}
        />
      </List.Section>
    </SafeView>
  );
};
