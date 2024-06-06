import React from "react";
import { View, Text } from "react-native";
import tw from "../../tw";
import { ClassInput, style } from "twrnc";

type CardProps = {
  children: React.ReactNode;
  title: string;
  style?: ClassInput;
  titleStyle?: ClassInput;
  contentStyle?: ClassInput;
};

export default function Card({
  children,
  title,
  style,
  titleStyle,
  contentStyle,
}: CardProps) {
  return (
    <View
      style={tw.style(
        "p-4 rounded-md border-2 bg-white border-gray-200 dark:bg-slate-700 dark:border-slate-600",
        style,
      )}
    >
      <Text style={tw.style("text font-bold text-lg", titleStyle)}>
        {title}
      </Text>
      <View style={tw.style("mt-2", contentStyle)}>{children}</View>
    </View>
  );
}
