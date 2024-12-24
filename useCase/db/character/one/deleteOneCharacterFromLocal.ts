import type { SQLiteDatabase } from 'expo-sqlite';

export const deleteOneCharacterFromLocal = async (db: SQLiteDatabase, id: number) => {
  const query = 'DELETE FROM characters WHERE id = $id';

  return await db.runAsync(query, id);
};
