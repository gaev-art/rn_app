import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {CharacterType} from '../types/characterType.ts';
import {usePrimaryColor} from '../hooks';
import {RootStackParamList} from '../App.tsx';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack';

type Props = {
  character: CharacterType;
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

export const Character = ({character, navigation}: Props) => {
  const {primaryTextColor} = usePrimaryColor();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('CharacterDetails', {characterId: character.id})
        }>
        <Image
          source={{uri: character.image}}
          height={200}
          style={styles.image}
        />
        <Text style={[styles.name, {color: primaryTextColor}]}>
          {character.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '60%',
    marginHorizontal: '20%',
    marginBottom: 10,
  },
  image: {
    borderRadius: 8,
  },
  name: {textAlign: 'center'},
});
