import { Link } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

export default function Index() {
  return (
    <View>
      <Text>Here is the root INdex</Text>
      <Link href="/auth/login">GO TO :: Login ::</Link>
      <Link href="/profile">GO TO PROFIL</Link>
      <Link href="/onBoarding">GO TO Borading</Link>
      <Link href="/tabs">GO TO TABS</Link>
    </View>
  );
}
