import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../navigation/types"; // Define your types here

// Explicitly typing navigation
type HomeScreenNavigationProp = NativeStackNavigationProp<
  AppStackParamList,
  "Home"
>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/logo.png")}
        style={styles.logo}
      />
      <TouchableOpacity
        style={styles.buttonBlack}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonGold}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.buttonText}>REGISTER</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 400,
    height: 400,
    marginBottom: 20,
    marginTop: 100,
  },
  buttonBlack: {
    backgroundColor: "#000", // Change this to your preferred color
    padding: 10,
    borderRadius: 90,
    width: "80%",
    alignItems: "center",
    marginVertical: 10,
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
