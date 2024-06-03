import React from "react";
import { ScrollView, Text, View } from "react-native";
import tw from "../tw";
import Button from "../components/ui/Button";
import IconButton from "../components/ui/IconButton";
import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useDeviceContext } from "twrnc";


export default function App() {
  // useDeviceContext(tw);

	const ICON_LIGHT = <AntDesign name="home" size={20} style={tw`text-white`} />;
	const ICON_DARK = <AntDesign name="home" size={20} style={tw`text`} />;
	const ICON_PRIMARY = (
		<AntDesign name="home" size={20} style={tw`text-primary`} />
	);

  return (
    <ScrollView style={tw`flex-1 view`}>
      <StatusBar style="dark" />
      <View style={tw`vstack my-10 px-4 gap-4`}>
        <View style={tw`items-center`}>
          <Text style={tw`text text-lg font-bold`}>Variants</Text>
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
        </View>
        <View style={tw`items-center`}>
          <Text style={tw`text text-lg font-bold`}>Button with Icon</Text>
          <View style={tw`mt-1 flex flex-row flex-wrap gap-2 justify-center`}>
            <Button variant="primary" icon={ICON_LIGHT}>Primary</Button>
            <Button variant="secondary" icon={ICON_LIGHT}>Secondary</Button>
            <Button variant="info" icon={ICON_LIGHT}>Info</Button>
            <Button variant="success" icon={ICON_LIGHT}>Success</Button>
            <Button variant="warning" icon={ICON_LIGHT}>Warning</Button>
            <Button variant="destructive" icon={ICON_LIGHT}>Destructive</Button>
            <Button variant="outline" icon={ICON_PRIMARY}>Outline</Button>
            <Button variant="link" icon={ICON_DARK}>Link</Button>
            <Button variant="ghost" icon={ICON_DARK}>Ghost</Button>
          </View>
        </View>
        <View style={tw`items-center`}>
          <Text style={tw`text text-lg font-bold`}>Loading</Text>
          <View style={tw`mt-1 flex flex-row flex-wrap gap-2 justify-center`}>
            <Button loading variant="primary">Primary</Button>
            <Button loading variant="secondary">Secondary</Button>
            <Button loading variant="info">Info</Button>
            <Button loading variant="success">Success</Button>
            <Button loading variant="warning">Warning</Button>
            <Button loading variant="destructive">Destructive</Button>
            <Button loading variant="outline">Outline</Button>
            <Button loading variant="link">Link</Button>
            <Button loading variant="ghost">Ghost</Button>
          </View>
        </View>
        <View style={tw`items-center`}>
          <Text style={tw`text text-lg font-bold`}>Icon Button</Text>
          <View style={tw`mt-1 flex flex-row flex-wrap gap-2 justify-center`}>
            <IconButton variant="primary" icon={ICON_LIGHT} />
            <IconButton variant="secondary" icon={ICON_LIGHT} />
            <IconButton variant="info" icon={ICON_LIGHT} />
            <IconButton variant="success" icon={ICON_LIGHT} />
            <IconButton variant="warning" icon={ICON_LIGHT} />
            <IconButton variant="destructive" icon={ICON_LIGHT} />
            <IconButton variant="outline" icon={ICON_PRIMARY} />
            <IconButton variant="link" icon={ICON_DARK} />
            <IconButton variant="ghost" icon={ICON_DARK} />
          </View>
        </View>
        <View style={tw`items-center`}>
          <Text style={tw`text text-lg font-bold`}>Icon Button Loading</Text>
          <View style={tw`mt-1 flex flex-row flex-wrap gap-2 justify-center`}>
            <IconButton loading variant="primary" icon={ICON_LIGHT} />
            <IconButton loading variant="secondary" icon={ICON_LIGHT} />
            <IconButton loading variant="info" icon={ICON_LIGHT} />
            <IconButton loading variant="success" icon={ICON_LIGHT} />
            <IconButton loading variant="warning" icon={ICON_LIGHT} />
            <IconButton loading variant="destructive" icon={ICON_LIGHT} />
            <IconButton loading variant="outline" icon={ICON_PRIMARY} />
            <IconButton loading variant="link" icon={ICON_DARK} />
            <IconButton loading variant="ghost" icon={ICON_DARK} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
