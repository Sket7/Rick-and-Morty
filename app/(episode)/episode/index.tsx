import { SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';

import { type EpisodeFromApi, getManyEpisodeFromApi } from '@/useCase';
import { router } from 'expo-router';
import { validPage } from '@/utils';

const EpisodeIndex = () => {
  const [data, setData] = useState<EpisodeFromApi>();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getData = async (page: number) => {
      try {
        const data = await getManyEpisodeFromApi(page);
        setData(data);
      } catch (error) {
        return;
      }
    };
    getData(page);
  }, [page]);

  return <SafeAreaView></SafeAreaView>;
};

export default EpisodeIndex;
