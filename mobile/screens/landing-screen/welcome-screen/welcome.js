import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const statusBarHeight =
  Dimensions.get("screen").height - Dimensions.get("window").height;
const fullScreenHeight = Dimensions.get("screen").height;
const { width, height } = Dimensions.get("window");

console.log(
  `Device Dimensions: \n- Status bar Height: ${statusBarHeight.toFixed(
    2
  )}\n- Screen Height: ${Dimensions.get("screen").height.toFixed(
    2
  )}\n- Full Screen Height: ${fullScreenHeight.toFixed(2)}`
);

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require("../../../assets/agapay/background/agapaybg.jpg")}
        style={styles.background}
      >
        <Image
          source={require("../../../assets/agapay/logo/logo.png")}
          style={styles.logo}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SlidingImg")}
        >
          <Text style={styles.buttonText}>Get started </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: fullScreenHeight,
  },
  logo: {
    width: 350,
    height: 350,
    resizeMode: "contain",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#7E0000",
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 25,
    elevation: 5, // Adds shadow on Android
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84, // Adds shadow on iOS
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
