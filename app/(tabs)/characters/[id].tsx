import React, { useEffect } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

import { type Character, getOneCharacterFromApi } from '@/useCase';
import PageCharacter from '@/components/character/page-character';

type Props = {};

const CharacterPage: React.FC<Props> = ({}) => {
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
    getCharacter(+(id || 12));
  }, [character]);

  return (
    <View style={styles.container}>
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
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },

  text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#ff9800',
  },
});
