import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import tw from "../../tw";
import { Link } from "expo-router";
import AuthLogo from "../../components/auth/logo";
import Input from "../../components/ui/Input";
import { AntDesign, Feather } from "@expo/vector-icons";
import Button from "../../components/ui/Button";

export default function RegisterScreen() {
  const [showPassword, setShowPassword] = useState(false);

	const handleRegisterAccount = () => {
		console.log("handle regiter account")
	}

  return (
    <ScrollView style={tw`view px-[15%]`}>
      <View style={tw`w-full gap-1 items-center pt-[10%]`}>
        <AuthLogo />
        <Text style={tw`text text-xl font-bold mb-2`}>Register Account</Text>
        <View style={tw`w-full items-center gap-3`}>
          <Input
            label="Username"
            leftIcon={<AntDesign name="user" size={18} />}
          />
          <Input
            label="Email"
						keyboardType="email-address"
            leftIcon={<AntDesign name="mail" size={18} />}
          />
            <Input
              secureTextEntry={!showPassword}
              label="Password"
              leftIcon={<AntDesign name="lock1" size={18} />}
              rightIcon={
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                >
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
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Feather name={showPassword ? "eye-off" : "eye"} size={18} />
                </TouchableOpacity>
              }
            />
          <Button variant="primary" onPress={handleRegisterAccount}>Register</Button>
          <Text>
            Already have account?{" "}
            <Link href={"/auth/login"} style={tw`font-semibold`}>
              Login
            </Link>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
