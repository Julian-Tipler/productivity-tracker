import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RatingsProvider } from "../../contexts/RatingsContext";
import { DailysScreen } from "./DailysScreen";

const Stack = createNativeStackNavigator();

export const RatingsStack = () => {
  return (
    <RatingsProvider>
      <Stack.Navigator>
        <Stack.Screen name={"RatingsScreen"} component={DailysScreen} />
      </Stack.Navigator>
    </RatingsProvider>
  );
};
