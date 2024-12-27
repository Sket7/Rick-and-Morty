import React from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';

import CartLocation from './cart-location';
import type { Location } from '@/useCase';
import ListEmptyComponent from '@/components/commons/list-empty';

type Props = {
  data: Location[];
  onPress: (id: number) => void;
  ListHeaderComponent: () => React.JSX.Element;
};

const ListLocation: React.FC<Props> = ({ data, onPress, ListHeaderComponent }: Props) => {
  const renderItem = ({ item }: { item: Location }) => {
    return (
      <View style={styles.renderItem}>
        <TouchableOpacity activeOpacity={0.6} onPress={() => onPress(item.id)}>
          <CartLocation item={item} />
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

export default ListLocation;

const styles = StyleSheet.create({
  renderItem: {
    padding: 8,
  },
});
