import React from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   Dimensions,
// } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import RootStackScreen from './screens/RootStackScreen';

const App = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({
//   container: {backgroundColor: '#F8F9FA', flex: 1, justifyContent: 'center'},
//   header: {},
//
// });

export default App;
