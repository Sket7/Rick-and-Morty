import type { SQLiteDatabase } from 'expo-sqlite';
import { retypeToLocationInsert, type Location } from '@/useCase';

export const saveOneLocationToLocal = async (db: SQLiteDatabase, item: Location) => {
  const _charDb = retypeToLocationInsert(item);
  const query =
    'INSERT INTO locations (id, name, type, dimension) VALUES ($id, $name, $type, $dimension)';

  return await db.runAsync(query, { ..._charDb });
};
