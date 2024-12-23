import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import { useLocalSearchParams } from 'expo-router';
import PageCharacter from '@/components/character/page-character';
import { Character, getOneCharacterFromLocal } from '@/useCase';
import { useSQLiteContext } from 'expo-sqlite';

const BookmarkId = () => {
  const db = useSQLiteContext();
  const { id } = useLocalSearchParams<{ id: string }>();

  const [character, setCharacter] = React.useState<Character>();

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
          <Text style={styles.text}>Loading...</Text>
        ) : (
          <PageCharacter item={character} />
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
