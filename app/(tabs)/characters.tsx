import { StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import ListCharacter from '@/components/character/list-character';
import { type CharactersFromApi, getCharactersFromApi } from '@/useCase';

const Characters = () => {
  const [data, setData] = useState<CharactersFromApi>();
  const [page, setPage] = useState(1);

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
    <View>
      <ListCharacter data={data?.results || []} />
    </View>
  );
};

export default Characters;

const styles = StyleSheet.create({
  indicator: {
    paddingTop: 100,
    flex: 1,
  },
});
