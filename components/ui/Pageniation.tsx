import React, { useState } from "react";
import { View } from "react-native";
import tw from "../../tw";
import Button from "./Button";
import { AntDesign } from "@expo/vector-icons";

type PaginationProps = {
  total: number;
  current: number;
  onChange: (val: number) => void;
};

export default function Pagination({
  total,
  current,
  onChange,
}: PaginationProps) {
  const [page, setpage] = useState<number>(current);

  const firstpage = () => {
    setpage(1);
    onChange(1);
  };
  const lastpage = () => {
    setpage(total);
    onChange(total);
  };
  const nextPage = () => {
    if (page !== total) {
      setpage(page + 1);
      onChange(page + 1);
    }
  };
  const prevPage = () => {
    if (page !== 1) {
      setpage(page - 1);
      onChange(page - 1);
    }
  };

  return (
    <View style={tw`flex flex-1 flex-row flex-wrap justify-center gap-2`}>
      {page > 1 + 1 && (
        <Button variant="outline" onPress={firstpage}>
          <AntDesign name="doubleleft" />
        </Button>
      )}
      {page > 1 && (
        <Button variant="outline" onPress={prevPage}>
          <AntDesign name="left" />
        </Button>
      )}
      <Button variant="primary">{page}</Button>
      {page < total && (
        <Button variant="outline" onPress={nextPage}>
          <AntDesign name="right" />
        </Button>
      )}
      {page < total - 1 && (
        <Button variant="outline" onPress={lastpage}>
          <AntDesign name="doubleright" />
        </Button>
      )}
    </View>
  );
}
