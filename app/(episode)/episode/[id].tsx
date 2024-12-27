import { getOneEpisodeFromApi, type Episode } from '@/useCase';
import { useLocalSearchParams } from 'expo-router';
import { useSQLiteContext } from 'expo-sqlite';
import { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

const EpisodePage = () => {
  const db = useSQLiteContext();
  const { id } = useLocalSearchParams<{ id: string }>();

  const [episode, setEpisode] = useState<Episode>();

  useEffect(() => {
    const getData = async (id: number) => {
      try {
        const data = await getOneEpisodeFromApi(id);
        setEpisode(data);
      } catch (error) {
        return;
      }
    };
    getData(parseInt(id || '1'));
  }, [episode]);

  return (
    <SafeAreaView>
      <ScrollView></ScrollView>
    </SafeAreaView>
  );
};

export default EpisodePage;
