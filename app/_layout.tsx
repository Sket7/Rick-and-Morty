import React from 'react';
import { Stack } from 'expo-router';

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="page-character" options={{ title: 'О Персонаже' }} />
    </Stack>
  );
};

export default StackLayout;
