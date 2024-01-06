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
          resizeMode="cover"
          source={require("../../../../assets/watermelon.json")}
          autoPlay
          loop
        />
      </AnimationWrapper>

      <Title>Meals To Go</Title>
      <AccountContainer>
        <AccountButton
          icon="lock-open-outline"
          mode="contained"
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
