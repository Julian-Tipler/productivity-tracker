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
  selection,
  setSelection,
}: {
  categories: Category[];
  currentIndex: number;
  setCurrentIndex: Function;
  selection: number | null;
  setSelection: Function;
}) => {
  const buttonSelected = !!selection;
  return (
    <>
      <CategoryCard
        category={categories[currentIndex]}
        selection={selection}
        setSelection={setSelection}
      />
      {buttonSelected && (
        <Button onPress={() => onSubmit(currentIndex, setCurrentIndex,setSelection)}>
          Next Category
        </Button>
      )}
    </>
  );
};

const onSubmit = (currentIndex:number, setCurrentIndex:Function, setSelection: Function) => {
  setCurrentIndex(currentIndex + 1);
  setSelection(null);
  console.log("backend write");
};
