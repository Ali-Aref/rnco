import React, { useState } from "react";
import { View, Text, Image, ScrollView, Pressable } from "react-native";
import tw from "../../tw";
import { Link } from "expo-router";
import AuthLogo from "../../components/auth/logo";
import Input from "../../components/ui/Input";
import Card from "../../components/ui/Card";
import { AntDesign, Feather } from "@expo/vector-icons";
import Button from "../../components/ui/Button";

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ScrollView style={tw`flex-1 view xs:px-[15%]`}>
      <View style={tw`view gap-4 items-center justify-center`}>
        <AuthLogo />
        <Text style={tw`text text-xl font-bold`}>Welcome</Text>
        <Input
          label="Phone number"
          keyboardType="phone-pad"
          leftIcon={<AntDesign name="phone" size={18} />}
        />
        <Input
          label="Password"
          secureTextEntry={!showPassword}
          leftIcon={<AntDesign name="lock1" size={18} />}
          rightIcon={
            <Pressable onPress={() => setShowPassword(!showPassword)}>
              <Feather name={showPassword ? "eye-off" : "eye"} size={18} />
            </Pressable>
          }
        />
        <View style={tw`bg-red-200`}>
          <Button variant="primary" style="w-full">Login</Button>
          <Link href="/auth/forgot-password" style={tw`mt-2 bg-blue-200 text-left`}>Forgot password</Link>
        </View>
        <Text>
          Don't have account?{" "}
          <Link href="/auth/register" style={tw`text-primary`}>
            Create one
          </Link>
        </Text>
      </View>
    </ScrollView>
  );
}

{
  /* 
          <Input label="With Error" error="This field is required" />
          <Input
            label="With Description"
            description="This is a description about this custom filed"
          />
          <Input
            label="With Desc and Err"
            error="This field is required"
            description="This is a description about this custom filed"
          />
          <Input
            label="Left Icon"
            leftIcon={<AntDesign name="home" size={20} style={tw`text`} />}
          />
*/
}
