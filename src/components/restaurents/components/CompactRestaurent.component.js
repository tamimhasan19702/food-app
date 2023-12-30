/** @format */
import { Image, Platform } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { Text } from "../../typography/text.component";
import { WebView } from "react-native-webview";

const RestaurentImage = styled(Image)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;
const RestaurentWebView = styled(WebView)`
  border-radius: 20px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
  border-radius: 20px;
`;

const isAndroid = Platform.OS === "android";
export default function CompactRestaurant({ restaurent }) {
  const Image = isAndroid ? RestaurentWebView : RestaurentImage;
  return (
    <Item>
      {restaurent.photos && restaurent.photos[0] && (
        <Image source={{ uri: restaurent.photos[0] }} />
      )}
      <Text center variant="caption" numberOfLines={3}>
        {restaurent.name}
      </Text>
    </Item>
  );
}