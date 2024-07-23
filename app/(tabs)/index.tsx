import { StyleSheet, View, Text } from 'react-native';

import tw from '@/tw';
import { Link } from 'expo-router';
import DateTimePicker from '@/components/ui/DateTimePicker';
import TextInput from '@/components/ui/TextInput';
import Dropdown from '@/components/ui/Dropdown';

const items = [
	{label: "Python", value: "1"},
	{label: "JavaScript", value: "2"},
	{label: "HTML", value: "3"},
	{label: "TailwindCss", value: "4"},
]

export default function TabOneScreen() {
	return (
		<View style={tw`view vstack`}>
			<View style={tw`h-44 w-full px-20 pt-20 gap-5`}>
				<Dropdown items={items} />
				<Dropdown items={items} search />
				<View style={tw`h-20`}></View>
				<TextInput  />
			<Text style={tw`text`}>Hello world</Text>
			<Link href="_sitemap" style={tw`text`}>Site map</Link>
			</View>
		</View>
	);
}

