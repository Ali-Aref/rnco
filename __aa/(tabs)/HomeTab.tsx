import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

export default function HomeTab() {
  return (
    <View>
			<Text>HOME TAB</Text>
			<Link href="(auth)/login"  >GO TO LOGIn </Link>
		</View>
  );
}

