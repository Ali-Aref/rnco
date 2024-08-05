
import React, { useState, ComponentProps, SetStateAction } from 'react';
import { View, Text, useColorScheme } from 'react-native';
import { Dropdown as DefaultDropdown } from 'react-native-element-dropdown';
import tw from '@/tw';

type DefaultDropdownProps = Omit<ComponentProps<typeof DefaultDropdown>, 'labelField' | 'valueField'>;

type DropdownProps = DefaultDropdownProps & {
	data: any[],
	labelField?: any,
	valueField?: any,
	error?: string;
}
type SelectedItem = string | { label: string; value: any }

export default function Dropdown(props: DropdownProps) {
	const {
		data,
		labelField="label",
		valueField="value",
		error,
		onChange,
		...other
	} = props
	const colorSchema = useColorScheme()
	const [focused, setFocused] = useState<boolean>(false)
	const [selected, setSelected] = useState<SelectedItem>("");

	return (
		<View>
			<DefaultDropdown
				style={tw.style(`bg-slate-200 dark:bg-slate-600 p-2 rounded-md flex-row items-center justify-between`, {
					'bg-slate-300 dark:bg-slate-500': focused,
					'bg-destructive-100 dark:bg-destructive-800': !!error,
					'bg-destructive-200 dark:bg-destructive-900': !!error && focused,
				})}
				placeholderStyle={tw`text`}
				selectedTextStyle={tw`text`}
				itemTextStyle={tw`text`}
				activeColor={tw.color(colorSchema === "light" ? 'bg-slate-300' : 'bg-slate-500')}
				containerStyle={tw`bg-slate-200 dark:bg-slate-600 border-0 rounded-md overflow-hidden`}
				inputSearchStyle={tw`text bg-slate-300 dark:bg-slate-500 rounded-md border-0`}
				data={data}
				//@ts-ignore
				labelField={labelField}
				//@ts-ignore
				valueField={valueField}
				placeholder={!focused ? 'Select item' : '...'}
				value={selected}
				onFocus={() => setFocused(true)}
				onBlur={() => setFocused(false)}
				onChange={(item: any) => {
					setSelected(item.value);
					setFocused(false);
					onChange(item.value)
				}}
				{...other}
			/>
			{!!error && <Text style={tw`text-destructive`}>{error}</Text>}
		</View>
	);
}

