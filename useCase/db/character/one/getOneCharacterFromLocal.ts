import type { SQLiteDatabase } from 'expo-sqlite';

import type { Character, CharacterSelect } from '@/useCase';
import { retypeToCharacter } from '@/useCase/db/types';

export const getOneCharacterFromLocal = async (
  db: SQLiteDatabase,
  id: number,
): Promise<Character | null> => {
  const query = 'SELECT * FROM characters WHERE id = $id';
  const charSelect = await db.getFirstAsync<CharacterSelect>(query, { $id: id });

  return !charSelect ? null : retypeToCharacter(charSelect);
};
