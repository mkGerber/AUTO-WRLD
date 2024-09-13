import React, { useState } from "react";
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

const RegisterScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigation = useNavigation();

  const formatPhoneNumber = (input) => {
    // Remove non-digit characters
    const cleaned = ("" + input).replace(/\D/g, "");

    // Limit the length to 10 digits
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);

    // Format the phone number as (123) 456-7890
    if (match) {
      return [match[1], match[2], match[3]].filter(Boolean).join("-");
    }

    return input;
  };

  const handlePhoneNumberChange = (text) => {
    const formatted = formatPhoneNumber(text);
    setPhoneNumber(formatted);
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
          <Text style={styles.inputTitle}>phone number</Text>
          <TextInput
            placeholder="123-456-7890"
            placeholderTextColor="#D3D3D3" // Light grey color
            style={styles.input}
            keyboardType="phone-pad" // Numeric keyboard for phone numbers
            maxLength={12} // Allow hyphens and 10 digits
            value={phoneNumber}
            onChangeText={handlePhoneNumberChange}
          />
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
