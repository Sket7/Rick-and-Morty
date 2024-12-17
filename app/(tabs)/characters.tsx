import { SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';

import ListCharacter from '@/components/character/list-character';
import { type CharactersFromApi, getCharactersFromApi } from '@/useCase';
import { router } from 'expo-router';

const Characters = () => {
  const [data, setData] = useState<CharactersFromApi>();
  const [page, setPage] = useState(1);

  const setPageValid = (seterPage: number) => {
    if (seterPage < 1) return setPage(1);
    if (seterPage > (data?.info.pages || 1)) return setPage(data?.info.pages || 1);
    return setPage(seterPage);
  };

  const getCharacters = async (page: number) => {
    try {
      const data = await getCharactersFromApi(page);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCharacters(page);
  }, [page]);

  return (
    <SafeAreaView>
      <ListCharacter
        data={data?.results || []}
        onPress={() => router.push(`/page-character`)}
        onLongPress={() => setPageValid(page - 1)}
      />
    </SafeAreaView>
  );
};

export default Characters;
