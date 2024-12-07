import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import { data, Character } from './data';

const CartCharacter = (data: Character) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: data.image }} style={{ width: 100, height: 100 }} />
      <View style={styles.data}>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.text}>Имя: </Text>
            <Text style={styles.text_bold}>{data.name}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.text}>{'Статус: '}</Text>
            <Text style={styles.text_bold}>{data.status}</Text>
            <Text style={styles.text}>{' - '}</Text>
            <Text style={styles.text}>{'Вид: '}</Text>
            <Text style={styles.text_bold}>{data.species}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.text}>Последняя локация:</Text>
          <Text style={styles.text_bold}>{data.location.name}</Text>
        </View>
      </View>
    </View>
  );
};

export default CartCharacter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#3c3e44',
  },
  data: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    paddingLeft: 16,
  },
  text: {
    fontSize: 14,
    color: '#fff',
  },
  text_bold: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
});
