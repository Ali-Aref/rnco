
import React, { useState } from 'react';
import { View, Text, useColorScheme } from 'react-native';
import tw from '@/tw';
import { Dropdown as DefaultDropdown } from 'react-native-element-dropdown';

type DropdownProps = {
	items: { label: string, value: string | number }[],
	error?: string;
}
type SelectedItem = string | { label: string; value: any }

export default function Dropdown(props: DropdownProps) {
	const {
		items,
		error,
		...other
	} = props
	const colorSchema = useColorScheme()
	const [focused, setFocused] = useState<boolean>(false)
	const [selected, setSelected] = useState<SelectedItem>("");

	return (
		<View style={tw``}>
			<DefaultDropdown
				style={tw.style(`bg-slate-200 dark:bg-slate-600 p-2 rounded-md flex-row items-center justify-between`, {
					'bg-slate-300 dark:bg-slate-500': focused,
					'bg-destructive-100 dark:bg-destructive-800': !!error,
					'bg-destructive-200 dark:bg-destructive-900': !!error && focused,
				})}
				placeholderStyle={tw`text`}
				selectedTextStyle={tw`text`}
				itemTextStyle={tw`text`}
				activeColor={tw.color(colorSchema === "light" ? 'bg-slate-300' : 'bg-slate-500 ')}
				containerStyle={tw`bg-slate-200 dark:bg-slate-600 border-0 rounded-md overflow-hidden`}
				inputSearchStyle={tw`text bg-slate-300 dark:bg-slate-500 rounded-sm border-0`}
				data={items}
				labelField="label"
				valueField="value"
				placeholder={!focused ? 'Select item' : '...'}
				// searchPlaceholder="Search..."
				value={selected}
				onFocus={() => setFocused(true)}
				onBlur={() => setFocused(false)}
				onChange={item => {
					setSelected(item.value);
					setFocused(false);
				}}
				{...other}
			/>
			{!!error && <Text style={tw`text-destructive`}>{error}</Text>}
		</View>
	);
}

