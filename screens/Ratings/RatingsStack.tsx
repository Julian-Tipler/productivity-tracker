import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RatingsProvider } from "../../contexts/RatingsContext";
import {RatingsScreen} from "./RatingsScreen";

const Stack = createNativeStackNavigator();

export const RatingsStack = () => {
  return (
    <RatingsProvider>
        <Stack.Navigator>
          <Stack.Screen
            name={"RatingsScreen"}
            component={RatingsScreen}
          />
        </Stack.Navigator>
    </RatingsProvider>
  );
};
