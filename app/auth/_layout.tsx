import LoginRegisterButton from '@/components/auth/LoginRegisterButton';
import tw from '@/tw';
import { Slot, usePathname } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, useColorScheme, ScrollView } from 'react-native';
import Animated, { runOnJS, runOnUI, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';


const showBoxOnPaths: string[] = [
	"/auth",
	"/auth/register",
]

export default function AuthLayout() {
	const path = usePathname()
	const colorScheme = useColorScheme()
	const boxOpacity = useSharedValue(1)
	const logoTopPadding = useSharedValue<number>(40)

	const logo = colorScheme === "dark"
		? require(`../../assets/images/logo/dark.png`)
		: require(`../../assets/images/logo/light.png`)

	const animatedStyle = useAnimatedStyle(() => {
		return {
			opacity: boxOpacity.value,
		};
	});
	const logoAnimatedStyle = useAnimatedStyle(()=>{
		return {
			marginTop: logoTopPadding.value,
			marginBottom: -logoTopPadding.value,
		}
	})

	useEffect(() => {
		const showBox = showBoxOnPaths.includes(path)
		boxOpacity.value = withTiming(
			showBox ? 1 : 0,
			{ duration: 500 },
			(isFinished) => {
				if (isFinished) {
						logoTopPadding.value = withTiming(showBox ? 0: 50, { duration: 500 });
				}
			}
		);
	}, [path])

	console.log("path: ", path)


	return (
		<ScrollView style={tw`view`} contentContainerStyle={{ flexGrow: 1 }} overScrollMode='never' showsVerticalScrollIndicator={false}>
			<Animated.View style={[tw`py-10 items-center`, logoAnimatedStyle]}>
				<Image source={logo} resizeMode='stretch' style={{ width: 150, height: 150 }} />
			</Animated.View>
			<Animated.View style={[tw`mx-[15%] mb-5`, animatedStyle]}>
				<LoginRegisterButton />
			</Animated.View>
			<Slot />
		</ScrollView>
	);
}

