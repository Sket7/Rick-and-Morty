import React from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';

import type { Episode } from '@/useCase';
import ListEmptyComponent from '@/components/commons/list-empty';
import CartEpisode from './cart-episode';

type Props = {
  data: Episode[];
  onPress: (id: number) => void;
  ListHeaderComponent: () => React.JSX.Element;
};

const ListEpisode: React.FC<Props> = ({ data, onPress, ListHeaderComponent }: Props) => {
  const renderItem = ({ item }: { item: Episode }) => {
    return (
      <View style={styles.renderItem}>
        <TouchableOpacity activeOpacity={0.6} onPress={() => onPress(item.id)}>
          <CartEpisode item={item} />
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

export default ListEpisode;

const styles = StyleSheet.create({
  renderItem: {
    padding: 8,
  },
});
