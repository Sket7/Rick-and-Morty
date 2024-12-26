import { fetch as expo_fetch } from 'expo/fetch';

import type { EpisodeFromApi } from '../types';

export const getManyEpisodeFromApi = async (page: number = 0): Promise<EpisodeFromApi> => {
  const _url = `https://rickandmortyapi.com/api/episode/?page=${Math.abs(page)}`;
  const response = await expo_fetch(_url);
  const data: EpisodeFromApi = await response.json();
  return data;
};
