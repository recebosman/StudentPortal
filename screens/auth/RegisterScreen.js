import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import React, { useState } from "react";

const RegisterScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(true);
  console.log(showPassword);
  return (
    <ImageBackground
      source={require("../../assets/BackgroundAuth.png")}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <View
        style={{
          width: "100%",
          paddingHorizontal: 20,
          gap: 10,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 36,
            fontWeight: "700",
            marginTop: 36,
          }}
        >
          Register
        </Text>
        <TextInput label="Name" />
        <TextInput label="Email" />
        <TextInput
          label="Password"
          secureTextEntry={true}
          right={<TextInput.Icon icon="eye" />}
          onPress={() => alert("Pressed")}
        />

        <Button
          mode="outlined"
          style={{
            borderRadius: 10,
            padding: 6,
            borderColor: "white",
            borderWidth: 2,
            backgroundColor: "white",
            alignSelf: "flex-end",
          }}
        >
          <Text style={{ fontWeight: "bold", color: "#FF8A8A", fontSize: 16 }}>
            Register
          </Text>
        </Button>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          position: "absolute",
          bottom: 20,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontWeight: "400",
          }}
        >
          Already have an account?{" "}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
            lineHeight: 20,
          }}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          Login
        </Text>
      </View>
    </ImageBackground>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
