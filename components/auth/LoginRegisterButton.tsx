import tw from '@/tw';
import React, { useState } from 'react';
import { Dimensions, TouchableOpacity, View } from 'react-native';
import { Text } from '../Themed';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Link, useNavigation } from 'expo-router';

const width = Dimensions.get("window").width

export default function LoginRegisterButton() {
	const [selectedTab, setselectedTab] = useState<"login" | "register">("login")
	const translateX = useSharedValue<number>(0)

	const animatedStyles = useAnimatedStyle(() => ({
		transform: [{ translateX: withSpring(translateX.value) }],
	}));

	const moveAnimatedBox = (dir: "left" | "right") => {
		const w = ((width / 100) * 70)
		if (dir === "left" && selectedTab !== "login") {
			setselectedTab("login")
			translateX.value -= w / 2
		} else if (dir === "right" && selectedTab !== "register") {
			setselectedTab("register")
			translateX.value += w / 2
		}
	}

	return (
		<View style={tw`flex-1 justify-center`}>
			<View style={tw`rounded-full w-full h-11 py-2 flex-row justify-between card border-2 border-slate-300 `}>
				<Animated.View style={[tw`absolute rounded-full h-10 w-[49%] bg-primary`, animatedStyles]} />
				<Link href="auth/" asChild>
					<TouchableOpacity style={tw`w-1/2 items-center `} onPress={() => moveAnimatedBox("left")}>
						<Text style={tw.style(`text text-center text-lg`, {
							"text-white font-bold": selectedTab === "login"
						})}>Login</Text>
					</TouchableOpacity>
				</Link>
				<Link href={"auth/register"} asChild>
					<TouchableOpacity style={tw`w-1/2 items-center `} onPress={() => moveAnimatedBox("right")}>
						<Text style={tw.style(`text text-center text-lg`, {
							"text-white font-bold": selectedTab === "register"
						})}>Register</Text>
					</TouchableOpacity>
				</Link>

			</View>
		</View>
	);
}

