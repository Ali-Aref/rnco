import React from "react";
import {
  View,
  Text,
  ScrollView,
} from "react-native";
import tw from "../../tw";
import { Link, useNavigation } from "expo-router";
import AuthLogo from "../../components/auth/logo";
import Input from "../../components/ui/Input";
import { AntDesign, Feather } from "@expo/vector-icons";
import Button from "../../components/ui/Button";

export default function ForgotPasswordScreen() {
	const navigation = useNavigation()

	const handleSubmitCode = () => {
		navigation.navigate("reset-password")
	}

  return (
    <ScrollView style={tw`view px-[15%]`}>
      <View style={tw`w-full gap-1 items-center pt-[10%]`}>
        <AuthLogo />
        <Text style={tw`text text-xl font-bold`}>Forgot Password</Text>
        <View style={tw`w-full items-center gap-3`}>
          <Input
            label="Email"
						keyboardType="email-address"
            leftIcon={<AntDesign name="mail" size={18} />}
						description="We will send a verification code to your email address"
          />
          <Button variant="primary" onPress={handleSubmitCode}>Send Code</Button>
					<Button variant="ghost" onPress={()=>navigation.goBack()}
					labelStyle={tw`font-semibold`}
					>Back</Button>
        </View>
      </View>
    </ScrollView>
  );
}
