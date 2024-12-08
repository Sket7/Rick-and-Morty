import React from 'react';
import { Stack } from 'expo-router';

// SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="home" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
