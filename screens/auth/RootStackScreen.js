import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Signup from './Signup';
import Signin from './Signin';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="Signup" component={Signup} />
      <RootStack.Screen name="Signin" component={Signin} />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
