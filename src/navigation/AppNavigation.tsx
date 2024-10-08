import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Cheat from '../screens/cheat';
import Game from '../screens/game';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Game" component={Game} />
        <Stack.Screen name="Cheat" component={Cheat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
