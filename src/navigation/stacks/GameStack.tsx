import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {addInfo, Game} from '../../screens';
import {userInfo} from '../../feature/user/userSlice';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const GameStack = () => {
  const userInfomation = useSelector(userInfo);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {userInfomation?.name ? (
        <Stack.Screen name="AddInfo" component={addInfo} />
      ) : null}
      <Stack.Screen name="Game" component={Game} />
    </Stack.Navigator>
  );
};

export default GameStack;
