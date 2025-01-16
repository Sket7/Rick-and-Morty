import { View, Text, StyleSheet, Button, type ColorValue } from 'react-native';

import type { Episode } from '@/useCase';
import CartEpisode from './cart-episode';

interface Props {
  episode: Episode | undefined;
  buttonTitle: string;
  onPress: () => void;
  buttonColor?: ColorValue;
}

const PageEpisode: React.FC<Props> = ({ episode, buttonTitle, onPress, buttonColor }) => {
  return (
    <View>
      {!episode ? (
        <Text style={styles.textLoader}>Загрузка...</Text>
      ) : (
        <View>
          <CartEpisode item={episode} />
          <Button color={buttonColor} title={buttonTitle} onPress={onPress} />
        </View>
      )}
    </View>
  );
};

export default PageEpisode;

const styles = StyleSheet.create({
  textLoader: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#ff9800',
  },
});
