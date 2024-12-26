import { StyleSheet, Button, View, Text } from 'react-native';

interface Props {
  page: number;
  maxPages: number;
  arrowBack: () => void;
  arrowNext: () => void;
}

const ListHeaderComponent: React.FC<Props> = ({ page, maxPages, arrowBack, arrowNext }) => {
  return (
    <View style={styles.listEmptyComponent}>
      <View style={styles.buttonsPageComponent}>
        <Button color={styles.button.color} title=" <- " onPress={arrowBack} />
        <Text style={styles.textEmpty}>
          {page} | {maxPages}
        </Text>
        <Button color={styles.button.color} title=" -> " onPress={arrowNext} />
      </View>
    </View>
  );
};

export default ListHeaderComponent;

const styles = StyleSheet.create({
  listEmptyComponent: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonsPageComponent: {
    flexDirection: 'row',
  },
  textEmpty: {
    fontSize: 24,
    fontWeight: 'bold',
    marginInline: 25,
  },
  button: {
    color: '#ff9800',
  },
});
