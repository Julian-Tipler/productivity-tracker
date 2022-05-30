import { View, Text } from "react-native";
import React, { useState } from "react";
import { Button } from "react-native-paper";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { RectButton } from "react-native-gesture-handler";
import { db } from "../../firebase/firebaseConfig";

import { RatingCard } from "./RatingCard";
import { Category } from "./RatingsScreen";


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
      {currentIndex < categories.length ? (
        <RatingCard
          category={categories[currentIndex]}
          selection={selection}
          setSelection={setSelection}
        />
      ) : (
        <View>
          <Text>No categories left today!</Text>
        </View>
      )}
      {buttonSelected && (
        <Button
          onPress={() => onSubmitRating(currentIndex, setCurrentIndex, setSelection)}
        >
          Next Category
        </Button>
      )}
    </>
  );
};

const onSubmitRating = (
  currentIndex: number,
  setCurrentIndex: Function,
  setSelection: Function
) => {
//   firestore
//     .collection("books")
//     .add(data)
//     .then(() => {
//       console.log("successful");
//       setCurrentIndex(currentIndex + 1);
//       setSelection(null);
//     })
//     .catch(() => {
//       console.log("whoops, an error");
//     });
};
