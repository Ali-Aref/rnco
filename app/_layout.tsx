import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ThemeProvider, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useDeviceContext } from 'twrnc';
import 'react-native-reanimated';


import { useColorScheme } from 'react-native';
import tw from '@/tw';
import Toast from 'react-native-toast-message';
import { toastConfig } from '@/components/ui/ToastConfig';



export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
	initialRouteName: '(tabs)',
	// initialRouteName: 'auth',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded, error] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
		...FontAwesome.font,
	});

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	useEffect(() => {
		if (error) throw error;
	}, [error]);

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return <RootLayoutNav />
}

function RootLayoutNav() {
	useDeviceContext(tw)
	const colorScheme = useColorScheme();

	return <>
		<Stack key={tw.memoBuster} 
		initialRouteName={unstable_settings.initialRouteName}
		screenOptions={{
			headerStyle: tw`header`,
			headerTintColor: tw.color(colorScheme === "dark" ? `slate-100` : `slate-900`),
		}}>
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			<Stack.Screen name="auth" options={{ headerShown: false }} />
		</Stack>
		<Toast config={toastConfig} />
	</>
}
