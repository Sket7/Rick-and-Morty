import { fetch as expo_fetch } from 'expo/fetch';

import { CharactersFromApi } from './types';

export const getManyCharactersFromApi = async (page: number = 0): Promise<CharactersFromApi> => {
  const response = await expo_fetch(
    `https://rickandmortyapi.com/api/character/?page=${Math.abs(page) | 0}`,
  );
  const data: CharactersFromApi = await response.json();
  return data;
};
