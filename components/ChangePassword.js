import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const {width, height} = Dimensions.get('screen');

const ChangePassword = ({navigation}) => {
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
        <Text style={{fontSize: 22, fontWeight: 'bold', textAlign: 'center'}}>
          <Image
            source={require('../assets/icons/key.png')}
            resizeMode="contain"
            style={[styles.userimg, {height: 20, width: 20}]}
          />{' '}
          Change Password{' '}
        </Text>
      </View>
      <ScrollView
        style={{
          flex: 1,
        }}>
        <View style={{flex: 1}}>
          <View style={styles.action}>
            <TextInput
              placeholderTextColor="grey"
              style={styles.heading}
              placeholder="Enter Old Password"
              secureTextEntry
            />
            <TextInput
              placeholderTextColor="grey"
              style={styles.heading}
              placeholder="Enter New Password"
              secureTextEntry
            />
            <TextInput
              placeholderTextColor="grey"
              style={styles.heading}
              placeholder="Confirm New Password"
              secureTextEntry
            />
          </View>
        </View>
        <View style={styles.buttonSection}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Change{'  '}Password </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttoncancel}
            onPress={() => navigation.goBack()}>
            <Text style={styles.buttonTextcancel}>Go {'  '}Back</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  action: {
    width: width,
    alignItems: 'center',
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
    marginTop: 15,
  },
  buttonSection: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
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
  buttoncancel: {
    backgroundColor: '#fff',
    width: '40%',
    padding: 5,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 15,
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
  buttonTextcancel: {
    color: '#0C717E',
    fontSize: 17,
    fontWeight: 'bold',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
});
