import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './HomeScreen';
import AskScreen from './AskScreen';
import LikeScreen from './LikeScreen';
import SettingScreen from './SettingScreen';

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={{backgroundColor: '#fff'}}
      tabBarOptions={{showLabel: true}}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/home.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#009387' : '#540D6E',
              }}
            />
          ),
          tabBarLabel: 'Home',
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Ask"
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/ask.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#009387' : '#540D6E',
              }}
            />
          ),
          tabBarLabel: 'Ask',
          // ({focused}) => (
          //   <Text
          //     style={{
          //       color: focused ? '#fff' : '#CDCDD2',
          //       fontSize: 10,
          //       fontWeight: focused ? 'bold' : 'normal',
          //     }}>
          //     Ask
          //   </Text>
          // ),
        }}
        component={AskScreen}
      />
      <Tab.Screen
        name="Like"
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/like.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#009387' : '#540D6E',
              }}
            />
          ),
          tabBarLabel: 'Like',
        }}
        component={LikeScreen}
      />
      <Tab.Screen
        name="Setting"
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/settings.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#009387' : '#540D6E',
              }}
            />
          ),
          tabBarLabel: 'Settings',
        }}
        component={SettingScreen}
      />
    </Tab.Navigator>
  );
};

export default MainTabScreen;

const styles = StyleSheet.create({
  tabs: {
    backgroundColor: '#009387',
    color: 'white',
  },
  tabtext: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
