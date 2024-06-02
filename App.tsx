import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Button from "./components/ui/Button";
import tw from "./tw";

export default function App() {
  return (
    <View
      style={tw`flex flex-1 gap-2 items-center justify-center 
				dark:bg-black`}
    >
      <Button label="Click me" variant="primary" onPress={()=>{
				console.log("button pressed")
			}} />
      <Button label="Click me" variant="distructive" onPress={()=>{
				console.log("button pressed")
			}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
