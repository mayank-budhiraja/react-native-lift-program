import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// Screens
import  HomeScreen  from './src/screens/Home'
import  Final_Output  from './src/screens/Final_Output'

// Redux
import store from './src/redux/Store'
import { Provider as StoreProvider } from 'react-redux'

const Stack = createStackNavigator();

const App = () => {
  return (
    <StoreProvider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Final" component={Final_Output} />
          </Stack.Navigator>
        </NavigationContainer>
    </StoreProvider>
    
  );
}
export default App