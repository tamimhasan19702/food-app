/** @format */

import React, { useContext, useState } from "react";
import {
  AccountBackground,
  AccountContainer,
  AccountButton,
  AccountInput,
} from "../components/account.styles";
import { Spacer } from "../../spacer/spacer";
import { Text } from "react-native-paper";
import { AuthContext } from "../../../services/authentication/authenticationContext";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, isError } = useContext(AuthContext);
  return (
    <AccountBackground>
      <AccountContainer>
        <Spacer size={"large"}>
          <AccountInput
            label="E-mail"
            value={email}
            placeholder="Enter your email"
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(u) => setEmail(u)}
          />
        </Spacer>
        <Spacer size={"large"}>
          <AccountInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            secure
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>
        {isError && (
          <Spacer size="large">
            <Text>{isError}</Text>
          </Spacer>
        )}
        <Spacer size={"large"}>
          <AccountButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => onLogin(email, password)}>
            Login
          </AccountButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
