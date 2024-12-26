import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';
import { router } from 'expo-router';

import ListHeaderComponent from '@/components/commons/list-header';
import ListCharacter from '@/components/character/list-character';
import { type Character, getManyCharactersFromLocal, getCountCharactersFromLocal } from '@/useCase';
import { validPage } from '@/utils';

const Bookmark = () => {
  const db = useSQLiteContext();

  const _limit = 4;

  const [data, setData] = useState<Character[]>();
  const [maxPages, setMaxPages] = useState<number>(10);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const getCharacters = async (page: number) => {
      const result = await getManyCharactersFromLocal(db, page, _limit);
      const count = await getCountCharactersFromLocal(db);
      setMaxPages(!count ? 0 : Math.ceil(count['count(*)'] / _limit));
      setData(result);
    };
    getCharacters(page);
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

export default Bookmark;
