import { View, Text, StyleSheet } from 'react-native';

const ListEmptyComponent = () => {
  return (
    <View style={styles.listEmptyComponent}>
      <Text style={styles.textEmpty}>Список пуст</Text>
    </View>
  );
};

export default ListEmptyComponent;

const styles = StyleSheet.create({
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
