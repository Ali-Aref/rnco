import tw from '@/tw';
import { usePathname } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

export default function Tab1() {
	const path = usePathname()
  return (
		<View style={tw`view vstack w-full justify-center items-center`}>
			<Text>Tabs 1</Text>
			<Text>{path}</Text>
		</View>
  );
}

