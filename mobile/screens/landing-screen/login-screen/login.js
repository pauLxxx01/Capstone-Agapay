import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import SubmitButton from "../../../components/SubmitButton";
import InputBox from "../../../components/TextFieldBox";
import { AuthContext } from "../../../context/authContext";
import { createTwoButtonAlert } from "../../../components/alert/Alert";

//"http://192.168.18.42:8080/admin/auth/mobile/user/login",
const { width, height } = Dimensions.get("window");

const Login = ({ navigation }) => {
  //global state
  const [state, setState] = useContext(AuthContext);
  const [error, setError] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);


  const handleSubmit = async () => {
    try {
      console.log("USERS: ", userId, password);
      if (!userId && !password) {
        Alert.alert(
          "Alert",
          "Please provide both student number and password!",
          [{ text: "OK" }]
        );
        console.log(error);
        setLoading(true);
        return;
      }
      if (!userId) {
        alert("Please enter your Student Number");
        console.log(error);
        setLoading(true);
        return;
      }
      if (!password) {
        alert("Please enter your Password!");
        console.log(error);
        setLoading(true);
        return;
      }

      const UpperCase = userId.toUpperCase();
      setLoading(false);
      const { data } = await axios.post("/mobile/user/login", {
        userId: UpperCase,
        password,
      });

      if (!data) {
        Alert.alert("Login failed! No data received.");
        console.log("Login failed! No data received.");
        setLoading(false);
        return;
      }

      console.log(data);
      setState(data);
      await AsyncStorage.setItem("@auth", JSON.stringify(data));
      alert(data && data.message);
      navigation.navigate("Homepage");

      getLocalStorageData();
    } catch (error) {
      alert(error);
      setLoading(false);
      console.log(error);
    }
  };

  //Temp function to check storage data
  const getLocalStorageData = async () => {
    let dataString = await AsyncStorage.getItem("@auth");
    let data = dataString ? JSON.parse(dataString) : null;
    console.log("Full data from AsyncStorage:", data);
    console.log("Local Storage user:", data ? data.user : "No data found");
  };

  return (
    <ImageBackground
      source={require("../../../assets/agapay/background/agapaybg.jpg")}
      style={styles.background}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0} // Ensures the keyboard avoids the view correctly
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Text style={styles.backButtonText}></Text>
          </TouchableOpacity>

          <Text style={styles.welcomeText}>Welcome ka-AGAPAY!</Text>
          <Text style={styles.subText}>Log in as User</Text>
          <Image
            source={require("../../../assets/agapay/logo/logo.png")}
            style={styles.logo}
          />
          <InputBox
            styleInputBox={styles.input}
            inputTitle={"Name"}
            autoComplete="userId"
            placeholder={"Student Number"}
            value={userId}
            setValue={setUserId}
          />

          <InputBox
            styleInputBox={styles.input}
            inputTitle={"Password"}
            placeholder={"Password"}
            secureTextEntry={true}
            autoComplete="password"
            value={password}
            setValue={setPassword}
          />

          <SubmitButton
            styleBtn={styles.loginButton}
            styleTxt={styles.loginButtonText}
            btnTitle="Login"
            loading={loading}
            handleSubmit={handleSubmit}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: width * 0.05,
  },
  background: {
    width: "100%",
    height: "100%",
  },
  backButton: {
    position: "absolute",
    top: height * 0.05,
    left: width * 0.05,
    zIndex: 10,
  },
  backButtonText: {
    fontSize: width * 0.08,
    color: "#7E0000",
  },
  welcomeText: {
    fontSize: width * 0.08,
    fontWeight: "bold",
    color: "#000",
    textAlign: "left",
    marginBottom: height * 0.01,
  },
  subText: {
    fontSize: width * 0.05,
    color: "#555",
    textAlign: "left",
    marginBottom: height * 0.03,
    fontWeight: "700",
  },
  logo: {
    width: width * 0.7,
    height: height * 0.3,
    alignSelf: "center",
    resizeMode: "contain",
    marginBottom: height * 0.05,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.05,
    marginBottom: height * 0.02,
    fontSize: width * 0.045,
    color: "#000",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
  },
  loginButton: {
    alignSelf: "center",
    backgroundColor: "#800000",
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.2,
    borderRadius: 25,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    marginTop: height * 0.03,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: width * 0.05,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: height * 0.01,
  },
});
export default Login;
