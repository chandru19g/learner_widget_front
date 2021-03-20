import {Textarea} from 'native-base';
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  Image,
} from 'react-native';

const {width, height} = Dimensions.get('screen');

const AskScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View
        style={{
          marginVertical: 20,
          backgroundColor: '#F4D1AE',
          padding: 10,
          width: '90%',
          borderRadius: 10,
        }}>
        <Text style={{fontSize: 22, fontWeight: 'bold', textAlign: 'center'}}>
          ASK YOUR QUESTION{' '}
          <Image
            source={require('../assets/icons/question.png')}
            resizeMode="contain"
            style={[styles.userimg, {height: 30, width: 30}]}
          />{' '}
        </Text>
      </View>
      <ScrollView
        style={{
          flex: 1,
        }}>
        <View style={{flex: 1, alignSelf: 'center'}}>
          <View style={styles.action}>
            <TextInput
              placeholderTextColor="grey"
              style={styles.heading}
              placeholder="Enter the heading or the category it belongs to"
            />
            <Textarea
              placeholderTextColor="grey"
              style={styles.question}
              placeholder="Enter Question"
            />
          </View>
        </View>
        <View style={styles.buttonSection}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Post Question</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AskScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  action: {
    width: width,
    alignItems: 'center',
    height: height / 1.5,
    justifyContent: 'space-evenly',
  },
  heading: {
    width: '93%',
    height: 60,
    elevation: 3,
    borderRadius: 6,
    backgroundColor: 'white',
    borderWidth: 2,
    color: '#12263A',
    padding: 10,
    borderColor: '#F4EDEA',
    fontSize: 15,
  },
  question: {
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
});
