import { useLocalSearchParams } from 'expo-router';
import { useSQLiteContext } from 'expo-sqlite';
import { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import PageLocation from '@/components/location/page-location';
import { getOneFromLocal, saveOneToLocal, SqlTables, type Location } from '@/useCase';

const LocBookmarkPage = () => {
  const db = useSQLiteContext();
  const { id } = useLocalSearchParams<{ id: string }>();

  const [location, setLocation] = useState<Location>();

  useEffect(() => {
    const getData = async (id: number) => {
      try {
        const data = await getOneFromLocal<Location>(SqlTables.locations, db, id);
        setLocation(data || undefined);
      } catch (error) {
        return;
      }
    };
    getData(parseInt(id || '1'));
  }, [location]);

  return (
    <SafeAreaView>
      <ScrollView>
        <PageLocation
          location={location}
          buttonTitle="Сохранить в БД"
          onPress={() => {
            if (!location) return;
            saveOneToLocal(SqlTables.locations, db, location);
          }}
          buttonColor={'#00BC00'}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LocBookmarkPage;
