import { Stack } from 'expo-router';

const CharLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="[id]" options={{ title: 'О Персонаже' }} />
    </Stack>
  );
};

export default CharLayout;
