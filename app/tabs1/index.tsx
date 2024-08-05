import tw from '@/tw';
import { Link, usePathname } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

export default function Tab1() {
	const path = usePathname()
  return (
		<View style={tw`view vstack w-full justify-center items-center gap-5`}>
			<Text>Tabs 1</Text>
			<Text>{path}</Text>
			<Link href="/auth/lock-screen">Lock </Link>
			<Link href="/auth">LOGIN </Link>
		</View>
  );
}

