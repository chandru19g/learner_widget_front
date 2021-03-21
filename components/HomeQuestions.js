// import {Container, Header, Left, Title, Body, Right} from 'native-base';
import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {ScrollView, StyleSheet, Dimensions} from 'react-native';
import Question from '../components/Question';
import {getAllQuestionHelper} from '../screens/helper/question';

const {width} = Dimensions.get('window');

let s =
  'Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world';
const HomeQuestions = ({navigation}) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getAllQuestionHelper().then(result => {
      if (result.error) {
        return;
      }
      setQuestions(result.questions);
      setLoading(false);
    });
  }, []);
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
    // flex: 1,
    height: '100%',
    // backgroundColor: 'red',
  },
});
