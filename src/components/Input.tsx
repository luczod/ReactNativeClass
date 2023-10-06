import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
// npx expo start --clear

export function InputBox() {
  const [value, setValue] = useState<string>("");
  function handlerChange(
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) {
    setValue(event.nativeEvent.text);
  }
  return (
    <>
      <TextInput
        onChange={handlerChange}
        value={value}
        className="bg-zinc-400 mt-10 p-4"
      />
      <Text>{value}</Text>
    </>
  );
}
