import {Container, Header, Left, Title, Body, Right} from 'native-base';
import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const HomeQuestions = () => {
  return (
    <View>
      <TouchableOpacity>
        <View style={styles.action}>
          <Text style={styles.input} numberOfLines={2}>
            1. A train running at the speed of 60 km/hr crosses a pole in 9
            seconds. What is the length of the train?
            {'\n'}
            A. 120 metres B. 180 metres C. 324 metres D. 150 metres
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.action}>
          <Text style={styles.input} numberOfLines={2}>
            1. A train running at the speed of 60 km/hr crosses a pole in 9
            seconds. What is the length of the train?
            {'\n'}
            A. 120 metres B. 180 metres C. 324 metres D. 150 metres
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.action}>
          <Text style={styles.input} numberOfLines={2}>
            1. A train running at the speed of 60 km/hr crosses a pole in 9
            seconds. What is the length of the train?
            {'\n'}
            A. 120 metres B. 180 metres C. 324 metres D. 150 metres
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.action}>
          <Text style={styles.input} numberOfLines={2}>
            1. A train running at the speed of 60 km/hr crosses a pole in 9
            seconds. What is the length of the train?
            {'\n'}
            A. 120 metres B. 180 metres C. 324 metres D. 150 metres
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.action}>
          <Text style={styles.input} numberOfLines={2}>
            1. A train running at the speed of 60 km/hr crosses a pole in 9
            seconds. What is the length of the train? {'\n'}
            A. 120 metres B. 180 metres C. 324 metres D. 150 metres
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeQuestions;

const styles = StyleSheet.create({
  input: {
    margin: 10,
    padding: 10,
    color: '#000',
    fontSize: 20,
  },
  action: {
    margin: 10,
    borderWidth: 1,
    borderColor: '#D7FDEC',
    backgroundColor: '#B2E4DB',
    borderRadius: 20,
  },
});
