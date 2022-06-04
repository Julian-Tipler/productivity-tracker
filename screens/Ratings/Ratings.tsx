import { View, Text } from "react-native";
import React, { useContext, useState } from "react";
import { Button } from "react-native-paper";

import { RatingCard } from "./RatingCard";
import { Rating, RatingsContext } from "../../contexts/RatingsContext";

export const Ratings = ({ratings}: {ratings:any}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      {currentIndex < ratings.length ? (
        <RatingCard
          rating={ratings[currentIndex]}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      ) : (
        <View>
          <Text>No ratings left today!</Text>
        </View>
      )}

    </>
  );
};


