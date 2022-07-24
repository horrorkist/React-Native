import react from "react";
import { Text, TouchableOpacity } from "react-native";

export default function Movies({ navigation: { navigate } }) {
  return (
    <TouchableOpacity
      onPress={() => navigate("stacks", { screen: "three" })}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>Movies</Text>
    </TouchableOpacity>
  );
}
