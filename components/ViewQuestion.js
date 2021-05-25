import {Textarea} from 'native-base';
import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
//? Imported Component for Like Button
import LikeComponent from '../components/LikeComponent';
import {addCommentHelper, getQuestionHelper} from '../screens/helper/question';

const {width, height} = Dimensions.get('screen');

const ViewQuestion = ({navigation, route}) => {
  const {heading, author, date, _id, question, all} = route.params;

  const [input, setInput] = useState({
    text: '',
    user: '',
    question: _id,
  });
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const getUser = async () => {
    try {
      const value = await AsyncStorage.getItem('@learner_widget');
      if (value !== null) {
        let temp = JSON.parse(value);
        setInput({...input, user: temp._id});
      } else {
        setUser(null);
        navigation.replace('Home');
      }
    } catch (e) {
      // error reading value
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  useEffect(() => {
    navigation.addListener('focus', () => {
      setComments(all.answers);
      getComments();
    });
  }, [navigation]);

  const getComments = () => {
    getQuestionHelper(_id).then(result => {
      if (!result) {
        Alert.alert('Error', '');
        return;
      }
      if (result.error) {
        Alert.alert('Error', result.message);
        return;
      }
      setComments(result.question.answers);
    });
  };

  const addCommentListener = () => {
    setLoading(true);
    if (input.text.length === 0) {
      Alert.alert('Error', 'Must be more than one char');
      return;
    }
    addCommentHelper(input).then(result => {
      if (result.error) {
        setLoading(false);
        Alert.alert('Error', result.message);
        return;
      }
      getComments();
      setLoading(false);
      Alert.alert('Success', 'Comment Posted Successfully');
      setInput({...input, text: ''});
    });
  };

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
        {/* //?Button for Going Back */}
        <TouchableOpacity
          style={{
            width: 30,
            alignContent: 'flex-start',
            justifyContent: 'flex-start',
            alignItems: 'stretch',
          }}
          onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/icons/back.png')}
            resizeMode="contain"
            style={[styles.userimg, {height: 20, width: 20, marginLeft: 5}]}
          />
        </TouchableOpacity>
        {/* //? Heading of the Page */}
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
          {/* //? Heading Section of the question */}
          <View style={styles.heading}>
            <Text style={styles.headingText}>{heading}</Text>
          </View>
          {/* //? Question Section */}
          <View style={styles.question}>
            <Text style={styles.questionText}>{question}</Text>
            <View style={styles.details}>
              <View>
                <Text style={[styles.detailsText, {fontWeight: 'bold'}]}>
                  - {author.name} {'\t'} {comments.length} available
                </Text>
                <Text style={styles.detailsText}>( {date} )</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{width: '90%', alignSelf: 'center', marginBottom: 3}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>Some Answers</Text>
        </View>
        <View style={{width: '90%', alignSelf: 'center'}}>
          {comments.map(comment => {
            return (
              <View
                key={comment._id}
                style={{
                  backgroundColor: '#c5d8d1',
                  borderRadius: 3,
                  marginVertical: 1,
                  padding: 5,
                  elevation: 2,
                  borderWidth: 1,
                  borderColor: '#f4dfcc',
                }}>
                <Text style={styles.header}>{comment.user.name}</Text>
                <Text style={styles.body}>{comment.text}</Text>
                <View>
                  <Text
                    style={{
                      textAlign: 'right',
                      fontWeight: 'bold',
                      fontSize: 12,
                    }}>
                    {comment.date.substring(0, 10)}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
        <View style={styles.action}>
          <Textarea
            placeholderTextColor="grey"
            style={styles.quescomment}
            placeholder="Add Comment . . "
            value={input.text}
            onChangeText={e => setInput({...input, text: e})}
          />
        </View>
        {/* //? Buuton for Adding Comment */}
        {loading ? (
          <View style={styles.buttonSection}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Posting your comment</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.buttonSection}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => addCommentListener()}>
              <Text style={styles.buttonText}>Add Comment</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  heading: {
    backgroundColor: 'white',
    width: '90%',
    padding: 10,
    borderBottomColor: '#0C717E',
    borderWidth: 2,
    textAlign: 'center',
    elevation: 2,
    borderRadius: 6,
  },
  headingText: {fontSize: 21, textAlign: 'center', fontWeight: '600'},
  question: {
    width: '90%',
    backgroundColor: 'white',
    padding: 5,
    marginVertical: 10,
    elevation: 2,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#0C717E',
  },
  action: {
    width: width,
    alignItems: 'center',
    height: height / 4,
    justifyContent: 'space-evenly',
  },
  quescomment: {
    width: '90%',
    flex: 0.8,
    elevation: 2,
    borderRadius: 7,
    backgroundColor: 'white',
    borderWidth: 2,
    color: '#12263A',
    padding: 10,
    borderColor: '#F4EDEA',
    fontSize: 15,
  },
  questionText: {
    fontWeight: '400',
    fontSize: 16,
  },
  details: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
    width: '100%',
  },
  detailsText: {
    color: 'grey',
    fontSize: 12,
  },
  buttonSection: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#0C717E',
    width: '90%',
    padding: 5,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  header: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: '#6495ed',
    fontSize: 15,
  },
  body: {
    fontSize: 15,
  },
});

export default ViewQuestion;
