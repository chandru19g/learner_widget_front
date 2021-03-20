// import {Header, Title, Body} from 'native-base';
import React from 'react';
import {ScrollView, View, StyleSheet, Dimensions} from 'react-native';
import Search from '../components/Search';
import HomeQuestions from '../components/HomeQuestions';

const {height} = Dimensions.get('screen');

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <View style={styles.container}>
        <Search />
        <ScrollView style={{height: height - 200}}>
          <HomeQuestions navigation={navigation} />
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  input: {
    margin: 10,
    padding: 10,
    color: '#000',
    fontSize: 20,
  },
  action: {
    // margin: 10,
    borderWidth: 1,
    borderColor: '#D7FDEC',
    backgroundColor: '#B2E4DB',
    borderRadius: 20,
  },
});
