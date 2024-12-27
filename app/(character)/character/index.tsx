import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { router } from 'expo-router';

import ListCharacter from '@/components/character/list-character';
import ListHeaderComponent from '@/components/commons/list-header';
import { type CharacterFromApi, getManyCharacterFromApi } from '@/useCase';
import { validPage } from '@/utils';

const CharacterIndex = () => {
  const [data, setData] = useState<CharacterFromApi>();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getData = async (page: number) => {
      try {
        const data = await getManyCharacterFromApi(page);
        setData(data);
      } catch (error) {
        return;
      }
    };
    getData(page);
  }, [page]);

  return (
    <SafeAreaView>
      <ListCharacter
        data={data?.results || []}
        onPress={(id: number) => router.push({ pathname: '/character/[id]', params: { id } })}
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

export default CharacterIndex;
