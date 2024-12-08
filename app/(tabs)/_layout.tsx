import React from 'react';
import { Tabs } from 'expo-router';

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="characters" />
      <Tabs.Screen name="bookmarks" />
    </Tabs>
  );
};

export default TabsLayout;
