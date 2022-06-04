import { View, Text } from "react-native";
import React, { useState } from "react";

import { DailyCard } from "./DailyCard";

export const Dailys = ({ dailys }: { dailys: any }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      {currentIndex < dailys.length ? (
        <DailyCard
          rating={dailys[currentIndex]}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      ) : (
        <View>
          <Text>No dailys left today!</Text>
        </View>
      )}
    </>
  );
};
