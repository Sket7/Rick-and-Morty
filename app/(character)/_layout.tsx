import React from 'react';
import { Tabs } from 'expo-router';

import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const TabsCharLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="character"
        options={{
          title: 'Персонажи',
          tabBarIcon: () => <FontAwesome6 name="person" size={22} color="#3c3e44" />,
        }}
      />
      <Tabs.Screen
        name="ch-bookmarks"
        options={{
          title: 'Персонажи - Локально',
          tabBarIcon: () => <FontAwesome6 name="bookmark" size={22} color="#3c3e44" />,
        }}
      />
    </Tabs>
  );
};

export default TabsCharLayout;
