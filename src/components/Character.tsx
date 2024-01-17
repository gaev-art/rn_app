import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {CharacterType} from '../types/episodesType.ts';
import {usePrimaryColor} from '../hooks';

type Props = {
  character: CharacterType;
};

export const Character = ({character}: Props) => {
  const {primaryTextColor} = usePrimaryColor();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {}}>
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
