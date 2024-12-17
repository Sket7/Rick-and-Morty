import React from 'react';
import { Tabs } from 'expo-router';

import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="characters"
        options={{
          title: 'Персонажи',
          tabBarIcon: () => <FontAwesome6 name="person" size={22} color="#3c3e44" />,
        }}
      />
      <Tabs.Screen
        name="bookmarks"
        options={{
          title: 'Закладки',
          tabBarIcon: () => <FontAwesome6 name="bookmark" size={22} color="#3c3e44" />,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
