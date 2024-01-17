import {api} from './api.ts';
import {CharacterResponse} from '../types/episodesType.ts';

export const charactersService = {
  async fetchCharacters({
    name,
    page,
  }: {
    name?: string | undefined;
    page?: number | undefined;
  }): Promise<CharacterResponse> {
    const response = await api.get<CharacterResponse>('character/', {
      params: {name, page},
    });
    return response.data;
  },
};
