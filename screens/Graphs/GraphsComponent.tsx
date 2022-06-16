import { StyleSheet, Dimensions } from "react-native";
import { useContext, useEffect } from "react";
import { View } from "../../components/Themed";
import { LineChart } from "react-native-chart-kit";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import GraphSelection from "./GraphSelection";
import { LoadingState } from "../../components/LoadingState";

const GraphsComponent = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}: any) => {
  const { ratings, getCategories, getRatings } = useContext(
    CategoriesContext
  ) as any;

  useEffect(() => {
    getRatings(categories[selectedCategory]);
  }, [selectedCategory]);

  const dates = getDatesFromRatings({ ratings });
  const data = getDataFromRatings({ ratings });

  return (
    <View>
      {ratings.length ? (
        <LineChart
          data={{
            labels: dates ? dates : null,
            datasets: [
              {
                data: data ? data : null,
              },
            ],
          }}
          width={Dimensions.get("window").width} // from react-native
          height={220}
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
      ) : (
        <LoadingState />
      )}
      <GraphSelection
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </View>
  );
};

const getDataFromRatings = ({ ratings }: { ratings: any }) => {
  if (!ratings) return null;
  return ratings.map((rating: any) => {
    return parseInt(rating.value);
  });
};

const getDatesFromRatings = ({ ratings }: { ratings: any }) => {
  if (!ratings) return null;
  return ratings.map((rating: any) => {
    return getDayFromSeconds({ seconds: rating.createdAt.seconds });
  });
};

const getDayFromSeconds = ({ seconds }: { seconds: number }) => {
  var d = new Date(seconds * 1000);
  return d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(); // 01/10/2020, 10:35:02
};

export default GraphsComponent;

const styles = StyleSheet.create({});
