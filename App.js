import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// import RootStackScreen from './screens/RootStackScreen';
import MainTabScreen from './screens/MainTabScreen';
import AskScreen from './screens/AskScreen';
import LikeScreen from './screens/LikeScreen';
import SettingScreen from './screens/SettingScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={MainTabScreen} />
        <Stack.Screen name="Ask" component={AskScreen} />
        <Stack.Screen name="Like" component={LikeScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
      </Stack.Navigator>
      {/* <RootStackScreen /> */}
    </NavigationContainer>
  );
};

export default App;
