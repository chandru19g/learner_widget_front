import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const ViewQuestion = ({navigation, route}) => {
  const {heading, author, date, id, question} = route.params;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          marginVertical: 20,
          backgroundColor: '#F4D1AE',
          padding: 10,
          width: '90%',
          borderRadius: 10,
          flexDirection: 'row',
          // flex: 1,
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <Text
          onPress={() => navigation.goBack()}
          style={{
            fontSize: 24,
            fontWeight: 'bold',
          }}>
          {'<'}
        </Text>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
          }}>
          The Learner Widget
        </Text>
      </View>

      <ScrollView style={{width: '100%'}}>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={styles.heading}>
            <Text style={styles.headingText}>{heading}</Text>
          </View>
          <View style={styles.question}>
            <Text style={styles.questionText}>{question}</Text>
            <View style={styles.details}>
              <Text style={styles.detailsText}>{author}</Text>
              <Text style={styles.detailsText}>{date}</Text>
            </View>
          </View>
          <View></View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  heading: {
    backgroundColor: 'white',
    width: '90%',
    padding: 10,
    textAlign: 'center',
    elevation: 2,
    borderRadius: 6,
  },
  headingText: {fontSize: 23, textAlign: 'center', fontWeight: '600'},
  question: {
    width: '90%',
    backgroundColor: 'white',
    padding: 5,
    marginVertical: 10,
    elevation: 2,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: 'red',
  },
  questionText: {
    fontWeight: '400',
    fontSize: 16,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    width: '100%',
  },
  detailsText: {
    color: 'grey',
  },
});

export default ViewQuestion;
