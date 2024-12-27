import PageLocation from '@/components/location/page-location';
import { getOneLocationFromApi, type Location } from '@/useCase';
import { saveOneLocationToLocal } from '@/useCase/db/location/one/saveOneLocationToLocal';
import { useLocalSearchParams } from 'expo-router';
import { useSQLiteContext } from 'expo-sqlite';
import { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

const LocationPage = () => {
  const db = useSQLiteContext();
  const { id } = useLocalSearchParams<{ id: string }>();

  const [location, setLocation] = useState<Location>();

  useEffect(() => {
    const getData = async (id: number) => {
      try {
        const data = await getOneLocationFromApi(id);
        setLocation(data);
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
            saveOneLocationToLocal(db, location);
          }}
          buttonColor={'#00BC00'}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LocationPage;
