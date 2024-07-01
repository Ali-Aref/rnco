import React, { useState } from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";
import tw from "../../tw";

type InputProps = TextInputProps & {
  label?: string;
  description?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export default function Input({
  label,
  description,
  error,
  leftIcon,
  rightIcon,
  ...props
}: InputProps) {
  const [isActive, setisActive] = useState(false);

  return (
    <View style={tw.style("w-full gap-2")}>
      {label && (
        <Text
          style={tw.style("text font-semibold", {
            "text-destructive": !!error,
          })}
        >
          {label}
        </Text>
      )}
      <View style={tw`gap-1`}>
        <View
          style={tw.style(
            "flex-row px-1 pr-2 items-center rounded-md border-2 border-gray-200 dark:border-slate-600",
            {
							"border-primary": isActive,
              "border-destructive dark:border-destructive": !!error,
            },
          )}
        >
          {leftIcon && leftIcon}
          <TextInput
            {...props}
            onFocus={() => setisActive(true)}
            onBlur={() => setisActive(false)}
            style={tw.style("text px-2 flex-1")}
          />
          {rightIcon && rightIcon}
        </View>
        {description && <Text style={tw`text text-gray-500`}>{description}</Text>}
        {error && <Text style={tw`text-destructive`}>{error}</Text>}
      </View>
    </View>
  );
}
