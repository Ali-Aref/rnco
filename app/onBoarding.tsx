import React, { useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  useWindowDimensions,
  ViewToken,
} from "react-native";
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
    title: "Send HprogressWidthala",
    content: "Welcome to AHD application. The first payment app in Afghanistan",
    image: require("../assets/images/draw/send.png"),
  },
  {
    title: "Topup Mobile",
    content:
      "Welcome to AHD application. The first payment app in Afghanistan. Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    image: require("../assets/images/draw/topup.png"),
  },
  {
    title: "Send HprogressWidthala 2",
    content: "Welcome to AHD application. The first payment app in Afghanistan",
    image: require("../assets/images/draw/send.png"),
  },
];

export default function OnBoardingScreen() {
  const { width } = useWindowDimensions();
  const progressWidth = useSharedValue(width / Slides.length);
  const [currentIndex, setcurrentIndex] = useState<number>(0);
  const flatlistRef = useRef<FlatList<any>>(null);

  const scollToIndex = (index: number) => {
    if (flatlistRef.current)
      flatlistRef.current?.scrollToIndex({ animated: true, index });
  };

  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: Array<ViewToken>;
  }) => {
    if (viewableItems.length > 0) {
      setcurrentIndex(viewableItems[0].index ?? 0);
      progressWidth.value = withSpring(
        (width / Slides.length) * ((viewableItems[0].index ?? 0) + 1),
      );
    }
  };

  const handleNextSlide = () => {
    if (currentIndex < Slides.length - 1) {
      scollToIndex(currentIndex + 1);
      progressWidth.value = withSpring(
        progressWidth.value + width / Slides.length,
      );
    } else {
      console.log("handle route to login");
    }
  };

  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <View style={tw`flex-2`}>
        <FlatList
          data={Slides}
          ref={flatlistRef}
          pagingEnabled
          keyExtractor={(item) => item.title}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
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
      <View style={tw`flex-row gap-2`}>
        {Slides.map((_, index) => (
          <View
            key={index}
            style={tw`h-2 w-2 rounded-full bg-${currentIndex === index ? "primary" : "gray-300"}`}
          />
        ))}
      </View>
      <View style={tw`flex-1 items-center justify-center`}>
        <IconButton
          variant="primary"
          style={tw`rounded-full w-17 h-17`}
          icon={<AntDesign name="right" size={30} color={"white"} />}
          onPress={handleNextSlide}
          onLongPress={() => {
            progressWidth.value = withSpring(width / Slides.length);
          }}
        />
      </View>
      <View style={tw`items-start w-full`}>
        <View style={[tw`bg-gray-300 h-5 absolute bottom-0`, { width }]} />
        <Animated.View
          style={[
            tw`bg-primary h-5 absolute bottom-0`,
            { width: progressWidth },
          ]}
        />
      </View>
    </View>
  );
}
