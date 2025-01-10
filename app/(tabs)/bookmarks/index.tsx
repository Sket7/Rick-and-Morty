import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSQLiteContext } from 'expo-sqlite';
import { router } from 'expo-router';

import { type Character, getManyCharactersFromLocal } from '@/useCase';
import ListCharacter from '@/components/character/list-character';
import { getCountCharactersFromLocal } from '@/useCase/db/character/getCountCharactersFromLocal';
import { validPage } from '@/utils/valid-page';

const Bookmark = () => {
  const db = useSQLiteContext();

  const limit = 4;

  const [data, setData] = useState<Character[]>();
  const [maxPages, setMaxPages] = useState<number>(10);
  const [page, setPage] = useState<number>(1);

  async function getCharacters(page: number) {
    const result = await getManyCharactersFromLocal(db, page, limit);
    const count = await getCountCharactersFromLocal(db);
    setMaxPages(!count ? 0 : Math.ceil(count['count(*)'] / limit));
    setData(result);
  }

  useEffect(() => {
    getCharacters(page);
  }, [page]);

  const ListHeaderComponent = () => {
    return (
      <View style={styles.listEmptyComponent}>
        <View style={styles.buttonsPageComponent}>
          <Button
            color={styles.button.color}
            title=" <- "
            onPress={() => setPage(validPage(page - 1, maxPages || 1))}
          />
          <Text style={styles.textEmpty}>
            {page} | {maxPages}
          </Text>
          <Button
            color={styles.button.color}
            title=" -> "
            onPress={() => setPage(validPage(page + 1, maxPages || 1))}
          />
        </View>
        {/* <Button title="Обновить" onPress={() => getCharacters(page)} /> */}
      </View>
    );
  };

  return (
    <SafeAreaView>
      <ListCharacter
        data={data || []}
        onPress={(id: number) => router.push({ pathname: '/bookmarks/[id]', params: { id } })}
        ListHeaderComponent={ListHeaderComponent}
      />
    </SafeAreaView>
  );
};

export default Bookmark;

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
