import { SQLiteProvider } from 'expo-sqlite';
import { initDataBaseSQLite } from '@/useCase/db/initDataBaseSQLite';
import { Stack } from 'expo-router';
import React from 'react';

const StackLayout = () => {
  return (
    <SQLiteProvider databaseName="rickandmorty.db" onInit={initDataBaseSQLite}>
      <Stack>
        <Stack.Screen name="(character)" options={{ headerShown: false }} />
        <Stack.Screen name="(episode)" options={{ headerShown: false }} />
        <Stack.Screen name="(location)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </SQLiteProvider>
  );
};

export default StackLayout;
