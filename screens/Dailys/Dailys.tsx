import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";

import { DailyCard } from "./DailyCard";

export const Dailys = ({ dailys }: { dailys: any }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      {currentIndex < dailys.length ? (
        <DailyCard
          daily={dailys[currentIndex]}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      ) : (
        <View style={styles.zeroState}>
          <Text>No dailys left today!</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  zeroState: {
    alignItems: "center",
    margin: 15,
  },
});
