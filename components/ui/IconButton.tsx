import React, { useEffect, useRef } from "react";
import {
  Animated,
  Easing,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import tw from "../../tw";
import { ClassInput } from "twrnc";
import { EvilIcons } from "@expo/vector-icons";

type IconButtonProps = TouchableOpacityProps & {
  icon: React.ReactNode;
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

const variantStyles: Record<IconButtonProps["variant"], string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  info: "bg-info",
  success: "bg-success",
  warning: "bg-warning",
  destructive: "bg-destructive",
  outline: "border-2 border-primary",
  link: "border-b-2 border-primary",
  ghost: "",
};
const variantTextStyles: Record<IconButtonProps["variant"], string> = {
  primary: "text-white",
  secondary: "text-white",
  outline: "text-primary",
  info: "text-white",
  success: "text-white",
  warning: "text-white",
  destructive: "text-white",
  link: "underline text-black dark:text-white",
  ghost: "text-black dark:text-white",
};

export default function IconButton({
  icon,
  variant,
  style,
  labelStyle,
  ...props
}: IconButtonProps) {
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
        "px-3 py-2 rounded-xl flex flex-row items-center gap-1",
        variantStyles[variant],
        style,
      )}
      {...props}
    >
      {props.loading ? (
        <Animated.View style={styles(spinValue).loading}>
          <EvilIcons
            name="spinner-3"
            size={20}
            style={tw.style(variantTextStyles[variant])}
          />
        </Animated.View>
      ) : (
        icon
      )}
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
