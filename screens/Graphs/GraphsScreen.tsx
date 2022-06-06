import { StyleSheet, Dimensions } from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";

import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";

import { LineChart } from "react-native-chart-kit";
import { useContext, useEffect } from "react";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import {} from "react-native";
import { getCategories } from "../../api/Categories/getCategories";

export function GraphsScreen({ navigation }: RootTabScreenProps<"TabOne">) {
  const { ratings, getRatings, categories, getCategories } = useContext(
    CategoriesContext
  ) as any;

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    getRatings({ id: categories[0]?.id });
  }, [categories]);

  const screenWidth = Dimensions.get("window").width;
  const dates = getDatesFromRatings({ ratings });
  const data = getDataFromRatings({ ratings });
  console.log(dates);
  console.log(data);
  return (
    <View>
      <LineChart
        data={{
          labels: dates,
          datasets: [
            {
              data: data,
            },
          ],
        }}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
}

const getDataFromRatings = ({ ratings }) => {
  return ratings.map((rating) => {
    return parseInt(rating.value);
  });
};

const getDatesFromRatings = ({ ratings }) => {
  return ratings.map((rating) => {
    return getDayFromSeconds({ seconds: rating.createdAt.seconds });
  });
};

const getDayFromSeconds = ({ seconds }: { seconds: number }) => {
  var d = new Date(seconds * 1000);
  return d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(); // 01/10/2020, 10:35:02
};
