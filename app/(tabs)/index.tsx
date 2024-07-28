import { StyleSheet, View, Text } from 'react-native';

import tw from '@/tw';
import { Link } from 'expo-router';
import DateTimePicker from '@/components/ui/DateTimePicker';
import TextInput from '@/components/ui/TextInput';
import Dropdown from '@/components/ui/Dropdown';
import { SetStateAction, useEffect, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';

const items = [
	{ label: "Python", value: "1" },
	{ label: "JavaScript", value: "2" },
	{ label: "HTML", value: "3" },
	{ label: "TailwindCss", value: "4" },
]
const items2 = [
	{ l: "Red", value: "1" },
	{ l: "Green", value: "2" },
	{ l: "Blue", value: "3" },
	{ l: "Orange", value: "4" },
]

export default function TabOneScreen() {
	const [d1, setd1] = useState("")
	const [d2, setd2] = useState("")

	return (
		<View style={tw`view vstack`}>
			<View style={tw`h-44 w-full px-20 pt-20 gap-5`}>
				<Dropdown data={items}
					labelField={"label"}
					valueField={"value"}
					onChange={(e: any) => setd1(e)} search />
				<Dropdown data={items2} onChange={(e: any) => {
					setd2(e)
				}}
					search
					renderLeftIcon={() => <AntDesign name="cloudupload" size={25} style={tw`pr-2 text`} />}
					labelField={"l"} />
				<View style={tw`h-20`}></View>
				<TextInput />
				<Text style={tw`text-black bg-blue-100 py-3 px-4`}
					onPress={() => {
						Toast.show({
							type: "copied",
						})
					}}
				>Copy world</Text>
				<Text style={tw`text`}>Hello world</Text>
				<Text style={tw`text`}>d1:  {d1}</Text>
				<Text style={tw`text`}>d2:  {d2}</Text>
				<Link href="_sitemap" style={tw`text`}>Site map</Link>
			</View>
		</View>
	);
}

