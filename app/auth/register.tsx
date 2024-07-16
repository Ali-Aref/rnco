import Button from '@/components/ui/Button';
import TextInput from '@/components/ui/TextInput';
import tw from '@/tw';
import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text } from 'react-native';

export default function RegisterScreen() {
	const [showpassword, setshowpassword] = useState<boolean>(false)

	return (
		<View style={tw`view vstack pb-10 items-center justify-start px-[15%]`}>
			<View style={tw`w-full gap-y-4 items-center`}>
				<TextInput
					label='Email'
					keyboardType='email-address'
					leftIcon={<Feather name="mail" size={25} />}
				/>
				<TextInput
					label='First name'
					leftIcon={<Feather name="user" size={25} />}
				/>
				<TextInput
					secureTextEntry={!showpassword}
					label='Password'
					leftIcon={<Feather name="lock" size={25} />}
					rightIcon={<Feather name={showpassword ? "eye-off" : "eye"} size={25} onPress={() => setshowpassword(!showpassword)} />}
				/>
				<TextInput
					secureTextEntry={!showpassword}
					label='Confirm password'
					leftIcon={<Feather name="lock" size={25} />}
					rightIcon={<Feather name={showpassword ? "eye-off" : "eye"} size={25} onPress={() => setshowpassword(!showpassword)} />}
				/>
				<Button variant='primary'>Register</Button>
			</View>
		</View>
	);
}

