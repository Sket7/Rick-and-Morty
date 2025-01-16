import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { ScrollView, SafeAreaView } from 'react-native';

import { type Character, getOneCharacterFromApi, SqlTables } from '@/useCase';
import { useSQLiteContext } from 'expo-sqlite';
import PageCharacter from '@/components/character/page-character';
import { saveOneToLocal } from '@/useCase/db/metods/saveOneToLocal';

const CharacterPage = () => {
  const db = useSQLiteContext();
  const { id } = useLocalSearchParams<{ id: string }>();

  const [character, setCharacter] = useState<Character>();

  useEffect(() => {
    const getData = async (id: number) => {
      try {
        const data = await getOneCharacterFromApi(id);
        setCharacter(data);
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
          buttonTitle="Сохранить в БД"
          onPress={() => {
            if (!character) return;
            saveOneToLocal<Character>(SqlTables.characters, db, character);
          }}
          buttonColor={'#00BC00'}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CharacterPage;
