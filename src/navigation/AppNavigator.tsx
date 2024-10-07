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
      <Stack.Navigator
        initialRouteName="LoggedOut"
        screenOptions={{
          headerShown: false, // Remove headers for all screens
          gestureEnabled: true, // Enable swipe gestures
          transitionSpec: {
            open: { animation: 'timing', config: { duration: 500 } },
            close: { animation: 'timing', config: { duration: 500 } },
          },
          cardStyleInterpolator: ({ current, next, layouts }) => {
            const translateX = current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            });

            return {
              cardStyle: {
                transform: [{ translateX }],
              },
            };
          },
        }}
      >
        <Stack.Screen
          name="LoggedOut"
          component={LoggedOutScreen}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
        />
        <Stack.Screen
          name="Verify"
          component={VerifyScreen}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccountScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
