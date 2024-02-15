/** @format */

import { AuthContext } from "../../../services/authentication/authenticationContext";
import React, { useContext, useState, useCallback } from "react";
import { SafeView } from "../../safeArea.component";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components/native";
import { Spacer } from "../../spacer/spacer";
import { View, Text } from "react-native";
import { TouchableOpacity, ImageBackground } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { colors } from "../../../infrastructure/theme/colors";

const TransparentSafeView = styled(SafeView)`
  background-color: transparent;
`;

const SettingsBackground = styled(ImageBackground).attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[2]};
  background-color: rgba(255, 255, 255, 0.5);
`;
const AvatarContainer = styled(View)`
  margin-top: 20px;
  align-items: center;
`;
export const SettingScreen = ({ navigation }) => {
  const { onSignOut, user } = useContext(AuthContext);
  const [profilePicture, setProfilePicture] = useState(null);
  const getProfilePicture = async (currentUser) => {
    const photo = await AsyncStorage.getItem(`${currentUser.uid}_profilePhoto`);
    setProfilePicture(photo);
  };

  useFocusEffect(
    useCallback(() => {
      getProfilePicture(user);
    }, [user])
  );

  return (
    <SettingsBackground>
      <TransparentSafeView>
        <AvatarContainer>
          <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
            {!profilePicture ? (
              <Avatar.Icon
                size={180}
                icon="account"
                backgroundColor={colors.brand.primary}
              />
            ) : (
              <Avatar.Image
                size={180}
                source={{ uri: profilePicture }}
                backgroundColor="#D0421B"
              />
            )}
          </TouchableOpacity>
          <Spacer position={"top"} size="large" />
          <Text>{user.email || user._tokenResponse.email}</Text>
        </AvatarContainer>
        <Spacer />
        <List.Section>
          <SettingsItem
            title="Update Profile"
            description="Change your profile picture"
            left={(props) => (
              <List.Icon {...props} color="black" icon="camera" />
            )}
            onPress={() => navigation.navigate("Camera")}
          />
          <Spacer />
          <SettingsItem
            title="Favourites"
            description="View your favourites"
            left={(props) => (
              <List.Icon {...props} color="black" icon="heart" />
            )}
            onPress={() => navigation.navigate("Favourites")}
          />
          <Spacer />
          <SettingsItem
            title="Logout"
            left={(props) => <List.Icon {...props} color="black" icon="door" />}
            onPress={onSignOut}
          />
        </List.Section>
      </TransparentSafeView>
    </SettingsBackground>
  );
};
