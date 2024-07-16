import Button from '@/components/ui/Button';
import TextInput from '@/components/ui/TextInput';
import tw from '@/tw';
import { Feather } from '@expo/vector-icons';
import { Link, useNavigation, useRouter } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';


export default function ForgotPasswordScreen() {
	const nav = useNavigation()

	const handleSendCode = async () => {
		nav.navigate("enterOTP")
	}

	return (
		<View style={tw`px-[15%] items-center gap-y-3`}>
			<Text style={tw`text font-bold text-lg`}>Forgot passwod</Text>
			<TextInput
				label='Email address'
				description='We will send you a verification code.'
				leftIcon={<Feather name="mail" size={25} />}
			/>
			<Button variant='primary' onPress={handleSendCode}>Send Code</Button>
			<Button variant='ghost' labelStyle={tw`text-primary`} onPress={() => nav.goBack()}>Back</Button>
		</View>
	);
}

