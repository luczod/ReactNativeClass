import React from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import { HeaderFlatBox } from "../components/HeaderFlat";
// npx expo start --clear

export function Home() {
  function handlerClick() {
    console.log("clicou");
  }
  return (
    <SafeAreaView>
      <View className="m-10">
        <HeaderFlatBox />
      </View>
      <TouchableOpacity
        onPress={handlerClick}
        className="bg-blue-500 mx-auto rounded-full w-28"
      >
        <Text className=" ml-3 p-3">clica aqui</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
