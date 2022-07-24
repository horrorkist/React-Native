import react from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const Btn = styled.TouchableOpacity`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: blue;
`;

export default function Movies({ navigation: { navigate } }) {
  return (
    <Btn onPress={() => navigate("stacks", { screen: "three" })}>
      <Text>Movies</Text>
    </Btn>
  );
}
