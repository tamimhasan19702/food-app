/** @format */

import { View, Text, TouchableOpacity } from "react-native";
import React, { useRef, useState, useEffect } from "react";

import { Camera, CameraType } from "expo-camera";
import styled from "styled-components/native";

const ProfieCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

export const CameraScreen = () => {
  const [permission, setPermission] = useState(null);
  const cameraRef = useRef();

  useEffect(() => {
    const requestCameraPermission = async () => {
      try {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setPermission(status === "granted");
      } catch (error) {
        <View>
          <Text>No Access of Camera Given</Text>
        </View>;
      }
    };
    requestCameraPermission();
  }, []);
  return (
    <ProfieCamera
      ref={(camera) => (cameraRef.current = camera)}
      type={CameraType.front}></ProfieCamera>
  );
};
