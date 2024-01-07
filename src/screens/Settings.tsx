import React from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {useCustomStatusBarStyle} from '../hooks';

export const Settings = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const {primeTextColor, primeBackgroundColor} =
    useCustomStatusBarStyle(isDarkMode);

  return (
    <View style={[styles.main, {backgroundColor: primeBackgroundColor}]}>
      <Text style={{color: primeTextColor}}>Settings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
