import { fetch as expo_fetch } from 'expo/fetch';

import type { Episode } from '../types';

export const getOneEpisodeFromApi = async (id: number = 1): Promise<Episode> => {
  if (id < 1) return getOneEpisodeFromApi(1);
  const _url = `https://rickandmortyapi.com/api/episode/${id}`;
  const response = await expo_fetch(_url);
  const data: Episode = await response.json();
  return data;
};
