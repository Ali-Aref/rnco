import React from "react";
import { Slot, Stack } from "expo-router";
import { Text, View } from "react-native";
import tw from "../tw";

export default function RootLayout() {
	console.log("root layout called")
  return (
    <Stack
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
