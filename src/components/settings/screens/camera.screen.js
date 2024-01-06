/** @format */

import { View, Text, Pressable } from "react-native";
import React, { useRef, useState, useEffect, useContext } from "react";
import { Camera, CameraType } from "expo-camera";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import { Button } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../../services/authentication/authenticationContext";

const ProfileCamera = styled(Camera)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ButtonView = styled(View)`
  position: absolute;
  bottom: 20px;
  align-items: center;
`;

const CameraIcon = styled(Button)`
  color: white;
  padding: 15px;
  background-color: #000;
  border-radius: 80px;
  opacity: 0.8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const CameraScreen = ({ navigation }) => {
  const [permission, setPermission] = useState(null);
  const cameraRef = useRef();
  const { user } = useContext(AuthContext);

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}_profilePhoto`, photo.uri);
      navigation.goBack();
    }
  };

  useEffect(() => {
    const requestCameraPermission = async () => {
      try {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setPermission(status === "granted");
      } catch (error) {
        console.error(error);
      }
    };
    requestCameraPermission();
  }, []);

  return (
    <ProfileCamera
      ref={(camera) => (cameraRef.current = camera)}
      type={CameraType.front}>
      <ButtonView>
        <CameraIcon
          icon={"camera"}
          size={100}
          color={"#000"}
          mode="contained"
          onPress={snap}>
          Click here
        </CameraIcon>
      </ButtonView>
      <StatusBar style="auto" />
    </ProfileCamera>
  );
};
