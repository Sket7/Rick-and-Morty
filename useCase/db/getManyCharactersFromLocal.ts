import type { SQLiteDatabase } from 'expo-sqlite';

import type { CharacterSelect } from '@/useCase';
import { retypeToCharacter } from './types';

export const getManyCharactersFromLocal = async (db: SQLiteDatabase, page: number) => {
  const { limit, offset } = { limit: 20, offset: 0 };

  const query = `SELECT * FROM characters LIMIT $limit OFFSET $offset`;
  const charSelect = await db.getAllAsync<CharacterSelect>(query, {
    $limit: limit,
    $offset: offset * page,
  });

  return charSelect.map(item => retypeToCharacter(item));
};
