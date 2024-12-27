import React, { useEffect, useState } from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { useSQLiteContext } from 'expo-sqlite';

import { type Character, deleteOneCharacterFromLocal, getOneCharacterFromLocal } from '@/useCase';
import PageCharacter from '@/components/character/page-character';

const BookmarkId = () => {
  const db = useSQLiteContext();
  const { id } = useLocalSearchParams<{ id: string }>();

  const [character, setCharacter] = useState<Character>();

  useEffect(() => {
    const getData = async (id: number) => {
      try {
        const data = await getOneCharacterFromLocal(db, id);
        setCharacter(data || undefined);
      } catch (error) {
        return;
      }
    };
    getData(parseInt(id || '1'));
  }, [character]);

  return (
    <SafeAreaView>
      <ScrollView>
        <PageCharacter
          character={character}
          buttonTitle="Удалить из БД"
          onPress={() => {
            if (!character) return;
            deleteOneCharacterFromLocal(db, character.id);
            router.back();
          }}
          buttonColor={'#ff3333'}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookmarkId;
