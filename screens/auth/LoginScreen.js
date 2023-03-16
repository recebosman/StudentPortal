import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import React, { useState } from "react";

const LoginScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(true);

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
            marginBottom: 10,
          }}
        >
          Login
        </Text>
        <TextInput label="Email" />
        <TextInput
          label="Password"
          secureTextEntry={true}
          right={<TextInput.Icon icon="eye" />}
          onPress={() => alert("Pressed")}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: "700",
            }}
          >
            Forgot Password?
          </Text>
          <Button
            mode="outlined"
            style={{
              borderRadius: 10,
              padding: 6,
              borderColor: "white",
              borderWidth: 2,
              backgroundColor: "white",
            }}
          >
            <Text
              style={{ fontWeight: "bold", color: "#FF8A8A", fontSize: 16 }}
            >
              Login
            </Text>
          </Button>
        </View>
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
          Don't have an account?{" "}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
            lineHeight: 20,
          }}
          onPress={() => navigation.navigate("RegisterScreen")}
        >
          Register
        </Text>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
