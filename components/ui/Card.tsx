import React from "react";
import { View, Text } from "react-native";
import tw from "../../tw";

type CardProps = {
  children: React.ReactNode;
  title: string;
};

export default function Card({ children, title }: CardProps) {
  return (
    <View
      style={tw`p-4 rounded-md border-2 bg-white border-gray-200 dark:bg-slate-700 dark:border-slate-600`}
    >
      <Text style={tw`text font-bold text-lg`}>{title}</Text>
      <View style={tw`mt-2`}>{children}</View>
    </View>
  );
}
