/** @format */

import React from "react";

import {
  AccountBackground,
  AccountContainer,
  AccountView,
  AccountButton,
  Title,
} from "../components/account.styles";
import { Spacer } from "../../spacer/spacer";
export const Account = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountView />
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
