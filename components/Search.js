import React from 'react';
import {View, StyleSheet, Image, TextInput} from 'react-native';

const Search = () => {
  return (
    <View style={styles.searchSection}>
      <Image
        source={require('../assets/icons/search.png')}
        style={styles.searchIcon}
      />
      <TextInput
        placeholderTextColor="#000"
        style={styles.input}
        placeholder="Search"
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: 'row',
    backgroundColor: '#CECCCC',
    marginHorizontal: 5,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    height: 50,
  },
  searchIcon: {
    width: 25,
    height: 22,
    marginLeft: 20,
    backgroundColor: '#CECCCC',
    marginRight: 10,
  },

  input: {
    backgroundColor: '#CECCCC',
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    color: '#000',
    fontWeight: 'bold',
    flex: 0.93,
  },
});
