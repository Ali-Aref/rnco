import { Stack } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
			<Stack.Screen name="onBoarding" options={{ headerShown: false }} />
			<Stack.Screen name="index" />
			<Stack.Screen name="profile" options={{
				headerShown: true,
				title: "NO profile"
			}} />
			<Stack.Screen name="tabs" options={{ headerShown: false }} />
		</Stack>
  );
}

