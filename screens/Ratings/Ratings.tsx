import { View, Text } from "react-native";
import React, { useContext, useState } from "react";
import { Button } from "react-native-paper";

import { RatingCard } from "./RatingCard";
import { Rating, RatingsContext } from "../../contexts/RatingsContext";

export const Ratings = ({ratings}: {ratings:any}) => {

  const [selection, setSelection] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const buttonSelected = !!selection;

  console.log(ratings)

  const onSubmitRating = (

  ) => {
    setCurrentIndex(currentIndex+1)
    setSelection(null)
  };
  
  return (
    <>
      {currentIndex < ratings.length ? (
        <RatingCard
          rating={ratings[currentIndex]}
          selection={selection}
          setSelection={setSelection}
        />
      ) : (
        <View>
          <Text>No ratings left today!</Text>
        </View>
      )}
      {buttonSelected && (
        <Button
          onPress={() =>
            onSubmitRating()
          }
        >
          Next Category
        </Button>
      )}
    </>
  );
};


