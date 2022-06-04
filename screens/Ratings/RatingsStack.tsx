import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DailysProvider } from "../../contexts/RatingsContext";
import { DailysScreen } from "./DailysScreen";

const Stack = createNativeStackNavigator();

export const RatingsStack = () => {
  return (
    <DailysProvider>
      <Stack.Navigator>
        <Stack.Screen name={"RatingsScreen"} component={DailysScreen} />
      </Stack.Navigator>
    </DailysProvider>
  );
};
