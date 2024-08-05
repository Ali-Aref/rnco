import tw from '@/tw';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { Text, View, useColorScheme } from 'react-native';

export default function Tabs1Layout() {
	const colorScheme = useColorScheme()

	const tabs = [
		{ name: "index", title: "Home", icon: "home" },
		{ name: "tab2", title: "Messages", icon: "message1" },
		{ name: "tab3", title: "Notification", icon: "bells" },
		{ name: "tab4", title: "Profile ", icon: "user" },
	]

	const renderTabScreen = ({ name, title, icon }: { name: string, title: string, icon: any }) => {
		return <Tabs.Screen
			key={`${name}-${title}`}
			name={name}
			options={{
				title,
				tabBarIcon(props) {
					console.log("color: ", props.color)
					return (
						<View style={tw`items-center justify-center gap-y-1`}>
							<AntDesign name={icon} size={25} color={props.color} />
						</View>
					)
				},
				tabBarLabel(props) {
					return <Text style={tw`pb-1 text-xs text-[${props.color}]`}>{title}</Text>
				},
			}}
		/>
	}

	return (
		<Tabs screenOptions={{
			headerShown: true,
			tabBarShowLabel: true,
			headerTitleAlign: "center",
			headerTitleStyle: tw`text`,
			headerStyle: tw`bg-slate-200 dark:bg-slate-800`,
			tabBarStyle: tw`h-15 bg-slate-200 dark:bg-slate-800`,
			tabBarActiveTintColor: tw.color("text-primary"),
			tabBarInactiveTintColor: tw.color(colorScheme === "light" ? "text-gray-900" : "text-gray-100"),
		}}>
			{tabs.map(renderTabScreen)}
		</Tabs>

	);
}

