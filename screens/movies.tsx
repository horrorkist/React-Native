import react from "react";
import { Text } from "react-native";
import styled, { ThemeConsumer } from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

const Btn = styled.TouchableOpacity`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.mainBgColor};
`;

export default function Movies({
  navigation: { navigate },
}: NativeStackScreenProps<any, "Movies">) {
  return (
    <Btn onPress={() => navigate("stacks", { screen: "three" })}>
      <ThemeConsumer>
        {(theme) => <Text style={{ color: theme.textColor }}>Movies</Text>}
      </ThemeConsumer>
    </Btn>
  );
}
