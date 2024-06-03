import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./components/ui/Button";
import tw from "./tw";
import IconButton from "./components/ui/IconButton";
import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useDeviceContext } from "twrnc";

const ICON = (
  <AntDesign name="home" size={20} style={tw`text-black dark:text-white`} />
);
const ICON_LIGHT = (
  <AntDesign name="home" size={20} style={tw`text-white`} />
);

export default function App() {
  useDeviceContext(tw);

  return (
    <View style={tw`flex-1 bg-gray-100 dark:bg-zinc-800`}>
      <StatusBar style="dark" />
      <View
        style={tw`mt-1 flex flex-1 py-6 px-3 items-start`}
      >
        <Text style={tw`mt-1 text-lg font-bold flex`}>
          LIGHT MODE -
        </Text>
        <Text style={tw`mt-1 text-lg font-bold`}>Variants</Text>
        <View style={tw`mt-1 flex flex-row flex-wrap gap-2 justify-center`}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="info">Info</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="link">Link</Button>
          <Button variant="ghost">Ghost</Button>
        </View>
        <Text style={tw`mt-1 text-lg font-bold`}>Icon Buttons</Text>
        <View style={tw`mt-1 flex flex-row flex-wrap gap-2 justify-center`}>
          <IconButton variant="primary" icon={ICON_LIGHT} />
          <IconButton variant="secondary" icon={ICON_LIGHT} />
          <IconButton variant="info" icon={ICON_LIGHT} />
          <IconButton variant="success" icon={ICON_LIGHT} />
          <IconButton variant="warning" icon={ICON_LIGHT} />
          <IconButton variant="destructive" icon={ICON_LIGHT} />
          <IconButton variant="outline" icon={ICON_LIGHT} />
          <IconButton variant="link" icon={ICON} />
          <IconButton variant="ghost" icon={ICON} />
        </View>
        <Text style={tw`mt-1 text-lg font-bold`}>Loading</Text>
        <View style={tw`mt-1 flex flex-row flex-wrap gap-2 justify-center`}>
          <Button variant="primary" loading>
            Primary
          </Button>
          <Button variant="secondary" loading>
            Secondary
          </Button>
          <Button variant="info" loading>
            Info
          </Button>
          <Button variant="success" loading>
            Success
          </Button>
          <Button variant="warning" loading>
            Warning
          </Button>
          <Button variant="destructive" loading>
            Destructive
          </Button>
          <Button variant="outline" loading>
            Outline
          </Button>
          <Button variant="link" loading>
            Link
          </Button>
          <Button variant="ghost" loading>
            Ghost
          </Button>
        </View>
        <Text style={tw`mt-1 text-lg font-bold`}>Icon Buttons</Text>
        <View style={tw`mt-1 flex flex-row flex-wrap gap-2 justify-center`}>
          <IconButton loading variant="primary" icon={ICON} />
          <IconButton loading variant="secondary" icon={ICON} />
          <IconButton loading variant="info" icon={ICON} />
          <IconButton loading variant="success" icon={ICON} />
          <IconButton loading variant="warning" icon={ICON} />
          <IconButton loading variant="destructive" icon={ICON} />
          <IconButton loading variant="outline" icon={ICON} />
          <IconButton loading variant="link" icon={ICON} />
          <IconButton loading variant="ghost" icon={ICON} />
        </View>
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
