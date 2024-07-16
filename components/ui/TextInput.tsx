import tw from '@/tw';
import React, { ReactElement, useState } from 'react';
import { View, Text, TextInput as DefaultTextInput } from 'react-native';
import { ClassInput } from 'twrnc';

type TextInputProps = DefaultTextInput["props"] & {
	label?: string;
	error?: string;
	leftIcon?: ReactElement;
	rightIcon?: ReactElement;
	description?: string;
	style?: ClassInput;
	labelStyle?: ClassInput;
	containerStyle?: ClassInput;
}



export default function TextInput(props: TextInputProps) {
	const [focused, setfocused] = useState<boolean>(false)
	const { label, error, leftIcon, rightIcon, description, style, labelStyle, containerStyle, ...other }
		= props;

	return (
		<View style={tw`w-full gap-y-1`}>
			{!!label &&
				<Text style={tw.style(`text`, {
					"text-destructive": !!error,
				}, labelStyle)}>{label}</Text>
			}
			<View style={tw.style(`
				bg-slate-200 dark:bg-slate-600 rounded-md flex-row items-center justify-between`,
				{
					'bg-slate-300 dark:bg-slate-500': focused,
					'bg-destructive-100 dark:bg-destructive-800': !!error,
					'bg-destructive-200 dark:bg-destructive-900': !!error && focused,
				},
				containerStyle
			)}>
				{leftIcon && React.cloneElement(
					leftIcon,
					tw`text pl-2 opacity-60`
				)}
				<DefaultTextInput
					style={tw.style(`text flex-1 px-2 py-1`, style)}
					onBlur={() => setfocused(false)}
					onFocus={() => setfocused(true)}
					placeholderTextColor={tw.color("text-gray-400")}
					{...other}
				/>
				{rightIcon && React.cloneElement(
					rightIcon,
					tw`text pr-2 opacity-60`
				)}
			</View>
			{!!description && <Text style={tw`placeholder-text`}>{description}</Text>}
			{!!error && <Text style={tw`text-destructive`}>{error}</Text>}
		</View>
	);
}

