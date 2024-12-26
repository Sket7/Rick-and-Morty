import { View, StyleSheet } from 'react-native';

import LinkButton from '@/components/buttons/link-button';

const StartPage = () => {
  return (
    <View style={styles.container}>
      <LinkButton text="Персонажи" href="/character" style={styles.text} />
      <LinkButton text="Эпизоды" href="/episode" style={styles.text} />
      <LinkButton text="Локации" href="/location" style={styles.text} />
    </View>
  );
};

export default StartPage;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ff9800',
    textTransform: 'uppercase',
  },
});
