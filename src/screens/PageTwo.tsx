import React from 'react';
import {Button, StyleSheet, useColorScheme, View} from 'react-native';
import {NativeStackScreenProps} from 'react-native-screens/native-stack';
import {RootStackParamList} from '../App.tsx';
import {useCustomStatusBarStyle} from '../hooks';

type Props = NativeStackScreenProps<RootStackParamList, 'PageTwo'>;

export const PageTwo = ({navigation}: Props) => {
  const isDarkMode = useColorScheme() === 'dark';
  const {primeTextColor, primeBackgroundColor} =
    useCustomStatusBarStyle(isDarkMode);

  return (
    <View style={[styles.main, {backgroundColor: primeBackgroundColor}]}>
      <Button
        color={primeTextColor}
        title={'Page one'}
        onPress={() => {
          navigation.navigate('PageOne');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
