import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DailysProvider } from "../../contexts/_RatingsContext";
import { DailysScreen } from "./DailysScreen";

const Stack = createNativeStackNavigator();

export const RatingsStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name={"RatingsScreen"} component={DailysScreen} />
      </Stack.Navigator>
  );
};
