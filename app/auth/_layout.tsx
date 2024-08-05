import LoginRegisterButton from '@/components/auth/LoginRegisterButton';
import tw from '@/tw';
import { Slot, usePathname } from 'expo-router';
import React, { useEffect } from 'react';
import { View, Text, Image, useColorScheme, ScrollView } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';


const showBoxOnPaths: string[] = [
	"/auth",
	"/auth/register",
]

export default function AuthLayout() {
	const path = usePathname()
	const colorScheme = useColorScheme()
	const boxOpacity = useSharedValue(1)
	const contentTopMargin = useSharedValue<number>(0)

	const logo = colorScheme === "dark"
		? require(`../../assets/images/logo/logo.png`)
		: require(`../../assets/images/logo/logo.png`)

	const animatedStyle = useAnimatedStyle(() => {
		return {
			opacity: boxOpacity.value,
		};
	});
	const logoAnimatedStyle = useAnimatedStyle(() => {
		return {
			marginTop: contentTopMargin.value,
			marginBottom: -contentTopMargin.value,
		}
	})

	useEffect(() => {
		const showBox = showBoxOnPaths.includes(path)
		boxOpacity.value = withTiming(
			showBox ? 1 : 0,
			{ duration: 500 },
			(isFinished) => {
				if (isFinished) {
					contentTopMargin.value = withTiming(showBox ? 0 : -80, { duration: 500 });
				}
			}
		);
	}, [path])

	console.log("path: ", path)


	return (
		<ScrollView style={tw`view`} contentContainerStyle={{ flexGrow: 1 }} overScrollMode='never' showsVerticalScrollIndicator={false}>
			<View style={[tw`py-10 items-center`]}>
				<Image source={logo} resizeMode='stretch' style={{ width: 200, height: 200 }} />
			</View>
			<Animated.View style={[tw`mx-[15%] mb-5`, animatedStyle]}>
				<LoginRegisterButton />
			</Animated.View>
			<Animated.View style={[logoAnimatedStyle]}>
				<Slot />
			</Animated.View>
		</ScrollView>
	);
}

