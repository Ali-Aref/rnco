import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./components/ui/Button";
import tw from "./tw";
import IconButton from "./components/ui/IconButton";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={tw`flex flex-1 py-6 items-start`}>
      <Text style={tw`mt-1 text-lg font-bold px-3`}>Varints</Text>
      <View style={tw`mt-1 flex flex-row flex-wrap gap-2 justify-center`}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="info">Info</Button>
        <Button variant="success">Success</Button>
        <Button variant="wanring">Warning</Button>
        <Button variant="distructive">Distructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="link">Link</Button>
        <Button variant="ghost">Ghost</Button>
      </View>
      <Text style={tw`mt-1 text-lg font-bold px-3`}>Icon Buttons</Text>
      <View style={tw`mt-1 flex flex-row flex-wrap gap-2 justify-center`}>
        <IconButton variant="primary" icon={<AntDesign name="home" size={20} color={"#fff"} />} />
        <IconButton variant="secondary" icon={<AntDesign name="home" size={20} color={"#fff"} />} />
        <IconButton variant="info" icon={<AntDesign name="home" size={20} color={"#fff"} />} />
        <IconButton variant="success" icon={<AntDesign name="home" size={20} color={"#fff"} />} />
        <IconButton variant="wanring" icon={<AntDesign name="home" size={20} color={"#fff"} />} />
        <IconButton variant="distructive" icon={<AntDesign name="home" size={20} color={"#fff"} />} />
        <IconButton variant="outline" icon={<AntDesign name="home" size={20} color={"#000"} />} />
        <IconButton variant="link" icon={<AntDesign name="home" size={20} color={"#000"} />} />
        <IconButton variant="ghost" icon={<AntDesign name="home" size={20} color={"#000"} />} />
      </View>
      <Text style={tw`mt-1 text-lg font-bold px-3`}>Loading</Text>
      <View style={tw`mt-1 flex flex-row flex-wrap gap-2 justify-center`}>
        <Button variant="primary" loading>Primary</Button>
        <Button variant="secondary" loading>Secondary</Button>
        <Button variant="info" loading>Info</Button>
        <Button variant="success" loading>Success</Button>
        <Button variant="wanring" loading>Warning</Button>
        <Button variant="distructive" loading>Distructive</Button>
        <Button variant="outline" loading>Outline</Button>
        <Button variant="link" loading>Link</Button>
        <Button variant="ghost" loading>Ghost</Button>
      </View>
      <Text style={tw`mt-1 text-lg font-bold px-3`}>Icon Buttons</Text>
      <View style={tw`mt-1 flex flex-row flex-wrap gap-2 justify-center`}>
        <IconButton loading variant="primary" icon={<AntDesign name="home" size={20} color={"#fff"} />} />
        <IconButton loading variant="secondary" icon={<AntDesign name="home" size={20} color={"#fff"} />} />
        <IconButton loading variant="info" icon={<AntDesign name="home" size={20} color={"#fff"} />} />
        <IconButton loading variant="success" icon={<AntDesign name="home" size={20} color={"#fff"} />} />
        <IconButton loading variant="wanring" icon={<AntDesign name="home" size={20} color={"#fff"} />} />
        <IconButton loading variant="distructive" icon={<AntDesign name="home" size={20} color={"#fff"} />} />
        <IconButton loading variant="outline" icon={<AntDesign name="home" size={20} color={"#000"} />} />
        <IconButton loading variant="link" icon={<AntDesign name="home" size={20} color={"#000"} />} />
        <IconButton loading variant="ghost" icon={<AntDesign name="home" size={20} color={"#000"} />} />
      </View>
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
