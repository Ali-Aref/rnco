import LoginRegisterButton from '@/components/auth/LoginRegisterButton';
import Button from '@/components/ui/Button';
import TextInput from '@/components/ui/TextInput';
import tw from '@/tw';
import { Feather } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

export default function LoginScreen() {
	const [rememberMe, setrememberMe] = useState<boolean>(true)
	const [showpassword, setshowpassword] = useState<boolean>(false)

	return (
		<View style={tw`view vstack items-center justify-start px-[15%]`}>
			<View style={tw`w-full gap-y-4 items-center`}>
				<TextInput
					label='Email'
					keyboardType='email-address'
					leftIcon={<Feather name="mail" size={25} />}
				/>
				<TextInput
					secureTextEntry={!showpassword}
					label='Password'
					leftIcon={<Feather name="lock" size={25} />}
					rightIcon={<Feather name={showpassword ? "eye-off" : "eye"} size={25} onPress={() => setshowpassword(!showpassword)} />}
				/>
				<Button variant='primary'>Login</Button>
				<Pressable style={tw`w-full flex-row gap-2 items-start`} onPress={() => setrememberMe(!rememberMe)}>
					<Checkbox value={rememberMe} onValueChange={setrememberMe} color={tw.color("primary")} />
					<Text style={tw`text`}>Remember me</Text>
				</Pressable>
				<Link href="auth/forgotPassword" style={tw`text text-primary`}>Forgot password?</Link>
				<Link href="auth/lock-screen" style={tw`text text-primary`}>LOCK</Link>
			</View>
		</View>
	);
}

