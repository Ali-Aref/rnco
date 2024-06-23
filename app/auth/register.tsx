import React from 'react';
import { View, Text } from 'react-native';
import tw from '../../tw';
import { Link } from 'expo-router';
import AuthLogo from '../../components/auth/logo';

export default function RegisterScreen() {
  return (
		<View style={tw`flex-1 view vstack items-center justify-center`}>
			<AuthLogo />
			<Text style={tw`text text-lg`}>Register</Text>
			<Link href="/auth/login">Login</Link>
		</View>
  );
}

