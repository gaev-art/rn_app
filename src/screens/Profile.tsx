import React from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {usePrimaryColor} from '../hooks';

export const Profile = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const {primaryTextColor, primaryBackgroundColor} =
    usePrimaryColor(isDarkMode);

  return (
    <View style={[styles.main, {backgroundColor: primaryBackgroundColor}]}>
      <Text style={{color: primaryTextColor}}>Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
