import { router, useLocalSearchParams } from 'expo-router';
import { useSQLiteContext } from 'expo-sqlite';
import { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import { deleteOneFromLocal, getOneFromLocal, SqlTables, type Episode } from '@/useCase';
import PageEpisode from '@/components/episode/page-episode';

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
      <ScrollView>
        <PageEpisode
          episode={episode}
          buttonTitle="Удалить из БД"
          onPress={() => {
            if (!episode) return;
            deleteOneFromLocal(SqlTables.episodes, db, episode.id);
            router.back();
          }}
          buttonColor={'#ff3333'}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default EpBookmarkPage;
