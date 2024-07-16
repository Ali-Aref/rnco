import Button from '@/components/ui/Button';
import TextInput from '@/components/ui/TextInput';
import tw from '@/tw';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { View, Text } from 'react-native';

export default function ResetPasswordScreen() {
	const nav = useNavigation()
	const [showpassword, setshowpassword] = useState<boolean>(false)

	return (
		<View style={tw`view vstack pb-10 items-center justify-start px-[15%]`}>
			<View style={tw`w-full gap-y-4 items-center`}>
				<Text style={tw`text font-bold text-lg`}>Reset Password</Text>
				<TextInput
					secureTextEntry={!showpassword}
					label='New Password'
					leftIcon={<Feather name="lock" size={25} />}
					rightIcon={<Feather name={showpassword ? "eye-off" : "eye"} size={25} onPress={() => setshowpassword(!showpassword)} />}
				/>
				<TextInput
					secureTextEntry={!showpassword}
					label='Confirm password'
					leftIcon={<Feather name="lock" size={25} />}
					rightIcon={<Feather name={showpassword ? "eye-off" : "eye"} size={25} onPress={() => setshowpassword(!showpassword)} />}
				/>
				<Button variant='primary'>Reset</Button>
				<Button variant='ghost' labelStyle={tw`text-primary`} onPress={() => nav.goBack()}>Back</Button>
			</View>
		</View>
	);
}

