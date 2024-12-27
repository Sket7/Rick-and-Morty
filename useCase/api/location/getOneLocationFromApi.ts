import { fetch as expo_fetch } from 'expo/fetch';

import type { Location } from '../types';

export const getOneLocationFromApi = async (id: number = 1): Promise<Location> => {
  if (id < 1) return getOneLocationFromApi(1);
  const _url = `https://rickandmortyapi.com/api/location/${id}`;
  const response = await expo_fetch(_url);
  const data: Location = await response.json();
  return data;
};
