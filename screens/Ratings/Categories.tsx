import { View, Text } from "react-native";
import React, { useState } from "react";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { RectButton } from "react-native-gesture-handler";
import { CategoryCard } from "./CategoryCard";
import { Category } from "./RatingsScreen";
import { Button } from "react-native-paper";

//this will eventually (possibly) contain multiple category cards in it

export const Categories = ({
  categories,
  selection,
  setSelection,
}: {
  categories: Category[];
  selection: number | null;
  setSelection: Function;
}) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const buttonSelected = !!selection;
  return (
    <>
      {currentIndex<categories.length ? <CategoryCard
        category={categories[currentIndex]}
        selection={selection}
        setSelection={setSelection}
      /> :
      <View><Text>No categories left today!</Text></View>}
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
