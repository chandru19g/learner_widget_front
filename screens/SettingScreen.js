import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
const {width, height} = Dimensions.get('screen');

const SettingScreen = ({navigation}) => {
  const [user, setUser] = useState(null);
  const getUser = async () => {
    try {
      const value = await AsyncStorage.getItem('@learner_widget');
      if (value === null) {
        setUser(value);
        navigation.replace('Signin');
      } else setUser(JSON.parse(value));
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const logout = async () => {
    console.log('Cam');
    try {
      await AsyncStorage.removeItem('@learner_widget');
      getUser();
    } catch (e) {
      // saving error
    }
  };
  return user === null ? (
    <View>
      <Text>Loading</Text>
    </View>
  ) : (
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
            source={require('../assets/icons/user.png')}
            resizeMode="contain"
            style={[styles.userimg, {height: 20, width: 20}]}
          />
          {'  '}
          Account Settings
        </Text>
      </View>
      <ScrollView
        style={{
          flex: 1,
        }}>
        <View style={styles.settingfield}>
          {console.log(user)}
          <Text style={styles.settingtext}>Hey {user.name}</Text>
          <View style={styles.buttonsection}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('ChangePassword')}>
              <Text style={styles.buttontext}>Change Password</Text>
            </TouchableOpacity>
            {/* <Text style={styles.text}>Number of Questions Answered: 10</Text>
            <Text style={styles.text}>Number of Questions Posted: 10</Text> */}
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                navigation.navigate('QuestionAsked', {userId: user._id})
              }>
              <Text style={styles.Questionbuttontext}>
                View Question Posted
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.Questionbuttontext}>Give Feedback</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => logout()}>
              <Text style={styles.Questionbuttontext}>Logout</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttontext}>
                Rate Us{'  '}
                <Image
                  source={require('../assets/icons/share.png')}
                  style={styles.imgicon}
                />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footertext}>
            {'     '}Version: 1.0{'\n'}
            <Image
              source={require('../assets/icons/copyright.png')}
              style={styles.Footericon}
            />
            {'  '}
            <Text style={styles.footertext}>Learner-Widget</Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingfield: {
    backgroundColor: 'white',
    flex: 1,
    width: width / 1.1,
    height: height / 2,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#F4EDEA',
    borderWidth: 2,
    borderRadius: 8,
  },
  settingtext: {
    fontSize: 22,
  },
  text: {
    fontSize: 25,
    color: 'red',
    margin: 5,
  },
  buttonsection: {
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#0C717E',
    width: '100%',
    padding: 5,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  buttontext: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  QuestionButton: {
    backgroundColor: '#0C717E',
    width: '45%',
    padding: 5,
    marginTop: 10,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  Questionbuttontext: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  imgicon: {
    height: 10,
    width: 10,
  },
  footer: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  footertext: {
    margin: 20,
    color: '#6e7c7c',
    fontSize: 15,
    justifyContent: 'center',
  },
  Footericon: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    height: 10,
    width: 10,
  },
});
