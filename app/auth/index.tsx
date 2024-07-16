import TextInput from '@/components/ui/TextInput';
import tw from '@/tw';
import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text } from 'react-native';


export default function LoginScreen() {
	const [showpassword, setshowpassword] = useState<boolean>(false)

  return (
		<View style={tw`view vstack items-center justify-center px-[15%] gap-y-3`}>
			<TextInput
				label='Email'
				keyboardType='email-address'
				leftIcon={<Feather name="mail" size={25} />}
				style={tw`text-lg`}
				labelStyle={tw`text-lg`}
				containerStyle={tw`py-1`}
			/>
			<TextInput
				secureTextEntry={!showpassword}
				label='Password'
				style={tw`text-lg`}
				labelStyle={tw`text-lg`}
				containerStyle={tw`py-1`}
				leftIcon={<Feather name="lock" size={25} />}
				rightIcon={<Feather name={showpassword ? "eye-off": "eye"} size={25} onPress={()=>setshowpassword(!showpassword)} />}
			/>
			<View style={tw`p-4 border-t-2 border-t-primary`}>
			<Text>Hello</Text>
			</View>

		</View>
  );
}

