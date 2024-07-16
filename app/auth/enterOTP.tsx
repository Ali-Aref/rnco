import Button from '@/components/ui/Button';
import TextInput from '@/components/ui/TextInput';
import tw from '@/tw';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import React, { useRef, useState } from 'react';
import { View, Text } from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';

export default function EnterOTPScreen() {
	let otpInput = useRef(null);
	const nav = useNavigation()

	const handleConfirmOTP = () => {
		nav.navigate("resetPassword")
	}

	return (
		<View style={tw`view vstack pb-10 items-center justify-start px-[15%] gap-y-4`}>
			<View style={tw`w-full  items-center gap-y-4`}>
				<Text style={tw`text font-bold text-lg`}>Enter OTP</Text>
				<Text style={tw`w-full text-left text`}>We have sent to your email aliaref.js@gmail.com a verification code.</Text>
				<Text style={tw`w-full text-left text-primary`}>Didn't get the code ? send again.</Text>
				<OTPTextInput
					ref={otpInput}
					inputCellLength={1}
					inputCount={5}
					tintColor={tw.color("primary")}
					// containerStyle={tw`border-2 rounded-full`}
					textInputStyle={tw`border-2 rounded-full h-10 w-10`}
				/>
				<View style={tw`mt-2 w-full gap-y-3`}>
				<Button variant='primary' onPress={handleConfirmOTP}>Confirm</Button>
				<Button variant='ghost' labelStyle={tw`text-primary`} onPress={() => nav.goBack()}>Back</Button>

				</View>

			</View>
		</View>
	);
}

