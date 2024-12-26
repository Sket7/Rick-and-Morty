import React from 'react';
import { Tabs } from 'expo-router';

import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const TabsLocationLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="location"
        options={{
          title: 'Локации',
          tabBarIcon: () => <FontAwesome6 name="person" size={22} color="#3c3e44" />,
        }}
      />
      <Tabs.Screen
        name="loc-bookmarks"
        options={{
          title: 'Локации - Локально',
          tabBarIcon: () => <FontAwesome6 name="bookmark" size={22} color="#3c3e44" />,
        }}
      />
    </Tabs>
  );
};

export default TabsLocationLayout;
