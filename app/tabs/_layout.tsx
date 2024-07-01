import { AntDesign } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import tw from "../../tw";

// import { Container } from './styles';

const mapIcons = (route: string) => {
  switch (route) {
    case "index":
      return "home";
    case "profile":
      return "user";
    default:
      return "lock1";
  }
};

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerTitleAlign: "center",
        tabBarShowLabel: false,
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          tabBarIcon: ({ color }) => (
            <>
              <View
                style={tw`absolute z-10 items-center justify-center w-5 h-5 top-1 right-5 bg-orange-500 rounded-full`}
              >
                <Text style={tw`text-xs text-white`}>99</Text>
              </View>
              <AntDesign size={28} name="message1" color={color} />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          tabBarIcon: ({ color }) => (
            <>
              <View
                style={tw`absolute z-10 items-center justify-center w-5 h-5 top-1 right-5 bg-orange-500 rounded-full`}
              >
                <Text style={tw`text-xs text-white`}>99</Text>
              </View>
            <AntDesign size={28} name="bells" color={color} />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign size={28} name="user" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
