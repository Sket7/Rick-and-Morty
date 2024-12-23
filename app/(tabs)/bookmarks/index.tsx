import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SQLiteDatabase, useSQLiteContext } from 'expo-sqlite';

import { type Character, getOneCharacterFromLocal, saveOneCharacterToLocal } from '@/useCase';
import { ch, ch2 } from '@/components/data';
import ListCharacter from '@/components/character/list-character';
import { router } from 'expo-router';

const Bookmark = () => {
  const db = useSQLiteContext();

  const [data, setData] = useState<Character[]>();
  const [page, setPage] = useState(1);

  const setPageValid = (seterPage: number) => {
    if (seterPage < 1) return setPage(1);
    // if (seterPage > (data?.info.pages || 1)) return setPage(data?.info.pages || 1);
    return setPage(seterPage);
  };

  const ListHeaderComponent = () => {
    return (
      <View style={styles.listEmptyComponent}>
        <Button color={styles.button.color} title="<" onPress={() => setPageValid(page - 1)} />
        <Text style={styles.textEmpty}>{page}</Text>
        <Button color={styles.button.color} title=">" onPress={() => setPageValid(page + 1)} />
      </View>
    );
  };

  useEffect(() => {
    async function setup(db: SQLiteDatabase) {
      const result = await saveOneCharacterToLocal(db, ch);
      const char_res = (await getOneCharacterFromLocal(db, result.lastInsertRowId)) || ch2;
      setData([char_res]);
    }
    setup(db);
  }, []);

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
    justifyContent: 'center',
    alignItems: 'center',
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
