import { Stack } from "expo-router";
import React from "react";
import { Image, View } from "react-native";
import tw from "../../tw";

export default function AuthLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" />
        <Stack.Screen name="register" />
      </Stack>
    </>
  );
}
