import { StyleSheet, View, Text } from 'react-native';

import tw from '@/tw';
import { Link } from 'expo-router';

export default function TabOneScreen() {
  return (
    <View style={tw`view vstack`}>
			<Text style={tw`text`}>Hello world</Text>
			<Link href="_sitemap" style={tw`text`}>Site map</Link>
    </View>
  );
}

