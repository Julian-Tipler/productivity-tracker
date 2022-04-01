import { StyleSheet } from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";

export default function Home({ navigation }: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <Card>
        <Card.Title title="Card Title" />
        <Card.Content>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
