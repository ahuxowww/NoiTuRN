import React from 'react';
import Game from '../screens/game';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Game} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
