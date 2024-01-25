import {api} from './api.ts';
import {CharactersResponse, CharacterType} from '../types/characterType.ts';

export const charactersService = {
  async fetchCharacters({
    name,
    page,
    id,
  }: {
    name?: string | undefined;
    page?: number | undefined;
    id?: number | undefined;
  }): Promise<CharactersResponse> {
    let url = 'character/';

    if (id) {
      url += id;
    }

    const response = await api.get<CharactersResponse>(url, {
      params: {name, page},
    });

    return response.data;
  },
  async fetchCharacter({id}: {id: number}): Promise<CharacterType> {
    const response = await api.get<CharacterType>(`character/${id}`);

    return response.data;
  },
};
