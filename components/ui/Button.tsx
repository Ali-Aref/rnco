import React from "react";
import { Pressable, PressableProps, Text } from "react-native";
import tw from "../../tw";
import { ClassInput } from "twrnc";

type ButtonProps = PressableProps & {
  label: string;
  style?: ClassInput;
  labelStyle?: ClassInput;
  size?: "sm" | "md" | "lg";
  variant:
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "wanring"
    | "distructive"
    | "link"
    | "outline"
    | "ghost";
};

const variantStyles: Record<ButtonProps["variant"], string> = {
  primary: "bg-primary",
  secondary: "bg-distructive",
  outline: "",
  info: "",
  success: "",
  wanring: "",
  distructive: "",
  link: "",
  ghost: "",
};
const variantTextStyles: Record<ButtonProps["variant"], string> = {
  primary: "text-white",
  secondary: "text-white",
  outline: "",
  info: "",
  success: "",
  wanring: "",
  distructive: "",
  link: "",
  ghost: "",
};

export default function Button({
  label,
  variant,
  style,
  labelStyle,
  ...props
}: ButtonProps) {
  return (
    <Pressable
      style={tw.style(
        "px-3 py-2 rounded ",
        variantStyles[variant],
        style,
      )}
      {...props}
    >
      <Text style={tw.style("", variantTextStyles[variant], labelStyle)}>
        {label}
      </Text>
    </Pressable>
  );
}
