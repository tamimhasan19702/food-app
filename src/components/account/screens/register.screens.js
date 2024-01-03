/** @format */

import React, { useContext, useState } from "react";
import {
  AccountBackground,
  AccountContainer,
  AccountButton,
  AccountInput,
  Title,
  ErrorContainer,
} from "../components/account.styles";
import { Spacer } from "../../spacer/spacer";
import { Text } from "../../typography/text.component";
import { AuthContext } from "../../../services/authentication/authenticationContext";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

export const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const { onRegister, isError, isLoading } = useContext(AuthContext);
  return (
    <AccountBackground>
      <Title>Meals To Go</Title>
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
        <Spacer size={"large"}>
          <AccountInput
            label="Repeat Password"
            value={repeatPassword}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            secure
            onChangeText={(p) => setRepeatPassword(p)}
          />
        </Spacer>
        {isError && (
          <ErrorContainer>
            <Text variant="error">{isError}</Text>
          </ErrorContainer>
        )}
        <Spacer size={"large"}>
          {!isLoading ? (
            <AccountButton
              icon="mail"
              mode="contained"
              onPress={() => onRegister(email, password, repeatPassword)}>
              Register
            </AccountButton>
          ) : (
            <ActivityIndicator animating={true} color={MD2Colors.blue300} />
          )}
        </Spacer>
      </AccountContainer>
      <Spacer size={"large"}>
        <AccountButton
          icon="arrow-left"
          mode="contained"
          onPress={() => navigation.goBack()}>
          Back
        </AccountButton>
      </Spacer>
    </AccountBackground>
  );
};
