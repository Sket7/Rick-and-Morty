import { fetch as expo_fetch } from 'expo/fetch';

import type { Character } from '../types';

export const getOneCharacterFromApi = async (id: number = 1): Promise<Character> => {
  if (id < 1) return getOneCharacterFromApi(1);
  const response = await expo_fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const data: Character = await response.json();
  return data;
};
