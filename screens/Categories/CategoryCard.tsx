import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Category } from "../../contexts/CategoriesContext";
import { Card } from "@rneui/themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

export const CategoryCard = ({
  category,
  deleteCategory,
}: {
  category: Category;
  deleteCategory: Function;
}) => {
  const { id, name, ratingParameter } = category;
  const [detailsOpen, setDetailsOpen] = useState<boolean>(false);

  return (
    <Card containerStyle={styles.card}>
      <View style={styles.header}>
        <Card.Title style={styles.title}>{name}</Card.Title>
        <TouchableOpacity onPress={() => setDetailsOpen(!detailsOpen)}>
          {detailsOpen ? <Text>^</Text> : <Text>v</Text>}
        </TouchableOpacity>
      </View>
      <Card.Divider />
      {detailsOpen ? (
        <View style={styles.dropdown}>
          <Text>Rating Parameter: {ratingParameter}</Text>
          <View style={styles.dropdownButtons}>
            <TouchableOpacity onPress={() => deleteCategory({ id })}>
              <FontAwesome name="close" color="red" size={40} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteCategory({ id })}>
              <FontAwesome name="edit" color="red" size={40} />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View></View>
      )}
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 0.5,
    backgroundColor: "orange",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    textAlign: "left",
  },
  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dropdownButtons: {
    flexDirection: "row",
  },
});
