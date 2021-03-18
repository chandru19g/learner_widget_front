import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

const SettingScreen = ({navigation}) => {
  return (
    <View style={styles.conatiner}>
      <Text>Setting</Text>
      <Button
        title="Go to Setting Screen...again"
        onPress={() => navigation.push('Setting')}
      />
      <Button
        title="Go to Ask Screen"
        onPress={() => navigation.navigate('Ask')}
      />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button title="Go Back To Top" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  conatiner: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
