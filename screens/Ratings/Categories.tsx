import { View, Text } from "react-native";
import React from "react";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { RectButton } from "react-native-gesture-handler";
import { CategoryCard } from "./CategoryCard";
import { Category } from "./RatingsScreen";
import { Button } from "react-native-paper";

//this will eventually (possibly) contain multiple category cards in it

export const Categories = ({
  categories,
  currentIndex,
  setCurrentIndex,
}: {
  categories: Category[];
  currentIndex: number;
  setCurrentIndex: Function;
}) => {
  return (
    <>
      <CategoryCard category={categories[currentIndex]} />
      {currentIndex && <Button onPress={() => onSubmit(currentIndex,setCurrentIndex)} />}
    </>
  );
};

const onSubmit = (currentIndex,setCurrentIndex) => {
    setCurrentIndex(currentIndex+1)
    console.log("backend write")
};
