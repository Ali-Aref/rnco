import tw from '@/tw';
import { AntDesign, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Href, Tabs, useRouter } from 'expo-router';
import React, { ComponentProps } from 'react';
import { Platform, Text, View, useColorScheme } from 'react-native';

type TabScreenProps = {
	name: string;
	title: string;
	auth: boolean;
	icon: ComponentProps<typeof AntDesign>["name"];
	options?: ComponentProps<typeof Tabs.Screen>["options"]
}

export default function Tabs1Layout() {
	const router = useRouter()
	const colorScheme = useColorScheme()

	const tabs: TabScreenProps[] = [
		{
			name: "index", title: "Home", icon: "home", auth: true,
			options: { headerShown: false }
		},
		{ name: "tab2", title: "Messages", icon: "message1", auth: true },
		{ name: "tab3", title: "Notification", icon: "bells", auth: true },
		{ name: "tab4", title: "Profile ", icon: "user", auth: true },
	]

	const renderTabScreen = (props: TabScreenProps) => {
		const { name, title, icon, auth, options = {} } = props;

		return <Tabs.Screen
			key={`${name}-${title}`}
			name={name}
			options={{
				title,
				href: auth ? undefined : null,
				tabBarIcon(props) {
					return (
						<View style={tw`items-center justify-center gap-y-1`}>
							<AntDesign name={icon} size={25} color={props.color} />
						</View>
					)
				},
				tabBarLabel(props) {
					return <Text style={tw`pb-1 text-xs text-[${props.color}]`}>{title}</Text>
				},
				...options,
			}}
		/>
	}

	const backAction = () => router.back()
	const closeAction = () => router.replace("/tabs1")

	return (
		<Tabs screenOptions={{
			headerShown: true,
			tabBarShowLabel: true,
			headerTitleAlign: "center",
			headerTitleStyle: tw`text`,
			headerStyle: tw`bg-slate-50 dark:bg-slate-800 elevation-1`,
			tabBarStyle: tw`h-15 bg-slate-50 dark:bg-slate-800 elevation-1 border-t-0`,
			tabBarActiveTintColor: tw.color("text-primary"),
			tabBarInactiveTintColor: tw.color(colorScheme === "light" ? "text-gray-900" : "text-gray-100"),
			// headerRight: () => <AntDesign name="close" size={20} style={tw`px-2 text`} onPress={closeAction} />,
			headerLeft: () => <MaterialIcons name={Platform.OS === "ios" ? "arrow-back-ios-new" : "arrow-back"} size={20} style={tw`px-2 text`} onPress={backAction} />
		}}>
			{tabs.map(renderTabScreen)}
		</Tabs>

	);
}

