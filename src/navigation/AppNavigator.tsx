import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import screens
import LoggedOutScreen from "../screens/Home/LoggedOutScreen";
import LoginScreen from "../screens/Auth/LoginScreen";
import RegisterScreen from "../screens/Auth/RegisterScreen";
import VerifyScreen from "../screens/Auth/VerifyScreen";
import CreateAccountScreen from "../screens/CreateAccount/CreateAccountScreen";
// Main Stack Navigator
const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="LoggedOut"
          component={LoggedOutScreen}
          options={{ headerShown: false }} // This removes the header from HomeScreen
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} // Removes header from LoginScreen
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }} // Removes header from RegisterScreen
        />
        <Stack.Screen
          name="Verify"
          component={VerifyScreen}
          options={{ headerShown: false }} // Removes header from VerifyScreen
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccountScreen}
          options={{ headerShown: false }} // Removes header from CreateAccountScreen
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
