import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import Hello from './page/hello';
import Main from './page/main';


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Hello">
        <Stack.Screen name="Hello" component={Hello} options={{ headerShown: false }} />
        <Stack.Screen name="Telegram" component={Main} options={{ headerShown: false }}/>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
