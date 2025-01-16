import type { SQLiteDatabase } from 'expo-sqlite';
import type { SqlTablesType } from '@/useCase';

export const deleteOneFromLocal = async (
  sqlTables: SqlTablesType,
  db: SQLiteDatabase,
  id: number,
) => {
  const query = `DELETE FROM ${sqlTables} WHERE id = $id`;
  return await db.runAsync(query, id);
};
