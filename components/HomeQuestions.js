// import {Container, Header, Left, Title, Body, Right} from 'native-base';
import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Question from '../components/Question';

const {width} = Dimensions.get('window');

let s =
  'Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world';
const HomeQuestions = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      {console.log(navigation, ' -h ')}
      <Question
        navigation={navigation}
        heading={'Heading'}
        question={s}
        author={'Author'}
        date={'MAR 5 , 2020'}
      />
      <Question
        heading={'Heading'}
        question={s}
        author={'Author'}
        date={'MAR 5 , 2020'}
      />
      <Question
        heading={'Heading'}
        question={s}
        author={'Author'}
        date={'MAR 5 , 2020'}
      />
      <Question
        heading={'Heading'}
        question={s}
        author={'Author'}
        date={'MAR 5 , 2020'}
      />
      <Question
        heading={'Heading'}
        question={s}
        author={'Author'}
        date={'MAR 5 , 2020'}
      />
    </ScrollView>
  );
};

export default HomeQuestions;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%',
    // backgroundColor: 'red',
  },
});
