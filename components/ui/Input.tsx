import React from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";
import tw from "../../tw";

type InputProps = TextInputProps & {
  label?: string;
  description?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export default function Input({ label, description, error, leftIcon, rightIcon, ...props }: InputProps) {
  return (
    <View style={tw.style("flex flex-col w-full gap-2")}>
      {label && (
        <Text
          style={tw.style("text font-semibold", {
            "text-destructive": !!error,
          })}
        >
          {label}
        </Text>
      )}
      <View style={tw`vstack gap-1`}>
        <View
          style={tw.style(
            "hstack px-1 items-center rounded-md border-2 border-gray-200 dark:border-slate-600",
            {
              "border-destructive dark:border-destructive": !!error,
            },
          )}
        >
					{leftIcon && leftIcon}
          <TextInput style={tw.style("text px-2 flex-1")} {...props} />
					{rightIcon && rightIcon}
        </View>
        {description && <Text style={tw`text`}>{description}</Text>}
        {error && <Text style={tw`text-destructive`}>{error}</Text>}
      </View>
    </View>
  );
}
