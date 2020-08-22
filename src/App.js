import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={require('../assets/favicon.png')}>
      </Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
});
