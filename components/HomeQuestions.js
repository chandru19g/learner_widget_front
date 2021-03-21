import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Question from '../components/Question';

const HomeQuestions = ({navigation, questions}) => {
  // const {questions} = route.params;
  return (
    <ScrollView style={styles.container}>
      {questions.map(question => {
        return (
          <Question
            key={question._id}
            navigation={navigation}
            heading={question.heading}
            question={question.description}
            author={question.user}
            date={question.updatedAt.substring(0, 10)}
            _id={question._id}
            all={question}
          />
        );
      })}
    </ScrollView>
  );
};

export default HomeQuestions;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});
