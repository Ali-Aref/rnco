import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import tw from "../tw";
import { AntDesign, Entypo, MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useDeviceContext } from "twrnc";
import Card from "../components/ui/Card";
import { RootSiblingParent } from "react-native-root-siblings";
import Toggle from "../components/ui/toggle";

export default function ToggleShowcase() {
  useDeviceContext(tw);

  return (
    <RootSiblingParent>
      <ScrollView style={tw`flex-1 view`}>
        <StatusBar style="dark" />
        <View style={tw`vstack my-10 px-4 gap-4`}>
          <Card title="Toggles" contentStyle={tw`hstack justify-evenly`}>
            <Toggle
              value={true}
              onChange={(val) => {}}
              activeIcon={
                <AntDesign name="check" size={30} style={tw`text-success`} />
              }
              inactiveIcon={
                <Entypo name="cross" size={30} style={tw`text-destructive`} />
              }
            />
            <Toggle
              value={true}
              onChange={(val) => {}}
              activeIcon={
                <Entypo name="light-up" size={30} style={tw`text-black`} />
              }
              inactiveIcon={
                <MaterialIcons
                  name="nightlight"
                  size={30}
                  style={tw`text-black`}
                />
              }
            />
            <Toggle
              value={true}
              onChange={(val) => {}}
              activeIcon={
                <Entypo name="eye" size={30} style={tw`text-black`} />
              }
              inactiveIcon={
                <Entypo name="eye-with-line" size={30} style={tw`text-black`} />
              }
            />
          </Card>
        </View>
      </ScrollView>
    </RootSiblingParent>
  );
}
