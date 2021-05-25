import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Signup from './Signup';
import Signin from './Signin';
import MainTabScreen from '../MainTabScreen';
import AskScreen from '../AskScreen';
import LikeScreen from '../LikeScreen';
import SettingScreen from '../SettingScreen';
import ChangePassword from '../../components/ChangePassword';
import QuestionAsked from '../../components/QuestionAsked';
import ViewQuestion from '../../components/ViewQuestion';
import ForgotPassword from '../../components/ForgotPassword';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="Signup" component={Signup} />
      <RootStack.Screen name="Signin" component={Signin} />
      <RootStack.Screen name="Home" component={MainTabScreen} />
      <RootStack.Screen name="Ask" component={AskScreen} />
      <RootStack.Screen name="Like" component={LikeScreen} />
      <RootStack.Screen name="Setting" component={SettingScreen} />
      <RootStack.Screen name="ChangePassword" component={ChangePassword} />
      <RootStack.Screen name="QuestionAsked" component={QuestionAsked} />
      <RootStack.Screen name="ViewQuestion" component={ViewQuestion} />
      <RootStack.Screen name="ForgotPassword" component={ForgotPassword} />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
