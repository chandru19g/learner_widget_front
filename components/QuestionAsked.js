import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import {getQuestionByUserHelper} from '../screens/helper/question';
import Question from './Question';

const {width} = Dimensions.get('window');

const QuestionAsked = ({navigation, route}) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log(route.params.userId);
    getQuestionByUserHelper(route.params.userId).then(result => {
      if (result.error) {
        Alert.alert(result.message);
        return;
      }
      setLoading(false);
      console.log(result);
      setQuestions(result.questions);
    });
  }, []);
  return (
    <View style={styles.container}>
      <View
        style={{
          marginVertical: 20,
          backgroundColor: '#F4D1AE',
          padding: 10,
          width: '90%',
          borderRadius: 10,
        }}>
        <Text style={{fontSize: 22, fontWeight: 'bold'}}>
          <TouchableOpacity
            style={{width: 20}}
            onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/icons/back.png')}
              resizeMode="contain"
              style={[styles.userimg, {height: 20, width: 20, marginLeft: 5}]}
            />
          </TouchableOpacity>
          {' \t\v'}
          QUESTIONS POSTED{' '}
          <Image
            source={require('../assets/icons/post.png')}
            resizeMode="contain"
            style={[styles.userimg, {height: 30, width: 30}]}
          />{' '}
        </Text>
      </View>
      {loading ? (
        <View>
          <Text>Loading</Text>
        </View>
      ) : (
        <ScrollView
          style={{
            flex: 1,
          }}>
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
          {!loading && questions.length === 0 ? (
            <View>
              <Text>No Question posted yet</Text>
            </View>
          ) : (
            <View></View>
          )}
        </ScrollView>
      )}
    </View>
  );
};

export default QuestionAsked;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
