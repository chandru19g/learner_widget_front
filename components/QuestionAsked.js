import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Question from './Question';

const {width} = Dimensions.get('window');

// const Question = ({heading, question, author, date}) => {
//   return (
//     <TouchableOpacity style={styles.wrapper}>
//       <View style={styles.action}>
//         <View style={styles.actionBody}>
//           <Text style={styles.heading}>{heading.substring(0, 10)}</Text>

//           <Text style={styles.question}>{question}</Text>
//           <View style={styles.actionFooter}>
//             <Text style={styles.author}>{author}</Text>
//             <Text style={styles.date}>{date}</Text>
//           </View>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );
// };

let s =
  'Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world';

const QuestionAsked = ({navigation}) => {
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
      <ScrollView
        style={{
          flex: 1,
        }}>
        <Question
          navigation={navigation}
          heading={'Heading'}
          question={s}
          author={'Author'}
          date={'MAR 5 , 2020'}
        />
        <Question
          navigation={navigation}
          heading={'Heading'}
          question={s}
          author={'Author'}
          date={'MAR 5 , 2020'}
        />
        <Question
          navigation={navigation}
          heading={'Heading'}
          question={s}
          author={'Author'}
          date={'MAR 5 , 2020'}
        />
        <Question
          navigation={navigation}
          heading={'Heading'}
          question={s}
          author={'Author'}
          date={'MAR 5 , 2020'}
        />
        <Question
          navigation={navigation}
          heading={'Heading'}
          question={s}
          author={'Author'}
          date={'MAR 5 , 2020'}
        />
        <Question
          navigation={navigation}
          heading={'Heading'}
          question={s}
          author={'Author'}
          date={'MAR 5 , 2020'}
        />
      </ScrollView>
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
