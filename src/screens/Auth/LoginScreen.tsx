import React from "react";
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

const LoginScreen = () => {
  const navigation = useNavigation();

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
          <Text style={styles.inputTitle}>username</Text>
          <TextInput
            placeholder=". . ."
            placeholderTextColor="#D3D3D3" // Light grey color
            style={styles.input}
          />
          <Text style={styles.inputTitle}>password</Text>
          <TextInput
            placeholder=". . ."
            placeholderTextColor="#D3D3D3" // Light grey color
            style={styles.input}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={styles.buttonGold}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

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
    marginBottom: 20,
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
    backgroundColor: "#FFE500", // Change this to your preferred color
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
