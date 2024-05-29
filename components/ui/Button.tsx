import React from "react";
import { View, Text, TouchableOpacity, TouchableNativeFeedback } from "react-native";
import tw from "../../tw";

type ButtonProps = {
  children: string;
  variant?:
    | "primary"
    | "secondary"
    | "distructive"
    | "success"
    | "info"
    | "warn";
};

const mapBgColor = {
  primary: "bg-primary-500",
  secondary: "#6c757d",
  distructive: "#dc3545",
  success: "#28a745",
  info: "#17a2b8",
  warn: "#ffc107",
};
const mapTextColor = {
  primary: "#fff",
  secondary: "#fff",
  distructive: "#fff",
  success: "#fff",
  info: "#fff",
  warn: "#fff",
};


export default function Button({ variant, children }: ButtonProps) {
  return (
    <TouchableOpacity
      style={tw.style(
        "px-3 py-2 rounded shadow-2xl shadow-black",
        `bg-[${mapBgColor[variant ?? "primary"]}]`,
      )}
    >
      <Text style={tw.style(`text-[${mapTextColor[variant ?? "primary"]}]`)}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}
