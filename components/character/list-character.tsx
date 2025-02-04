import React from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';

import CartCharacter from './cart-character';
import type { Character } from '@/useCase';
import ListEmptyComponent from '../commons/list-empty';

type Props = {
  data: Character[];
  onPress: (id: number) => void;
  ListHeaderComponent: () => React.JSX.Element;
};

const ListCharacter: React.FC<Props> = ({ data, onPress, ListHeaderComponent }: Props) => {
  const renderItem = ({ item }: { item: Character }) => {
    return (
      <View style={styles.renderItem}>
        <TouchableOpacity activeOpacity={0.6} onPress={() => onPress(item.id)}>
          <CartCharacter item={item} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
      ListEmptyComponent={ListEmptyComponent}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
};

export default ListCharacter;

const styles = StyleSheet.create({
  renderItem: {
    padding: 8,
  },
});
