import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';
import { router } from 'expo-router';

import ListHeaderComponent from '@/components/commons/list-header';
import ListCharacter from '@/components/character/list-character';
import { type Character, getManyFromLocal, getCountFromLocal } from '@/useCase';
import { validPage } from '@/utils';
import { SqlTables } from '@/useCase/db/sql-names';

const ChBookmark = () => {
  const db = useSQLiteContext();

  const _limit = 4;

  const [data, setData] = useState<Character[]>();
  const [maxPages, setMaxPages] = useState<number>(10);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const getData = async (page: number) => {
      try {
        const result = await getManyFromLocal(SqlTables.characters, db, page, _limit);
        const count = await getCountFromLocal(SqlTables.characters, db);
        setMaxPages(!count ? 0 : Math.ceil(count['count(*)'] / _limit));
        setData(result as Character[]);
      } catch (error) {
        return;
      }
    };
    getData(page);
  }, [page]);

  return (
    <SafeAreaView>
      <ListCharacter
        data={data || []}
        onPress={(id: number) => router.push({ pathname: '/ch-bookmarks/[id]', params: { id } })}
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

export default ChBookmark;
