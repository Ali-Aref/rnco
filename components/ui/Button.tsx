import React from "react";
import {
    ActivityIndicator,
	Pressable,
	Text,
	TouchableOpacityProps,
} from "react-native";
import tw from "@/tw";
import { ClassInput } from "twrnc";

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
	loading,
	...props
}: ButtonProps) {

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
			{loading &&  <ActivityIndicator />}
			<Text style={tw.style("text-center", variantTextStyles[variant], labelStyle)}>
				{children}
			</Text>
		</Pressable>
	);
}
