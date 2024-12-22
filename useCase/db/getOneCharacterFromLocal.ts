import { SQLiteDatabase } from 'expo-sqlite';

import type { Character, CharacterSelect } from '@/useCase';

export const getOneCharacterFromLocal = async (
  db: SQLiteDatabase,
  id: number,
): Promise<Character | null> => {
  const data = await db.getFirstAsync<CharacterSelect>('SELECT * FROM characters WHERE id = $id', {
    $id: id,
  });
  if (data === null) return null;
  const _char: Character = {
    id: data.id,
    name: data.name,
    status: data.status,
    species: data.species,
    type: data.type,
    gender: data.gender,
    image: data.image,
    origin: { name: data.origin, url: '' },
    location: { name: data.location, url: '' },
    episode: [],
    url: '',
    created: '',
  };

  return _char;
};
