import type { SQLiteDatabase } from 'expo-sqlite';

import type { Character } from '@/useCase';
import { retypeToCharacterInsert } from './types';

export const saveOneCharacterToLocal = async (db: SQLiteDatabase, item: Character) => {
  const _charDb = retypeToCharacterInsert(item);
  const query =
    'INSERT INTO characters (id, name, status, type, species, gender, image, origin, location) VALUES ($id, $name, $status, $type, $species, $gender, $image, $origin, $location)';

  return await db.runAsync(query, { ..._charDb });
};
