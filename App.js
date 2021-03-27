import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import FlexBox from './src/screens/FlexBox';

export default function App() {
  return (
      <FlexBox/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    // justifyContent: 'space-evenly',
    // alignItems: 'center'
  }
})