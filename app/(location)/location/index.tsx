import { SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';

import { getManyLocationFromApi, type LocationFromApi } from '@/useCase';
import { router } from 'expo-router';
import { validPage } from '@/utils';
import CartLocation from '@/components/location/cart-location';

import { loc1 } from '@/components/data';
import ListLocation from '@/components/location/list-location';
import ListHeaderComponent from '@/components/commons/list-header';

const LocationIndex = () => {
  const [data, setData] = useState<LocationFromApi>();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getData = async (page: number) => {
      try {
        const data = await getManyLocationFromApi(page);
        setData(data);
      } catch (error) {
        return;
      }
    };
    getData(page);
  }, [page]);

  return (
    <SafeAreaView>
      <ListLocation
        data={data?.results || []}
        onPress={(id: number) => router.push({ pathname: '/location/[id]', params: { id } })}
        ListHeaderComponent={() => (
          <ListHeaderComponent
            page={page}
            maxPages={data?.info.pages || 1}
            arrowBack={() => setPage(validPage(page - 1, data?.info.pages || 1))}
            arrowNext={() => setPage(validPage(page + 1, data?.info.pages || 1))}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default LocationIndex;
