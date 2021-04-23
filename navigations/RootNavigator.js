import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import CourseScreen from '../screens/CourseScreen';

const MainStack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Home">
        <MainStack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTintColor: 'white',
            headerStyle: {backgroundColor: 'skyblue'},
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="Course"
          component={CourseScreen}
          options={{
            headerTintColor: 'white',
            headerStyle: {backgroundColor: 'skyblue'},
            headerShown: false,
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
