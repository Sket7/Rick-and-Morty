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

  useEffect(() => {
    getCharacters(page);
  }, [page]);

  const ListHeaderComponent = () => {
    return (
      <View style={styles.listEmptyComponent}>
        <View style={styles.buttonsPageComponent}>
          <Button color={styles.button.color} title=" <- " onPress={() => setPageValid(page - 1)} />
          <Text style={styles.textEmpty}>
            {page} | {data?.info.pages || 1}
          </Text>
          <Button color={styles.button.color} title=" -> " onPress={() => setPageValid(page + 1)} />
        </View>
      </View>
    );
  };

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
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonsPageComponent: {
    flexDirection: 'row',
  },
  textEmpty: {
    fontSize: 24,
    fontWeight: 'bold',
    marginInline: 25,
  },
  button: {
    color: '#ff9800',
  },
});
