
import React, { useState } from 'react';
import { View } from 'react-native';
import tw from '@/tw';

type PickerProps = {
	items: { label: string, value: string | number }[],
	error?: string;
}

export default function Picker(props: PickerProps) {
	const {
		error,
		...other
	} = props
	const [focused, setFocused] = useState<boolean>(false)
	const [selected, setSelected] = useState<number | string>("");

	return (
		<View style={tw``}></View>
	);
}

