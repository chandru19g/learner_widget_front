import React from 'react';
import {StyleSheet, Text, Image} from 'react-native';

// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './HomeScreen';
import AskScreen from './AskScreen';
import LikeScreen from './LikeScreen';
import SettingScreen from './SettingScreen';

const Tab = createBottomTabNavigator();

const MainTabScreen = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 60,
          width: 350,
          flexDirection: 'column',
          alignSelf: 'center',
          elevation: 6,
          borderTopStartRadius: 15,
          borderTopEndRadius: 15,
          backgroundColor: '#fff',
        },
        activeTintColor: 'red',
      }}
      initialRouteName="Home">
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/home.png')}
              resizeMode="contain"
              style={{
                width: focused ? 35 : 25,
                height: focused ? 35 : 25,
                tintColor: focused ? '#66CAC9' : '#C5D8D1',
              }}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? 'black' : '#CDCDD2',
                fontSize: 10,
                fontWeight: focused ? 'bold' : 'normal',
              }}>
              Home
            </Text>
          ),
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
                width: focused ? 35 : 25,
                height: focused ? 35 : 25,
                tintColor: focused ? '#66CAC9' : '#C5D8D1',
              }}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? 'black' : '#CDCDD2',
                fontSize: 10,
                fontWeight: focused ? 'bold' : 'normal',
              }}>
              Ask Question
            </Text>
          ),
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
                width: focused ? 35 : 25,
                height: focused ? 35 : 25,
                tintColor: focused ? '#66CAC9' : '#C5D8D1',
              }}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? 'black' : '#CDCDD2',
                fontSize: 10,
                fontWeight: focused ? 'bold' : 'normal',
              }}>
              Saved
            </Text>
          ),
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
                width: focused ? 35 : 25,
                height: focused ? 35 : 25,
                tintColor: focused ? '#66CAC9' : '#C5D8D1',
              }}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? 'black' : '#CDCDD2',
                fontSize: 10,
                fontWeight: focused ? 'bold' : 'normal',
              }}>
              Settings
            </Text>
          ),
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
