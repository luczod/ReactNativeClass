import { FlatList, Text, View } from "react-native";
const list: string[] = [
  "Banana",
  "Orange",
  "Apple",
  "Mango",
  "Banana",
  "Orange",
  "Apple",
  "Mango",
  "Mango",
  "Banana",
  "Orange",
  "Apple",
  "Mango",
  "Orange",
  "Apple",
  "Mango",
  "Mango",
  "Banana",
  "Orange",
  "Apple",
  "Mango",
  "Orange",
  "Apple",
  "Mango",
  "Mango",
  "Banana",
  "Orange",
  "Apple",
  "Mango",
];

export function HeaderFlatBox() {
  return (
    <View className="bg-zinc-200 w-full items-center">
      <Text className="text-red-500 font-semibold">Hello World</Text>
      <FlatList
        className="h-24 w-52"
        data={list}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
}
