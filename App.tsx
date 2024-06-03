import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import Button from "./components/ui/Button";
import tw from "./tw";
import IconButton from "./components/ui/IconButton";
import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useDeviceContext } from "twrnc";
import Card from "./components/ui/Card";
import Input from "./components/ui/Input";

export default function App() {
  useDeviceContext(tw);

  return (
    <ScrollView style={tw`flex-1 view`}>
      <StatusBar style="dark" />
      <View style={tw`vstack my-10 px-4 gap-4`}>
        <Card title="Create Project">
          <Text style={tw`text`}>Deploy your new project in one-click.</Text>
          <View style={tw`mt-4 vstack gap-4`}>
            <Input label="Simple Input" />
            <Input label="With Error" error="This field is required" />
            <Input
              label="With Description"
              description="This is a description about this custom filed"
            />
            <Input
              label="With Desc and Err"
              error="This field is required"
              description="This is a description about this custom filed"
            />
            <Input
              label="Left Icon"
							leftIcon={<AntDesign name="home" size={20} style={tw`text`} />}
            />
          </View>
        </Card>
      </View>
    </ScrollView>
  );
}
