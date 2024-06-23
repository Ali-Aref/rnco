import React from "react";
import { Image, View } from "react-native";
import tw from "../../tw";

export default function AuthLogo() {
  return (
    <Image
      style={tw`w-64 h-64`}
      resizeMode="contain"
      source={require("../../assets/images/logo.png")}
    />
  );
}
