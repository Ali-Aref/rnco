import tw from '@/tw';
import React from 'react';
import { Text, View } from 'react-native';
import { BaseToast, BaseToastProps, ErrorToast } from 'react-native-toast-message';

export const toastConfig = {

	success: (props: BaseToastProps) => (
		<BaseToast
			{...props}
			style={{ borderLeftColor: 'pink' }}
			contentContainerStyle={{ paddingHorizontal: 15 }}
			text1Style={{
				fontSize: 15,
				fontWeight: '400',
			}}
		/>
	),
	error: (props: BaseToastProps) => (
		<ErrorToast
			{...props}
			text1Style={{
				fontSize: 17,
			}}
			text2Style={{
				fontSize: 15,
			}}
		/>
	),
	copied: () => (
		<View style={tw`rounded-full elevation-5 bg-slate-50 dark:shadow:md dark:shadow-white`}>
			<Text style={tw`text-black text-xs px-3 py-1`}>Copied to the clipboard</Text>
		</View>
	)
};
