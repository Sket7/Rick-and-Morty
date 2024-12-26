import React from 'react';
import { Tabs } from 'expo-router';

import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const TabsEpisodeLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="episode"
        options={{
          title: 'Эпизоды',
          tabBarIcon: () => <FontAwesome6 name="person" size={22} color="#3c3e44" />,
        }}
      />
      <Tabs.Screen
        name="ep-bookmarks"
        options={{
          title: 'Эпизоды - Локально',
          tabBarIcon: () => <FontAwesome6 name="bookmark" size={22} color="#3c3e44" />,
        }}
      />
    </Tabs>
  );
};

export default TabsEpisodeLayout;
