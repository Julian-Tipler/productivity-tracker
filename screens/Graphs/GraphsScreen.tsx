import { StyleSheet, Dimensions } from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";

import { useContext, useEffect, useState } from "react";
import { RootTabScreenProps } from "../../types";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import GraphsComponent from "./GraphsComponent";

export function GraphsScreen({ navigation }: RootTabScreenProps<"TabOne">) {
  const { ratings, categories, getCategories } = useContext(
    CategoriesContext
  ) as any;

  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  useEffect(() => {
    getCategories()
  }, []);

  // const screenWidth = Dimensions.get("window").width;

  if(!categories.length) return <></>

  return <GraphsComponent categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
}