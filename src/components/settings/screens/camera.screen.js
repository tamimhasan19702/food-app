/** @format */

import { View, Text, TouchableOpacity } from "react-native";
import React, { useRef, useState, useEffect } from "react";

import { Camera, CameraType } from "expo-camera";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";

const ProfileCamera = styled(Camera)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ButtonView = styled(View)`
  background-color: #fff;
  align-self: flex-end;
`;

export const CameraScreen = () => {
  const [permission, setPermission] = useState(null);
  const cameraRef = useRef();
  const [photo, setPhoto] = useState();

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log(photo);
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
        <Button title="Take pic" onPress={snap} />
      </ButtonView>
      <StatusBar style="auto" />
    </ProfileCamera>
  );
};
