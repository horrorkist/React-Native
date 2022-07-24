import react from "react";
import { Text } from "react-native";
import { useTheme } from "styled-components";
import styled from "styled-components/native";

const Btn = styled.TouchableOpacity`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.mainBgColor};
`;

export default function Movies({ navigation: { navigate } }) {
  const theme = useTheme();
  return (
    <Btn onPress={() => navigate("stacks", { screen: "three" })}>
      <Text style={{ color: theme.textColor }}>Movies</Text>
    </Btn>
  );
}
