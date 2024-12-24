import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { ScrollView, Text, View, StyleSheet, Button } from 'react-native';

import { type Character, getOneCharacterFromApi, saveOneCharacterToLocal } from '@/useCase';
import CartCharacter from '@/components/character/cart-character';
import { useSQLiteContext } from 'expo-sqlite';

const CharacterPage = () => {
  const db = useSQLiteContext();
  const { id } = useLocalSearchParams<{ id: string }>();

  const [character, setCharacter] = useState<Character>();

  const getCharacter = async (id: number) => {
    try {
      const data = await getOneCharacterFromApi(id);
      setCharacter(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCharacter(parseInt(id || '1'));
  }, [character]);

  return (
    <View>
      <ScrollView>
        {!character ? (
          <Text style={styles.text}>Загрузка...</Text>
        ) : (
          <View>
            <CartCharacter item={character} />
            <Button
              title="Сохранить в БД"
              onPress={() => {
                saveOneCharacterToLocal(db, character);
              }}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default CharacterPage;

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#ff9800',
  },
});
