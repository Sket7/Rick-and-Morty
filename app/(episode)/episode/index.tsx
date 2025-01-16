import { SafeAreaView } from 'react-native';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';

import { type EpisodeFromApi, getManyEpisodeFromApi } from '@/useCase';
import { validPage } from '@/utils';
import ListEpisode from '@/components/episode/list-episode';
import ListHeaderComponent from '@/components/commons/list-header';

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

  return (
    <SafeAreaView>
      <ListEpisode
        data={data?.results || []}
        onPress={(id: number) => router.push({ pathname: '/episode/[id]', params: { id } })}
        ListHeaderComponent={() => (
          <ListHeaderComponent
            page={page}
            maxPages={data?.info.pages || 1}
            arrowBack={() => setPage(validPage(page - 1, data?.info.pages || 1))}
            arrowNext={() => setPage(validPage(page + 1, data?.info.pages || 1))}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default EpisodeIndex;
