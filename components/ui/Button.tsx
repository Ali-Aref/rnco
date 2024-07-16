import React, { useEffect, useRef } from "react";
import {
	Animated,
	Easing,
	Pressable,
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableOpacityProps,
} from "react-native";
import tw from "../../tw";
import { ClassInput } from "twrnc";
import { EvilIcons } from "@expo/vector-icons";

type ButtonProps = TouchableOpacityProps & {
	children: String | React.ReactNode;
	loading?: boolean;
	icon?: React.ReactNode,
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
	style?: ClassInput;
	labelStyle?: ClassInput;
};

const variantStyles: Record<ButtonProps["variant"], string> = {
	primary: "bg-primary",
	secondary: "bg-secondary",
	info: "bg-info",
	success: "bg-success",
	warning: "bg-warning",
	destructive: "bg-destructive",
	outline: "border-2 border-primary",
	link: "",
	ghost: "",
};
const variantTextStyles: Record<ButtonProps["variant"], string> = {
	primary: "text-white",
	secondary: "text-white",
	outline: "text-primary",
	info: "text-white",
	success: "text-white",
	warning: "text-white",
	destructive: "text-white",
	link: "underline text-black dark:text-white",
	ghost: "text-black text-black dark:text-white",
};

export default function Button({
	children,
	variant,
	style,
	labelStyle,
	icon,
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
		<Pressable
			style={({ pressed }) => ([tw.style(
				"w-full justify-center px-3 py-2 rounded flex flex-row items-center gap-2",
				variantStyles[variant],
				{
					"opacity-70": pressed,
				},
				style,
			)])}
			{...props}
		>
			{icon && icon}

			{props.loading && (
				<Animated.View style={styles(spinValue).loading}>
					<EvilIcons
						name="spinner-3"
						size={20}
						style={tw.style(variantTextStyles[variant])}
					/>
				</Animated.View>
			)}
			<Text style={tw.style("text-center", variantTextStyles[variant], labelStyle)}>
				{children}
			</Text>
		</Pressable>
	);
}

const styles = (animatedValue: Animated.Value) =>
	StyleSheet.create({
		loading: {
			justifyContent: "center",
			alignItems: "center",
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
