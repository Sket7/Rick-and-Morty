import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { useSQLiteContext } from 'expo-sqlite';

import { type Character, deleteOneCharacterFromLocal, getOneCharacterFromLocal } from '@/useCase';
import CartCharacter from '@/components/character/cart-character';

const BookmarkId = () => {
  const db = useSQLiteContext();
  const { id } = useLocalSearchParams<{ id: string }>();

  const [character, setCharacter] = useState<Character>();

  const getCharacter = async (id: number) => {
    try {
      const data = await getOneCharacterFromLocal(db, id);
      setCharacter(data || undefined);
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
              title="Удалить из БД"
              onPress={() => {
                deleteOneCharacterFromLocal(db, character.id);
                setCharacter(undefined);
              }}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default BookmarkId;

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#ff9800',
  },
});
