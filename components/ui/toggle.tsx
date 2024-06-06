import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

type ToggleProps = {
  value?: boolean;
  onChange?: (value: boolean) => void;
  activeIcon: React.ReactNode;
  inactiveIcon: React.ReactNode;
};

export default function Toggle({
  value,
  onChange,
  activeIcon,
  inactiveIcon,
  ...props
}: ToggleProps) {
  const [on, setOn] = useState<boolean>(!!value);

  return (
    <TouchableOpacity
      {...props}
      onPress={() => {
        setOn((c) => !c);
        !!onChange && onChange(!on);
      }}
    >
      {on ? activeIcon : inactiveIcon}
    </TouchableOpacity>
  );
}
