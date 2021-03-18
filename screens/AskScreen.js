import {Header, Title, Body, Textarea} from 'native-base';
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const AskScreen = () => {
  return (
    <ScrollView>
      <Header>
        <Body>
          <Title>Ask</Title>
        </Body>
      </Header>
      <View style={styles.searchSection}>
        <TextInput
          placeholderTextColor="#FFF"
          style={styles.input}
          placeholder="Title"
        />
      </View>
      <View style={styles.searchSection}>
        <Textarea
          placeholderTextColor="#FFF"
          style={styles.input}
          placeholder="Enter Question"
        />
      </View>
      <View style={styles.buttonSection}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ask Question</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AskScreen;

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: 'row',
    backgroundColor: '#CECCCC',
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#CECCCC',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    color: '#818c88',
    fontWeight: 'bold',
    flex: 0.93,
  },
  buttonSection: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: 'blue',
    width: '50%',
    padding: 5,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
});
