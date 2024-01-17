import React, {useEffect, useState} from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {usePrimaryColor} from '../../hooks';
import {charactersService} from '../../services/charactersService.ts';
import {CharacterType} from '../../types/episodesType.ts';
import {Character} from '../../components/Character.tsx';
import {SearchIcon} from '../../constants/icons.ts';

export const RickAndMortyScreen = () => {
  const {primaryBackgroundColor, primaryTextColor} = usePrimaryColor();
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [name, setName] = useState('');
  const [page, _setPage] = useState(1);

  const fetchCharacters = async () => {
    try {
      const response = await charactersService.fetchCharacters({page, name});
      setCharacters(response.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCharacters().then();
  }, []);

  return (
    <View style={[styles.main, {backgroundColor: primaryBackgroundColor}]}>
      <View style={[styles.inputBox, {borderColor: primaryTextColor}]}>
        <TextInput
          onChange={event => {
            setName(event.nativeEvent.text.trim());
          }}
          value={name}
          placeholder="Enter your email address"
          placeholderTextColor={primaryTextColor}
          style={{
            color: primaryTextColor,
            width: '100%',
          }}
        />
        <TouchableOpacity onPress={fetchCharacters}>
          <SearchIcon
            width={20}
            height={20}
            color={primaryTextColor}
            style={{marginLeft: -10}}
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{marginVertical: 20}}
        showsVerticalScrollIndicator={false}>
        <FlatList
          data={characters}
          scrollEnabled={false}
          renderItem={({item}) => <Character character={item} />}
          keyExtractor={item => `${item.name}_${item.id}`}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1, paddingVertical: 20},
  inputBox: {
    display: 'flex',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderWidth: 2,
    borderRadius: 25,
    flexDirection: 'row',
  },
  searchIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
