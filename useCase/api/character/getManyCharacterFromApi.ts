import { fetch as expo_fetch } from 'expo/fetch';

import type { CharacterFromApi } from '../types';

export const getManyCharacterFromApi = async (page: number = 0): Promise<CharacterFromApi> => {
  const _url = `https://rickandmortyapi.com/api/character/?page=${Math.abs(page)}`;
  const response = await expo_fetch(_url);
  const data: CharacterFromApi = await response.json();
  return data;
};
