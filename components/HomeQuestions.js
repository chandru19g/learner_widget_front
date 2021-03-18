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

const {width} = Dimensions.get('window');

const Question = ({heading, question, author, date}) => {
  return (
    <TouchableOpacity style={styles.wrapper}>
      <View style={styles.action}>
        <View style={styles.actionBody}>
          <Text style={styles.heading}>{heading.substring(0, 10)}</Text>

          <Text style={styles.question}>{question.substring(0, 150)} ...</Text>
          <View style={styles.actionFooter}>
            <Text style={styles.author}>{author}</Text>
            <Text style={styles.date}>{date}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

let s =
  'Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world';
const HomeQuestions = () => {
  return (
    <ScrollView style={styles.container}>
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
  wrapper: {
    width: width - 30,
    height: 190,
    marginVertical: 4,
  },
  action: {
    height: '100%',
    flex: 1,
    borderWidth: 4,
    borderColor: '#D7FDEC',
    backgroundColor: '#B2E4DB',
    borderRadius: 10,
    elevation: 3,
    alignItems: 'center',
  },

  actionBody: {
    width: '90%',
    height: '100%',
    justifyContent: 'space-evenly',
  },
  heading: {fontWeight: 'bold', fontSize: 20},
  question: {
    color: '#000',
    fontSize: 15,
  },
  actionFooter: {
    // backgroundColor: 'red',
    // width: '100%',
    // alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  author: {
    color: '#6e7c7c',
    fontWeight: 'bold',
    fontSize: 12,
  },
  date: {
    color: '#6e7c7c',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
