/** @format */

import { AuthContext } from "../../../services/authentication/authenticationContext";
import React, { useContext } from "react";
import { SafeView } from "../../safeArea.component";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components/native";
import { Spacer } from "../../spacer/spacer";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[2]};
`;
const AvatarContainer = styled(View)`
  margin-top: 20px;
  align-items: center;
`;
export const SettingScreen = ({ navigation }) => {
  const { onSignOut, user } = useContext(AuthContext);
  return (
    <SafeView>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          <Avatar.Icon size={180} icon="account" backgroundColor="#D0421B" />
        </TouchableOpacity>
        <Spacer position={"top"} size="large" />
        <Text>{user.email}</Text>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Update Profile"
          description="Change your profile picture"
          left={(props) => <List.Icon {...props} color="black" icon="camera" />}
          onPress={() => navigation.navigate("Camera")}
        />
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onSignOut}
        />
      </List.Section>
    </SafeView>
  );
};
