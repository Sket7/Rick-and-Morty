import React from 'react';
import { ScrollView } from 'react-native';

import CartCharacter from '@/components/cart-character';
import { data, data2 } from '@/components/data';

export default function App() {
  return (
    <ScrollView>
      <CartCharacter {...data} />
      <CartCharacter {...data2} />
    </ScrollView>
  );
}
