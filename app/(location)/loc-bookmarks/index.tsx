import { SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { router } from 'expo-router';

import { getCountFromLocal, getManyFromLocal, SqlTables, type Location } from '@/useCase';
import { validPage } from '@/utils';
import ListLocation from '@/components/location/list-location';
import ListHeaderComponent from '@/components/commons/list-header';
import { useSQLiteContext } from 'expo-sqlite';

const LocBookmark = () => {
  const db = useSQLiteContext();

  const _limit = 4;

  const [data, setData] = useState<Location[]>();
  const [maxPages, setMaxPages] = useState<number>(10);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const getData = async (page: number) => {
      try {
        const result = await getManyFromLocal(SqlTables.locations, db, page, _limit);
        const count = await getCountFromLocal(SqlTables.locations, db);
        setMaxPages(!count ? 0 : Math.ceil(count['count(*)'] / _limit));
        setData(result as Location[]);
      } catch (error) {
        return;
      }
    };
    getData(page);
  }, [page]);

  return (
    <SafeAreaView>
      <ListLocation
        data={data || []}
        onPress={(id: number) => router.push({ pathname: '/loc-bookmarks/[id]', params: { id } })}
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

export default LocBookmark;
