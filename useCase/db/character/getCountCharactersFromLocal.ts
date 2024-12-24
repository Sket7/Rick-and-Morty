import type { SQLiteDatabase } from 'expo-sqlite';

export const getCountCharactersFromLocal = async (db: SQLiteDatabase) => {
  const query = 'SELECT count(*) FROM characters';
  const count = await db.getFirstAsync<{ 'count(*)': number }>(query);

  return count;
};
