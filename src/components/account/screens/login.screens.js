/** @format */

import React, { useContext, useState } from "react";
import {
  AccountBackground,
  AccountContainer,
  AccountButton,
  AccountInput,
} from "../components/account.styles";
import { Spacer } from "../../spacer/spacer";
import { AuthContext } from "../../../services/authentication/authenticationContext";
import { TextInput } from "react-native-paper";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error } = useContext(AuthContext);
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
        {error && (
          <Spacer size="large">
            <Text variant="error">{error}</Text>
          </Spacer>
        )}
        <Spacer size={"large"}>
          <AccountButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => console.warn("Pressed login button")}>
            Login
          </AccountButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
