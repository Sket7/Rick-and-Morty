import React from 'react';
import { Stack } from 'expo-router';

const LocationLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="[id]" options={{ title: 'О Локации' }} />
    </Stack>
  );
};

export default LocationLayout;
