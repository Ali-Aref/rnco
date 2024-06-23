import { Stack } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="auth" />
			<Stack.Screen name="onBoarding" />
			<Stack.Screen name="index" options={{ headerShown: true }} />
			<Stack.Screen name="profile" options={{
				headerShown: true,
				title: "NO profile"
			}} />
			<Stack.Screen name="tabs" options={{ headerShown: false }} />
		</Stack>
  );
}

