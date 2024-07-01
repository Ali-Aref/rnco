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

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ScrollView style={tw`view px-[15%]`}>
      <View style={tw`w-full gap-1 items-center pt-[10%]`}>
        <AuthLogo />
        <Text style={tw`text text-xl font-bold`}>Welcome</Text>
        <View style={tw`w-full items-center gap-3`}>
          <Input
            label="Phone"
            keyboardType="phone-pad"
            leftIcon={<AntDesign name="phone" size={18} />}
          />
          <View style={tw`w-full gap-1`}>
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
            />
            <Link href="/auth/forgot-password" style={tw`font-semibold`}>
              Forgot password?
            </Link>
          </View>
          <Button variant="primary">Login</Button>
          <Text>
            Don't have an account?{" "}
            <Link href={"/auth/register"} style={tw`font-semibold`}>
              Create one
            </Link>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
