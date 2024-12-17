import React from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  GestureResponderEvent,
  TouchableOpacity,
} from 'react-native';

import CartCharacter from './cart-character';
import { Character } from '@/useCase';

type Props = {
  data: Character[];
  onPress?: (event: GestureResponderEvent) => void;
  onLongPress?: (event: GestureResponderEvent) => void;
};

const ListCharacter: React.FC<Props> = ({ data, onPress, onLongPress }: Props) => {
  const renderItem = ({ item }: { item: Character }) => {
    return (
      <View style={styles.renderItem}>
        <TouchableOpacity activeOpacity={0.6} onPress={onPress} onLongPress={onLongPress}>
          <CartCharacter item={item} />
        </TouchableOpacity>
      </View>
    );
  };

  return <FlatList data={data} renderItem={renderItem} ListEmptyComponent={ListEmptyComponent} />;
};

export default ListCharacter;

const ListEmptyComponent = () => {
  return (
    <View style={styles.listEmptyComponent}>
      <Text style={styles.textEmpty}>Список пуст</Text>
    </View>
  );
};

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
