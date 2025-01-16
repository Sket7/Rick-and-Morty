import React from 'react';
import { Stack } from 'expo-router';

const LocationBookLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="[id]" options={{ title: 'О Локации ^Local^' }} />
    </Stack>
  );
};

export default LocationBookLayout;
