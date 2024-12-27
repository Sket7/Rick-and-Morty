import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import type { Location } from '@/useCase';

type Props = { item: Location };

const CartLocation: React.FC<Props> = ({ item }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.data}>
        <View style={styles.row}>
          <Text style={styles.text}>{'Название: '}</Text>
          <Text style={styles.textBold}>{item.name}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>{'Тип: '}</Text>
          <Text style={styles.textBold}>{item.type}</Text>
          <Text style={styles.text}>{' - Измерение: '}</Text>
          <Text style={styles.textBold}>{item.dimension}</Text>
        </View>
      </View>
    </View>
  );
};

export default CartLocation;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  data: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    backgroundColor: '#3c3e44',
    padding: 10,
  },
  text: {
    fontSize: 14,
    color: '#fff',
  },
  textBold: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
  },
  row: {
    flexDirection: 'row',
  },
});
