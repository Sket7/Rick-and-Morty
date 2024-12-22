import React from 'react';
import { View, StyleSheet } from 'react-native';

import LinkButton from '@/components/buttons/LinkButton';

const StartPage = () => {
  return (
    <View style={styles.container}>
      <LinkButton text="Characters" href="/characters" style={styles.text} />
      <LinkButton text="Location" href="/characters" style={styles.text} />
      <LinkButton text="Episode" href="/characters" style={styles.text} />
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
