import { useLocalSearchParams } from 'expo-router';
import { useSQLiteContext } from 'expo-sqlite';
import { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import { getOneFromLocal, SqlTables, type Episode } from '@/useCase';

const EpBookmarkPage = () => {
  const db = useSQLiteContext();
  const { id } = useLocalSearchParams<{ id: string }>();

  const [episode, setEpisode] = useState<Episode>();

  useEffect(() => {
    const getData = async (id: number) => {
      try {
        const data = await getOneFromLocal<Episode>(SqlTables.episodes, db, id);
        setEpisode(data || undefined);
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

export default EpBookmarkPage;
