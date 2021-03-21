// import {Header, Title, Body} from 'native-base';
import React, {useEffect, useState} from 'react';
import {ScrollView, View, StyleSheet, Dimensions, Text} from 'react-native';
import Search from '../components/Search';
import HomeQuestions from '../components/HomeQuestions';
import {getAllQuestionHelper} from './helper/question';

const {height} = Dimensions.get('screen');

const HomeScreen = ({navigation}) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    //Whenever the this screen is focused useeffect runs
    navigation.addListener('focus', () => {
      getAllQuestionHelper().then(result => {
        if (result.error) {
          return;
        }
        setQuestions(result.questions);
        setLoading(false);
      });
      console.log('Invoked Home Page');
    });
  }, [navigation]);

  return (
    <View>
      <View style={styles.container}>
        <Search />
        {loading ? (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Loading</Text>
          </View>
        ) : (
          <ScrollView style={{height: height - 200}}>
            <HomeQuestions navigation={navigation} questions={questions} />
          </ScrollView>
        )}
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
    borderWidth: 1,
    borderColor: '#D7FDEC',
    backgroundColor: '#B2E4DB',
    borderRadius: 20,
  },
});
