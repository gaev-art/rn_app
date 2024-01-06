import React from 'react';
import {Button, StyleSheet, useColorScheme, View} from 'react-native';
import {RootStackParamList} from '../App.tsx';
import {NativeStackScreenProps} from 'react-native-screens/native-stack';
import {useCustomStatusBarStyle} from '../hooks';

type Props = NativeStackScreenProps<RootStackParamList, 'PageOne'>;

export const PageOne = ({navigation}: Props) => {
  const isDarkMode = useColorScheme() === 'dark';
  const {primeTextColor, primeBackgroundColor} =
    useCustomStatusBarStyle(isDarkMode);

  return (
    <View style={[styles.main, {backgroundColor: primeBackgroundColor}]}>
      <Button
        color={primeTextColor}
        title={'Page two'}
        onPress={() => {
          navigation.navigate('PageTwo');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
