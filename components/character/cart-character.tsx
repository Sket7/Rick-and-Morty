import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import type { Character } from '@/useCase';

type Props = { item: Character };

const CartCharacter: React.FC<Props> = ({ item }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.data}>
        <View>
          <View style={styles.row}>
            <Text style={styles.text}>{'Имя: '}</Text>
            <Text style={styles.textBold}>{item.name}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>{'Статус: '}</Text>
            <Text style={styles.textBold}>{item.status}</Text>
            <Text style={styles.text}>{' - Вид: '}</Text>
            <Text style={styles.textBold}>{item.species}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.text}>{'Последняя локация:'}</Text>
          <Text style={styles.textBold}>{item.location.name}</Text>
        </View>
      </View>
    </View>
  );
};

export default CartCharacter;

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
    paddingLeft: 16,
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
