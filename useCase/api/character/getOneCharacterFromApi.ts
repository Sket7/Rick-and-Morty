import { fetch as expo_fetch } from 'expo/fetch';

import type { Character } from '../types';

export const getOneCharacterFromApi = async (id: number = 1): Promise<Character> => {
  if (id < 1) return getOneCharacterFromApi(1);
  const _url = `https://rickandmortyapi.com/api/character/${id}`;
  const response = await expo_fetch(_url);
  const data: Character = await response.json();
  return data;
};
