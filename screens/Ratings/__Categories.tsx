import { View, Text } from "react-native";
import React from "react";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { RectButton } from "react-native-gesture-handler";
import { SwipeableCard } from "./CategoryCard";
import { Category } from "./DailysScreen";


export const Categories = ({categories, currentIndex}:{categories: Category[],currentIndex: number}) => {
  const renderLeftActions = () => (
    <RectButton>
      <SwipeableCard category={categories[currentIndex+1]}/>
    </RectButton>
  );

  const renderRightActions = () => (
    <RectButton>
      <SwipeableCard category={categories[currentIndex+1]} />
    </RectButton>
  );

  return (
    <Swipeable
      friction={2}
      leftThreshold={40}
      rightThreshold={40}
      renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}
    >
      <SwipeableCard category={categories[currentIndex]}/>
    </Swipeable>
  );
};
