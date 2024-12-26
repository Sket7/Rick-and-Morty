import React from 'react';
import { Stack } from 'expo-router';

const EpisodeLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="[id]" options={{ title: 'О Эпизоде' }} />
    </Stack>
  );
};

export default EpisodeLayout;
