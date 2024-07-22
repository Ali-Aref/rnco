import React, { useState } from 'react';
import { View } from 'react-native';
import { Picker as DefaultPicker, PickerIOS, PickerProps as DefaultPickerProps, PickerItemProps } from '@react-native-picker/picker';
import tw from '@/tw';

type PickerProps = DefaultPickerProps & {
	items: { label: string, value: string | number }[],
	error?: string;
	pickerItemsProps?: PickerItemProps,
}

export default function Picker(props: PickerProps) {
	const {
		error,
		pickerItemsProps,
		...other
	} = props
	const [focused, setFocused] = useState<boolean>(false)
	const [selected, setSelected] = useState<number | string>("");

	return (
		<View style={tw``}>
			<DefaultPicker
				selectedValue={selected}
				onFocus={() => setFocused(true)}
				onBlur={() => setFocused(false)}
				onValueChange={(itemValue, itemIndex) =>
					setSelected(itemValue)
				}
				mode="dropdown"
				style={tw.style("bg-slate-300 dark:bg-slate-500", {
					'bg-slate-300 dark:bg-slate-500': focused,
					'bg-destructive-100 dark:bg-destructive-800': !!error,
					'bg-destructive-200 dark:bg-destructive-900': !!error && focused,
				})}
				itemStyle={{
					backgroundColor: "red",
				}}
				// dropdownIconColor={tw.color("text-primary")}
				dropdownIconRippleColor={tw.color("text-primary")}
				{...other}
			>
				{props.items.map((item, index) => (
					<DefaultPicker.Item
						key={`${index}${item.value}`}
						label={item.label}
						value={item.value}
						style={tw`text bg-slate-300 dark:bg-slate-500`}
						{...pickerItemsProps}
					/>
				))}
			</DefaultPicker>
		</View>
	);
}

