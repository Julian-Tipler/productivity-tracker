import { useEffect, useContext } from "react";
import { StyleSheet } from "react-native";

import { View } from "../../components/Themed";
import { Dailys } from "./Dailys";
import ZeroState from "./ZeroState";
import { RootTabScreenProps } from "../../types";
import { CategoriesContext } from "../../contexts/CategoriesContext";

export function DailysScreen({ navigation }: RootTabScreenProps<"TabOne">) {
  const { dailys, getCategories } = useContext(CategoriesContext) as any;

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <View style={styles.container}>
      {dailys.length ? <Dailys dailys={dailys} /> : <ZeroState />}
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
