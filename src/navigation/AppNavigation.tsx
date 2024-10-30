import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {GameStack} from './stacks';
import {addInfo, Home} from '../screens';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="GameStack" component={GameStack} />
        <Stack.Screen name="AddInfo" component={addInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
