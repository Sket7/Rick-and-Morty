import React from 'react';
import { Stack } from 'expo-router';

const EpisodeBookLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="[id]" options={{ title: 'О Эпизоде ^Local^' }} />
    </Stack>
  );
};

export default EpisodeBookLayout;
