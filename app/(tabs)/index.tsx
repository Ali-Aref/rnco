import { StyleSheet, View, Text } from 'react-native';

import tw from '@/tw';
import { Link } from 'expo-router';
import DateTimePicker from '@/components/ui/DateTimePicker';
import Picker from '@/components/ui/Picker';
import TextInput from '@/components/ui/TextInput';

const items = [
	{label: "Python", value: "1"},
	{label: "JavaScript", value: "2"},
	{label: "HTML", value: "3"},
	{label: "TailwindCss", value: "4"},
]

export default function TabOneScreen() {
	return (
		<View style={tw`view vstack`}>
			<View style={tw`h-44 w-full px-20 pt-20 `}>
				<Picker items={items} />
				<View style={tw`h-20`}></View>
				<TextInput  />
			</View>
			<Text style={tw`text`}>Hello world</Text>
			<Link href="_sitemap" style={tw`text`}>Site map</Link>
		</View>
	);
}

