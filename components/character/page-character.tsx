import { View, Text, StyleSheet, Image } from 'react-native';

import { type Character } from '@/useCase';

interface Props {
  item: Character;
}

const PageCharacter: React.FC<Props> = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text>{JSON.stringify(item, null, 2)}</Text>
    </View>
  );
};

export default PageCharacter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  image: {
    width: 200,
    height: 200,
  },
});
