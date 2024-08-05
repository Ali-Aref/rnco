import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import tw from '@/tw';
import Button from '@/components/ui/Button';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';


export default function LockScreen() {
	const router = useRouter()

	const authenticate = async () => {
		const hasHardware = await LocalAuthentication.hasHardwareAsync();
		const isEnrolled = await LocalAuthentication.isEnrolledAsync();

		if (hasHardware && isEnrolled) {
			const result = await LocalAuthentication.authenticateAsync({
				promptMessage: 'Authenticate to access the app',
				fallbackLabel: 'Enter your password',
				disableDeviceFallback: false,
			});

			if (result.success) {
				router.replace("/tabs1")
			}
		} else {
			// Handle the case where the device does not support local authentication
			alert('Your device does not support biometric authentication');
		}
	};

	useEffect(() => {
		authenticate();
	}, []);

	return (
		<View style={tw`view vstack items-center gap-5`}>
			<Image
				source={require('../../assets/images/users/men.png')}
				style={tw`rounded-full w-64 h-64 border-2 border-primary`}
			/>
			<View style={tw`flex-col items-center`}>
			<Text style={tw`text`}>For privacy concerns, </Text>
			<Text style={tw`text`}>please unlock your account, to continue using the app</Text>
			</View>

			<Button
				onPress={authenticate}
				variant='primary'
				style={tw`w-[40%]`}
				labelStyle={tw`text-white`}
				icon=<Feather name="unlock" size={18} style={tw`text-white`} />
			>Unlock</Button>
		</View>
	);
}
