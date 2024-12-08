import { ActivityIndicator, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import ListCharacter from '@/components/character/list-character';
import { type CharactersFromApi, getCharactersFromApi } from '@/useCase';

const Characters = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<CharactersFromApi>();

  const getCharacters = async () => {
    try {
      const data = await getCharactersFromApi();
      setData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <View>
      {isLoading ? (
        <View style={styles.indicator}>
          <ActivityIndicator />
        </View>
      ) : (
        <ListCharacter data={data?.results || []} />
      )}
    </View>
  );
};

export default Characters;

const styles = StyleSheet.create({
  indicator: {
    paddingTop: 100,
    flex: 1,
  },
});
