import React, { useState } from "react";
import { Auth } from 'aws-amplify';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Amplify } from 'aws-amplify';
import awsExports from '../../aws-exports';

// Configure Amplify with the awsExports settings
Amplify.configure(awsExports);

const RegisterScreen = () => {
  const [email, setEmail] = useState(""); // Email input
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  // Handle the user registration
  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email, // Use email for registration
        },
      });
      console.log('Sign up successful!', user);
      navigation.navigate("Verify", { username });
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../../assets/images/logo.png")}
            style={styles.logo}
          />
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.inputTitle}>Email</Text>
          <TextInput
            placeholder="example@example.com"
            placeholderTextColor="#D3D3D3"
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Text style={styles.inputTitle}>Username</Text>
          <TextInput
            placeholder=". . ."
            placeholderTextColor="#D3D3D3"
            style={styles.input}
            onChangeText={(text) => setUsername(text)}
          />
          <Text style={styles.inputTitle}>Password</Text>
          <TextInput
            placeholder=". . ."
            placeholderTextColor="#D3D3D3"
            style={styles.input}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <TouchableOpacity style={styles.buttonGold} onPress={onSubmit}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    marginTop: 0,
    marginBottom: 0,
    alignItems: "center",
  },
  logo: {
    width: 400,
    height: 400,
  },
  formContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  inputTitle: {
    color: "#000",
    fontSize: 20,
    fontFamily: "Albert Sans",
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#000",
    width: "100%",
    height: 75,
    borderRadius: 50,
    color: "#fff",
    fontFamily: "Albert Sans",
    fontSize: 30,
    paddingLeft: 30,
    marginBottom: 20, // Add margin for spacing
  },
  buttonGold: {
    backgroundColor: "#FFE500",
    padding: 10,
    borderRadius: 90,
    width: "80%",
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 50,
    fontFamily: "Albert Sans",
  },
});
