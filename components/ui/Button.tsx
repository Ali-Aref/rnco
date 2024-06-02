import React, { useEffect, useRef } from "react";
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import tw from "../../tw";
import { ClassInput } from "twrnc";
import { EvilIcons } from "@expo/vector-icons";

type ButtonProps = TouchableOpacityProps & {
  children: String;
  style?: ClassInput;
  labelStyle?: ClassInput;
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  variant:
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "destructive"
    | "link"
    | "outline"
    | "ghost";
};

const variantStyles: Record<ButtonProps["variant"], string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  info: "bg-info",
  success: "bg-success",
  warning: "bg-warning",
  destructive: "bg-destructive",
  outline: "border-2 border-primary",
  link: "bg-none",
  ghost: "bg-none",
};
const variantTextStyles: Record<ButtonProps["variant"], string> = {
  primary: "text-white",
  secondary: "text-white",
  outline: "text-primary",
  info: "text-white",
  success: "text-white",
  warning: "text-white",
  destructive: "text-white",
  link: "underline",
  ghost: "text-black",
};

export default function Button({
  children,
  variant,
  style,
  labelStyle,
  ...props
}: ButtonProps) {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    ).start();
  }, []);

  return (
    <TouchableOpacity
      style={tw.style(
        "px-3 py-2 rounded flex flex-row items-center gap-2",
        variantStyles[variant],
        style,
      )}
      {...props}
    >
      {props.loading && (
        <Animated.View style={styles(spinValue).loading}>
          <EvilIcons name="spinner-3" size={20} style={tw.style(
						variantTextStyles[variant]
					)} />
        </Animated.View>
      )}
      <Text style={tw.style("", variantTextStyles[variant], labelStyle)}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = (animatedValue: Animated.Value) =>
  StyleSheet.create({
    loading: {
      height: 20,
      width: 20,
      transform: [
        {
          rotate: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "360deg"],
          }),
        },
      ],
    },
  });
