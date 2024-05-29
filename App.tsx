import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Button from "./components/ui/Button";
import tw from "./tw";

export default function App() {
  return (
    <View style={tw`px-3 mt-5`}>
      <StatusBar style="auto" />
      <Text style={tw`font-bold text-2xl`}>Variants</Text>
      <View style={tw`flex flex-row gap-2`}>
        <Button variant="primary">Primary</Button>
        <Button variant="info">Info</Button>
        <Button variant="success">Success</Button>
        <Button variant="warn">Warning</Button>
        <Button variant="distructive">Error</Button>
      </View>
    </View>
  );
}
