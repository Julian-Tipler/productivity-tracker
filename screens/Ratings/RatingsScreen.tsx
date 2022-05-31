import { useState, useEffect, useContext } from "react";
import { StyleSheet } from "react-native";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

import { Text, View } from "../../components/Themed";
import { Ratings } from "./Ratings";
import ZeroState from "./ZeroState";
import { AuthContext } from "../../contexts/AuthContext";
import { getCategories } from "../../api/Categories/getCategories";
import { RootTabScreenProps } from "../../types";
import { RatingsContext } from "../../contexts/RatingsContext";

export function RatingsScreen({ navigation }: RootTabScreenProps<"TabOne">) {
  const { ratings, getRatings } = useContext(RatingsContext) as any;

  useEffect(() => {
    getRatings();
  }, []);

  return (
    <View style={styles.container}>
      {ratings.length ? (
        <Ratings
          ratings={ratings}
        />
      ) : (
        <ZeroState />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
