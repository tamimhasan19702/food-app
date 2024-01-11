/** @format */

import React from "react";

import {
  AccountBackground,
  AccountContainer,
  AccountView,
  AccountButton,
  Title,
  AnimationWrapper,
} from "../components/account.styles";
import { Spacer } from "../../spacer/spacer";
import LottieView from "lottie-react-native";

export const Account = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountView />

      <AnimationWrapper>
        <LottieView
          key="animation"
          resizeMode="contain"
          source={{
            uri: "https://lottie.host/030ac1e8-cb53-4516-96ca-ee5f0b9461b0/hIqie75fea.json",
          }}
          autoPlay
          loop
          style={{ width: 400, height: 300 }}
        />
      </AnimationWrapper>

      <Title>Meals To Go</Title>
      <AccountContainer>
        <AccountButton
          icon="lock-open-outline"
          mode="cover"
          onPress={() => navigation.navigate("Login")}>
          Login
        </AccountButton>
        <Spacer size={"large"} />
        <AccountButton
          icon="email"
          mode="contained"
          onPress={() => navigation.navigate("Register")}>
          Register
        </AccountButton>
        <Spacer />
      </AccountContainer>
    </AccountBackground>
  );
};
