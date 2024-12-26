import { Stack } from 'expo-router';

const CharBookLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="[id]" options={{ title: 'О Персонаже ^Local^' }} />
    </Stack>
  );
};

export default CharBookLayout;
