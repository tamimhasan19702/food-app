/** @format */

import styled from "styled-components/native";
import { ImageBackground, View } from "react-native";
import { Button } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { TextInput } from "react-native-paper";

export const AccountBackground = styled(ImageBackground).attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountView = styled(View)`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled(View)`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AccountButton = styled(Button).attrs({
  buttonColor: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
  &:active {
    transform: scale(1.5);
    transition: all 0.5s ease;
  }
`;

export const AccountInput = styled(TextInput)`
  width: 300px;
`;
