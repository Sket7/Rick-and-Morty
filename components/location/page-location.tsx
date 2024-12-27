import { View, Text, StyleSheet, Button, type ColorValue } from 'react-native';

import type { Location } from '@/useCase';
import CartLocation from './cart-location';

interface Props {
  location: Location | undefined;
  buttonTitle: string;
  onPress: () => void;
  buttonColor?: ColorValue;
}

const PageLocation: React.FC<Props> = ({ location, buttonTitle, onPress, buttonColor }) => {
  return (
    <View>
      {!location ? (
        <Text style={styles.textLoader}>Загрузка...</Text>
      ) : (
        <View>
          <CartLocation item={location} />
          <Button color={buttonColor} title={buttonTitle} onPress={onPress} />
        </View>
      )}
    </View>
  );
};

export default PageLocation;

const styles = StyleSheet.create({
  textLoader: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#ff9800',
  },
});
