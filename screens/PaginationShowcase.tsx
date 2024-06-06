import React from "react";
import { ScrollView, View } from "react-native";
import tw from "../tw";
import { StatusBar } from "expo-status-bar";
import { useDeviceContext } from "twrnc";
import Card from "../components/ui/Card";
import { RootSiblingParent } from "react-native-root-siblings";
import Pagination from "../components/ui/Pageniation";

export default function App() {
  useDeviceContext(tw);

  return (
    <RootSiblingParent>
      <ScrollView style={tw`flex-1 view`}>
        <StatusBar style="dark" />
        <View style={tw`vstack my-10 px-4 gap-4`}>
          <Card title="Pagination" contentStyle={tw`hstack justify-evenly`}>
            <Pagination
              total={20}
              current={1}
              onChange={(val) => {
                console.log("change to page: ", val);
              }}
            />
          </Card>
        </View>
      </ScrollView>
    </RootSiblingParent>
  );
}
