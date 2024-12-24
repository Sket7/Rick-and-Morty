import type { SQLiteDatabase } from 'expo-sqlite';

import type { CharacterSelect } from '@/useCase';
import { retypeToCharacter } from '@/useCase/db/types';

export const getManyCharactersFromLocal = async (
  db: SQLiteDatabase,
  page: number,
  limit: number = 3,
) => {
  const query = `SELECT * FROM characters LIMIT $limit OFFSET $offset`;
  const charSelect = await db.getAllAsync<CharacterSelect>(query, {
    $limit: limit,
    $offset: page > 1 ? (page - 1) * limit : 0,
  });

  return charSelect.map(item => retypeToCharacter(item));
};
