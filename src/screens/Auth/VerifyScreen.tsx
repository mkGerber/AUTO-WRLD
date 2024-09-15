import React, { useState, useRef } from "react";
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
import { useNavigation, useRoute } from "@react-navigation/native";
import { Amplify } from 'aws-amplify';
import awsExports from '../../aws-exports';

Amplify.configure(awsExports);

const VerifyScreen = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const navigation = useNavigation();
  const route = useRoute();
  const { username } = route.params;

  // Refs for each input box
  const inputRefs = useRef([]);

  const handleChange = (text, index) => {
    let newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Move to next input automatically if a number is entered
    if (text && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    // Handle backspace
    if (e.nativeEvent.key === 'Backspace' && index > 0 && code[index] === "") {
      inputRefs.current[index - 1].focus();
    }
  };

  const onVerify = async () => {
    try {
      const verificationCode = code.join(""); // Combine the code digits into one string
      await Auth.confirmSignUp(username, verificationCode);
      console.log('Verification successful!');
      navigation.navigate("CreateAccount", { username });
    } catch (error) {
      console.error('Error verifying code:', error);
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
          <Text style={styles.inputTitle}>Verify Your Email</Text>
          <View style={styles.codeContainer}>
            {code.map((digit, index) => (
              <TextInput
                key={index}
                value={digit}
                onChangeText={(text) => handleChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                maxLength={1}
                keyboardType="numeric"
                style={styles.inputBox}
                placeholder="-"
                placeholderTextColor="#D3D3D3"
                textAlign="center"
                ref={(ref) => (inputRefs.current[index] = ref)} // Assign the input ref
              />
            ))}
          </View>
        </View>
        <TouchableOpacity style={styles.buttonGold} onPress={onVerify}>
          <Text style={styles.buttonText}>VERIFY</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.resendText}>Resend</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default VerifyScreen;

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
    alignItems: 'center',
  },
  inputTitle: {
    color: "#000",
    fontSize: 20,
    fontFamily: "Albert Sans",
    marginBottom: 10,
    textAlign: 'center',
  },
  codeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%", // Adjust the width according to the desired spacing
    marginBottom: 20,
  },
  inputBox: {
    backgroundColor: "#000",
    width: 50,
    height: 75,
    borderRadius: 10,
    color: "#fff",
    fontFamily: "Albert Sans",
    fontSize: 30,
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
  resendText: {
    marginTop: 10,
    color: "#000",
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
