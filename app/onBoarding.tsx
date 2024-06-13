import React from "react";
import { View, Text, FlatList, Image, useWindowDimensions } from "react-native";
import tw from "../tw";

const Slides = [
  {
    title: "Welcome",
    content: "Welcome to AHD application. The first payment app in Afghanistan",
		image: require("../assets/images/draw/welcome.png"),
  },
  {
    title: "Send Hawala",
    content: "Welcome to AHD application. The first payment app in Afghanistan",
		image: require("../assets/images/draw/send.png"),
  },
  {
    title: "Topup Mobile",
    content: "Welcome to AHD application. The first payment app in Afghanistan. Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
		image: require("../assets/images/draw/topup.png"),
  },
];

export default function OnBoardingScreen() {
	const { width } = useWindowDimensions()

  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <FlatList
        data={Slides}
				pagingEnabled
        keyExtractor={(item) => item.title}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={{ width }}>
            <Image
              resizeMode="contain"
              source={item.image}
              style={tw`w-full h-96`}
            />
            <Text style={tw`text text-lg text-center`}>{item.title}</Text>
            <Text style={tw`text text-center`}>{item.content}</Text>
          </View>
        )}
      />
    </View>
  );
}
