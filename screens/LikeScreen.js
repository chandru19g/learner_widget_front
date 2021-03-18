import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

const LikeScreen = ({navigation}) => {
  return (
    <View style={styles.conatiner}>
      <Text>Like</Text>
      <Button
        title="Go to Like Screen...again"
        onPress={() => navigation.push('Like')}
      />
      {/* <Button
        title="Go to Setting Screen"
        onPress={() => navigation.navigate('Setting')}
      /> */}
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button title="Go Back To Top" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default LikeScreen;

const styles = StyleSheet.create({
  conatiner: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
