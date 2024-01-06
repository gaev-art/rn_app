import React from 'react';
import {StatusBar, StyleSheet, Text, useColorScheme, View} from 'react-native';
import {useCustomStatusBarStyle} from './src/hooks';

export const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const {primeBackgroundColor, primeTextColor, barStyle} =
    useCustomStatusBarStyle(isDarkMode);

  return (
    <>
      <StatusBar barStyle={barStyle} backgroundColor={primeBackgroundColor} />
      <View style={styles.main}>
        <View style={[styles.circle, {backgroundColor: primeBackgroundColor}]}>
          <Text style={[styles.text, {color: primeTextColor}]}>
            Dark mode is on? {isDarkMode ? 'Yes' : 'No'}
          </Text>
        </View>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  main: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  circle: {
    height: 200,
    width: 200,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});
