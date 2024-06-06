import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import Checkbox, { CheckboxProps } from "expo-checkbox";
import tw from "../../tw";

type CheckBoxProps = CheckboxProps & {
  label: string;
  checked: boolean;
  destructive?: string;
};

export default function CheckBox({
  checked,
  label,
  destructive,
  ...props
}: CheckBoxProps) {
  const [isChecked, setChecked] = useState<boolean>(checked);

  return (
    <Pressable
      disabled={props.disabled}
      style={tw`flex flex-1 flex-row gap-2`}
      onPress={() => setChecked(!isChecked)}
    >
      <Checkbox
        {...props}
        value={isChecked}
        onValueChange={setChecked}
        style={tw.style(
					"bg-red-200",
					{
          "border-2 border-destructive": !!destructive,
        })}
      />
      <Text style={tw`text`}>{label}</Text>
    </Pressable>
  );
}
