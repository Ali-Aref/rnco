import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import tw from "../../tw";
import { Link, useNavigation } from "expo-router";
import AuthLogo from "../../components/auth/logo";
import Input from "../../components/ui/Input";
import { AntDesign, Feather } from "@expo/vector-icons";
import Button from "../../components/ui/Button";

export default function ResetPassswordScreen() {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);

	const resendVerificationCode = () => {
		console.log("send the verification code to email")
	}
	const handleResetPassword = () => {
		console.log("reset the password with the given code")
	}


  return (
    <ScrollView style={tw`view px-[15%]`}>
      <View style={tw`w-full gap-1 items-center pt-[10%]`}>
        <AuthLogo />
        <Text style={tw`text text-xl font-bold mb-2`}>Reset Password</Text>
        <View style={tw`w-full items-center gap-3`}>
					<View style={tw`w-full gap-1`}>
          <Input
            label="Verification Code"
            leftIcon={<AntDesign name="phone" size={18} />}
          />
          <Text onPress={resendVerificationCode}>Didn't receive the code?</Text>
					</View>
          <Input
            secureTextEntry={!showPassword}
            label="New Password"
            leftIcon={<AntDesign name="lock1" size={18} />}
            rightIcon={
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Feather name={showPassword ? "eye-off" : "eye"} size={18} />
              </TouchableOpacity>
            }
            description="The password should be at least 6 characters"
          />
          <Input
            secureTextEntry={!showPassword}
            label="Confirm Password"
            leftIcon={<AntDesign name="lock1" size={18} />}
            rightIcon={
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Feather name={showPassword ? "eye-off" : "eye"} size={18} />
              </TouchableOpacity>
            }
          />
          <Button variant="primary">Login</Button>
          <Button variant="ghost" labelStyle={tw`font-semibold`} onPress={()=>navigation.goBack()}>Back</Button>
        </View>
      </View>
    </ScrollView>
  );
}
