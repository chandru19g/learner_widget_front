import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import RootStackScreen from './screens/auth/RootStackScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
      {/* <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={MainTabScreen} />
        <Stack.Screen name="Ask" component={AskScreen} />
        <Stack.Screen name="Like" component={LikeScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="QuestionAsked" component={QuestionAsked} />
        <Stack.Screen name="ViewQuestion" component={ViewQuestion} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default App;
