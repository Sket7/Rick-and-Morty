import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import type { Episode } from '@/useCase';

type Props = { item: Episode };

const CartEpisode: React.FC<Props> = ({ item }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.data}>
        <View style={styles.row}>
          <Text style={styles.text}>{'Название: '}</Text>
          <Text style={styles.textBold}>{item.name}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>{'Дата выхода: '}</Text>
          <Text style={styles.textBold}>{item.air_date}</Text>
          <Text style={styles.text}>{' Эпизод: '}</Text>
          <Text style={styles.textBold}>{item.episode}</Text>
        </View>
      </View>
    </View>
  );
};

export default CartEpisode;

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
