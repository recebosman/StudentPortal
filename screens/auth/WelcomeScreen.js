import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Pressable,
} from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../assets/Background.png")}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
        position: "relative",
      }}
    >
      <View
        style={{
          marginLeft: 20,
          gap: 4,
        }}
      >
        <Image source={require("../../assets/SchoolLogo.png")} />
        <Text
          style={{
            fontSize: 36,
            fontWeight: "bold",
            color: "gray",
          }}
        >
          TCU's
        </Text>
        <Text
          style={{ fontSize: 24, fontWeight: "300" }}
        >{`Student Portal\nApplication`}</Text>

        <Image source={require("../../assets/TCU.png")} />
      </View>
      <Pressable
        style={{
          position: "absolute",
          bottom: 20,
          right: 20,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: "white",
          padding: 10,
        }}
        onPress={() => navigation.push("LoginScreen")}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "400",
            color: "white",
          }}
        >
          Get Started
        </Text>
      </Pressable>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
