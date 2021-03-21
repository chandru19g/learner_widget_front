import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import {createAccountHelper} from '../helper/login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';

const Signup = ({navigation}) => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
    re_enter: '',
  });
  const [user, setUser] = useState(null);
  const getUser = async () => {
    try {
      const value = await AsyncStorage.getItem('@learner_widget');
      console.log(value);
      if (value !== null) {
        setUser(value);
        navigation.replace('Home');
      } else {
        setUser(null);
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const setLocalStorage = async value => {
    try {
      await AsyncStorage.setItem('@learner_widget', JSON.stringify(value));
      console.log('Setting Item', value);
    } catch (e) {
      // saving error
    }
  };
  const handleCreateAccountListener = () => {
    if (input.password !== input.re_enter) {
      Alert.alert('Error', 'password mis-match error');
      return;
    }
    createAccountHelper(input).then(result => {
      if (!result) {
        Alert.alert('Error', 'Error in network');
        return;
      }
      if (result.error) {
        setInput({...input, email: '', password: '', re_enter: ''});
        Alert.alert('Error', result.messsage);
        return;
      }
      setLocalStorage(result.user);
      navigation.replace('Home');
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Text style={styles.text_header} animation="shake">
          Signup
        </Animatable.Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text_footer}>Username</Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Username"
            onChangeText={e => setInput({...input, name: e})}
            style={styles.textInput}
          />
        </View>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Your Email"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={e => setInput({...input, email: e})}
          />
        </View>
        <Text style={styles.text_footer}>Password</Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Password"
            style={styles.textInput}
            secureTextEntry={true}
            onChangeText={e => setInput({...input, password: e})}
          />
        </View>
        <Text style={styles.text_footer}>Confirm Password</Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Confirm Password"
            style={styles.textInput}
            secureTextEntry={true}
            onChangeText={e => {
              console.log(e);
              setInput({...input, re_enter: e});
            }}
          />
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => handleCreateAccountListener()}>
            <LinearGradient
              colors={['#08d4c4', '#01ab9d']}
              style={styles.signIn}>
              <Text
                style={
                  ([styles.textSign],
                  {color: '#fff', fontWeight: 'bold', fontSize: 20})
                }>
                Create Account
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Signin')}
            style={
              ([styles.signIn],
              {
                borderColor: '#01ab9d',
                borderWidth: 1,
                width: '100%',
                marginTop: 10,
                justifyContent: 'center',
                borderRadius: 5,
                alignItems: 'center',
              })
            }>
            <Text
              style={
                ([styles.textSign],
                {padding: 5, fontSize: 20, fontWeight: 'bold'})
              }>
              Signin
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 0.5,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3.5,
    backgroundColor: '#F8F9FA',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#05375a',
    // borderColor: '#009387',
    // borderWidth: 0.5,
    backgroundColor: '#fff',
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    color: '#fff',
  },
  textSign: {
    fontSize: 18,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },
});
