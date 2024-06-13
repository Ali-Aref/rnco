import React from "react";
import { Stack } from "expo-router";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useDeviceContext } from "twrnc";
import tw from "../tw";

export default function RootLayout() {
  useDeviceContext(tw);

	console.log("sitemap: ")

  return (
    <>
      <StatusBar
        translucent={false}
        style="auto"
        backgroundColor={"transparent"}
      />
      <Stack initialRouteName="(auth)" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" />
        {/* 
        <Stack.Screen name="(tabs)" />
					*/}
      </Stack>
    </>
  );
}
