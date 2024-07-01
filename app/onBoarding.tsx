import React from "react";
import { View, Text, FlatList, Image, useWindowDimensions } from "react-native";
import tw from "../tw";
import IconButton from "../components/ui/IconButton";
import { AntDesign } from "@expo/vector-icons";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

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
    content:
      "Welcome to AHD application. The first payment app in Afghanistan. Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    image: require("../assets/images/draw/topup.png"),
  },
];

export default function OnBoardingScreen() {
  const { width } = useWindowDimensions();
  const aw = useSharedValue(width / Slides.length);

  const handleNextSlide = () => {
    aw.value = withSpring(aw.value + width / Slides.length);
  };

  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <View style={tw`flex-2`}>
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
      <View style={tw`flex-1 items-center justify-center`}>
        <IconButton
          variant="primary"
          style={tw`rounded-full w-17 h-17`}
          icon={<AntDesign name="right" size={30} color={"white"} />}
          onPress={handleNextSlide}
          onLongPress={() => {
            aw.value = withSpring(width / Slides.length);
          }}
        />
      </View>
      <View style={tw`items-start w-full`}>
        <View style={[tw`bg-gray-300 h-5 absolute bottom-0`, { width }]} />
        <Animated.View
          style={[tw`bg-primary h-5 absolute bottom-0`, { width: aw }]}
        />
      </View>
    </View>
  );
}
