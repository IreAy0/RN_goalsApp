import { StyleSheet, View, TextInput, Button, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { GoalProvider } from "./store/GoalContext";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GoalDetails from "./screens/GoalDetails";
import Home from "./screens/Home";
import EditGoal from "./screens/EditGoal";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GoalProvider>
      <StatusBar style="dark" />
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
          name='Home' 
          component={Home} 
          options={{ headerShown: false }}

        />
        <Stack.Screen 
          name='Goal Details' 
          component={GoalDetails} 
          options={{
            title: 'Goal Detail',
          }}
        />
      <Stack.Screen 
          name='Edit Goal' 
          component={EditGoal} 
          options={{
            title: 'Edit Goal',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </GoalProvider>

  );
}

const styles = StyleSheet.create({
 
});
