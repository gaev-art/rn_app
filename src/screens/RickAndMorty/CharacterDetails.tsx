import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {usePrimaryColor} from '../../hooks';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../App.tsx';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack';
import {IconButton} from '../../components/IconButton.tsx';
import {BackIcon} from '../../constants/icons.ts';
import {NativeStackNavigationEventMap} from 'react-native-screens/lib/typescript/native-stack/types';
import {charactersService} from '../../services/charactersService.ts';
import {CharacterType} from '../../types/characterType.ts';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList, 'CharacterDetails'>;
};

export const CharacterDetails = ({route, navigation}: Props) => {
  const {characterId} = route.params;
  const {primaryBackgroundColor} = usePrimaryColor();
  const [character, setCharacter] = useState<CharacterType>();

  const fetchCharacters = async () => {
    try {
      const response = await charactersService.fetchCharacter({
        id: characterId,
      });
      setCharacter(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCharacters().then();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <IconButton
          width={40}
          height={40}
          onPress={() => navigation.navigate('RickAndMorty')}
          Icon={BackIcon}
        />
      ),
    } as Partial<NativeStackNavigationEventMap>);
  }, [navigation]);

  return (
    <View style={[styles.main, {backgroundColor: primaryBackgroundColor}]}>
      <Image source={{uri: character?.image}} style={{height: '80%'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1, paddingVertical: 20},
});
