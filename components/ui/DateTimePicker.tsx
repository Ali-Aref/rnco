import React, { useState } from 'react';
import { View, Text, Platform } from 'react-native';
import RNDateTimePicker, { DateTimePickerAndroid, AndroidNativeProps, AndroidMode } from '@react-native-community/datetimepicker';
import Button from './Button';
import tw from '@/tw';

// NOTE: This is only a demo file,
// you can import anywhere and customize it as you want


export default function DateTimePicker() {
	const [date, setdate] = useState(new Date())

	const showMode = (mode?: AndroidMode) => {
		DateTimePickerAndroid.open({
			mode,
			value: date,
			onChange,
			is24Hour: true,
		});
	}
	const showDatepicker = () => showMode('date');
	const showTimepicker = () => showMode('time');

	const onChange = (event, selectedDate) => {
		const currentDate = selectedDate;
		setdate(currentDate);
	};

	return <View style={tw`vstack px-5 gap-2 items-center`}>
		<Button variant='primary' onPress={showDatepicker}>Date</Button>
		<Button variant='primary' onPress={showTimepicker}>Time</Button>
		<Text style={tw`px-1`}>selected: {date.toLocaleString()}</Text>
		{/* 
		*/}
	</View>
}

