import { SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';

import { type EpisodeFromApi, getManyEpisodeFromApi } from '@/useCase';
import { router } from 'expo-router';
import { validPage } from '@/utils';

const Episode = () => {
  const [data, setData] = useState<EpisodeFromApi>();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getEpisodes = async (page: number) => {
      try {
        const data = await getManyEpisodeFromApi(page);
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    getEpisodes(page);
  }, [page]);

  return <SafeAreaView></SafeAreaView>;
};

export default Episode;
