import { Tabs } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';

export default function TabsLayout() {
  return (
		<Tabs>
			<Tabs.Screen name="index" />
			<Tabs.Screen name="profile" />
		</Tabs>
  );
}

