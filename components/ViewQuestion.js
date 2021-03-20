import {Textarea} from 'native-base';
import React from 'react';
import {useState} from 'react';
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

const {width, height} = Dimensions.get('screen');

const ViewQuestion = ({navigation, route}) => {
  const {heading, author, date, id, question} = route.params;

  const [comments, setComments] = useState([
    {user: 'john', comment: 'Answer will be this ', id: 1},
    {id: 2, user: 'john', comment: 'Answer will be this '},
  ]);
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
              <Text style={styles.detailsText}>{author}</Text>
              <Text style={styles.detailsText}>{date}</Text>
              <LikeComponent />
            </View>
          </View>
        </View>
        <View>
          {comments.map((comment, index) => {
            return (
              <View key={index}>
                <Text style={styles.header}>{comment.user}</Text>
                <Text style={styles.body}>{comment.comment}</Text>
              </View>
            );
          })}
        </View>
        <View style={styles.action}>
          <Textarea
            placeholderTextColor="grey"
            style={styles.quescomment}
            placeholder="Add Comment . . . . . . . . . . . . . ."
          />
        </View>
        {/* //? Buuton for Adding Comment */}
        <View style={styles.buttonSection}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              Alert.alert('Success', 'Comment Added Successfully')
            }>
            <Text style={styles.buttonText}>Add Comment</Text>
          </TouchableOpacity>
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
  action: {
    width: width,
    alignItems: 'center',
    height: height / 2.5,
    justifyContent: 'space-evenly',
  },
  quescomment: {
    width: '93%',
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
    justifyContent: 'space-evenly',
    marginVertical: 10,
    alignItems: 'center',
    width: '100%',
  },
  detailsText: {
    color: 'grey',
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
    width: '40%',
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
    marginLeft: 20,
    textDecorationLine: 'underline',
    color: '#6495ed',
    fontSize: 15,
  },
  body: {
    marginLeft: 20,
    marginRight: 15,
    fontSize: 15,
    padding: 5,
  },
});

export default ViewQuestion;
