import { View, Text, StyleSheet, Button, type ColorValue } from 'react-native';

import type { Character } from '@/useCase';
import CartCharacter from './cart-character';

interface Props {
  character: Character | undefined;
  buttonTitle: string;
  onPress: () => void;
  buttonColor?: ColorValue;
}

const PageCharacter: React.FC<Props> = ({ character, buttonTitle, onPress, buttonColor }) => {
  return (
    <View>
      {!character ? (
        <Text style={styles.textLoader}>Загрузка...</Text>
      ) : (
        <View>
          <CartCharacter item={character} />
          <Button color={buttonColor} title={buttonTitle} onPress={onPress} />
        </View>
      )}
    </View>
  );
};

export default PageCharacter;

const styles = StyleSheet.create({
  textLoader: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#ff9800',
  },
});
