import React from 'react';
import { Tabs } from 'expo-router';

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="characters" options={{ headerShown: false }} />
      <Tabs.Screen name="bookmarks" options={{ headerShown: false }} />
    </Tabs>
  );
};

export default TabsLayout;
