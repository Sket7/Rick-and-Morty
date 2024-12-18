import { Character, getOneCharacterFromApi } from '@/useCase';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';

type Props = {};

const PageCharacter: React.FC<Props> = ({}) => {
  const { id } = useLocalSearchParams();

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
    <View>
      <ScrollView>
        <Text>{JSON.stringify(character, null, 2)}</Text>
      </ScrollView>
    </View>
  );
};

export default PageCharacter;
