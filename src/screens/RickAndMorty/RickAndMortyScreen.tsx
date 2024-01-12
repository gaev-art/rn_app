import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {usePrimaryColor} from '../../hooks';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BASE_URL} from '@env';

export const RickAndMortyScreen = () => {
  const {primaryBackgroundColor} = usePrimaryColor();
  console.log(BASE_URL);
  return (
    <SafeAreaView
      style={[styles.main, {backgroundColor: primaryBackgroundColor}]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text>RickAndMortyScreen</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1},
});
