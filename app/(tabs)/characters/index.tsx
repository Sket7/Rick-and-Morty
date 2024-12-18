import { SafeAreaView, StyleSheet, View, Text, Button } from 'react-native';
import React, { useEffect, useState } from 'react';

import ListCharacter from '@/components/character/list-character';
import { type CharactersFromApi, getManyCharactersFromApi } from '@/useCase';
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
      const data = await getManyCharactersFromApi(page);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const ListHeaderComponent = () => {
    return (
      <View style={styles.listEmptyComponent}>
        <Button title="<" onPress={() => setPageValid(page - 1)} />
        <Text style={styles.textEmpty}>{page}</Text>
        <Button title=">" onPress={() => setPageValid(page + 1)} />
      </View>
    );
  };

  useEffect(() => {
    getCharacters(page);
  }, [page]);

  return (
    <SafeAreaView>
      <ListCharacter
        data={data?.results || []}
        onPress={(id: number) => router.push({ pathname: '/characters/[id]', params: { id } })}
        ListHeaderComponent={ListHeaderComponent}
      />
    </SafeAreaView>
  );
};

export default Characters;

const styles = StyleSheet.create({
  listEmptyComponent: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textEmpty: {
    fontSize: 24,
    fontWeight: 'bold',
    marginInline: 25,
  },
});
