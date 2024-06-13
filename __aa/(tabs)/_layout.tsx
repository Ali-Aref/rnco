import { AntDesign } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";

export default function TabsLayout() {
	console.log("tabslayout called")
  return (
    <Tabs screenOptions={{
			tabBarShowLabel: false,
		}}>
      <Tabs.Screen name="index" options={{
				headerShown: false,
				tabBarIcon(props) {
				    return <AntDesign name="home" size={25} />
				},
			}} />
      <Tabs.Screen name="HomeTab" options={{
				tabBarIcon(props) {
				    return <AntDesign name="plus" size={25} />
				},
			}} />
      <Tabs.Screen name="ProfileTab" options={{
				tabBarIcon(props) {
				    return <AntDesign name="user" size={25} />
				},
			}} />
    </Tabs>
  );
}
