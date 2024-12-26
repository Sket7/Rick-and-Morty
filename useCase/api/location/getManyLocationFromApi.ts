import { fetch as expo_fetch } from 'expo/fetch';

import type { LocationFromApi } from '../types';

export const getManyLocationFromApi = async (page: number = 0): Promise<LocationFromApi> => {
  const _url = `https://rickandmortyapi.com/api/location/?page=${Math.abs(page)}`;
  const response = await expo_fetch(_url);
  const data: LocationFromApi = await response.json();
  return data;
};
