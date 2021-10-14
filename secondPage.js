import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, Platform } from 'react-native';

const AppBarExample = () => (
  <Appbar.Header style = {styles.item}>
     <Appbar.Content title="Home" />
      <Appbar.Action icon="magnify" onPress={() => {}} />
  </Appbar.Header>
);

export default AppBarExample;

const styles = StyleSheet.create ({
   item: {
      backgroundColor : "teal"
   }
})
/*

Testing the app bar
*/