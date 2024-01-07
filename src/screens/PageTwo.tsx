import React from 'react';
import {Button, StyleSheet, useColorScheme, View} from 'react-native';
import {NativeStackScreenProps} from 'react-native-screens/native-stack';
import {RootStackParamList} from '../App.tsx';
import {usePrimaryColor} from '../hooks';

type Props = NativeStackScreenProps<RootStackParamList, 'PageTwo'>;

export const PageTwo = ({navigation}: Props) => {
  const isDarkMode = useColorScheme() === 'dark';
  const {primaryTextColor, primaryBackgroundColor} =
    usePrimaryColor(isDarkMode);

  return (
    <View style={[styles.main, {backgroundColor: primaryBackgroundColor}]}>
      <Button
        color={primaryTextColor}
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
