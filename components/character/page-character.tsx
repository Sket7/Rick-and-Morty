import { View, Text, StyleSheet, Image } from 'react-native';

import type { Character } from '@/useCase';

interface Props {
  item: Character;
}

const PageCharacter: React.FC<Props> = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.data}></View>
    </View>
  );
};

export default PageCharacter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
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
  data: {
    backgroundColor: '#3c3e44',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    paddingLeft: 6,
  },
  image: {
    width: 200,
    height: 200,
  },
  row: {
    flexDirection: 'row',
  },
});
