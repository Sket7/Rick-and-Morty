import React, { useEffect } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

import { type Character, getOneCharacterFromApi } from '@/useCase';
import PageCharacter from '@/components/character/page-character';

const CharacterPage = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const [character, setCharacter] = React.useState<Character>();

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
          <Text style={styles.text}>Loading...</Text>
        ) : (
          <PageCharacter item={character} />
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
