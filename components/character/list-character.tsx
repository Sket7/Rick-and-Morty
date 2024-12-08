import React from 'react';
import { FlatList, View, Text, StyleSheet, TouchableHighlight } from 'react-native';

import CartCharacter from './cart-character';
import { Character } from '@/useCase';

const ListEmptyComponent = () => {
  return (
    <View style={styles.listEmptyComponent}>
      <Text style={styles.textEmpty}>Список пуст</Text>
    </View>
  );
};

type Props = { data: Character[] };

const ListCharacter: React.FC<Props> = ({ data }: Props) => {
  const renderItem = ({ item }: { item: Character }) => {
    return (
      <View style={styles.renderItem}>
        <TouchableHighlight>
          <CartCharacter item={item} />
        </TouchableHighlight>
      </View>
    );
  };

  return <FlatList data={data} renderItem={renderItem} ListEmptyComponent={ListEmptyComponent} />;
};

export default ListCharacter;

const styles = StyleSheet.create({
  renderItem: {
    padding: 8,
  },
  listEmptyComponent: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textEmpty: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
