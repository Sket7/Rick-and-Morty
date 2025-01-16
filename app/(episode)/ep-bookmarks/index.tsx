import { SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';

import { type Episode, getCountFromLocal, getManyFromLocal, SqlTables } from '@/useCase';
import { router } from 'expo-router';
import { validPage } from '@/utils';
import { useSQLiteContext } from 'expo-sqlite';
import ListEpisode from '@/components/episode/list-episode';
import ListHeaderComponent from '@/components/commons/list-header';

const EpBookmark = () => {
  const db = useSQLiteContext();

  const _limit = 4;

  const [data, setData] = useState<Episode[]>();
  const [maxPages, setMaxPages] = useState<number>(10);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const getData = async (page: number) => {
      try {
        const result = await getManyFromLocal(SqlTables.episodes, db, page, _limit);
        const count = await getCountFromLocal(SqlTables.episodes, db);
        setMaxPages(!count ? 0 : Math.ceil(count['count(*)'] / _limit));
        setData(result as Episode[]);
      } catch (error) {
        return;
      }
    };
    getData(page);
  }, [page]);

  return (
    <SafeAreaView>
      <ListEpisode
        data={data || []}
        onPress={(id: number) => router.push({ pathname: '/ep-bookmarks/[id]', params: { id } })}
        ListHeaderComponent={() => (
          <ListHeaderComponent
            page={page}
            maxPages={maxPages}
            arrowBack={() => setPage(validPage(page - 1, maxPages))}
            arrowNext={() => setPage(validPage(page + 1, maxPages))}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default EpBookmark;
