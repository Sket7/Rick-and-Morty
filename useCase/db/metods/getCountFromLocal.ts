import type { SQLiteDatabase } from 'expo-sqlite';
import { SqlTablesType } from '../sql-names';

type _count = { 'count(*)': number };

export const getCountFromLocal = async (sqlTable: SqlTablesType, db: SQLiteDatabase) => {
  const query = `SELECT count(*) FROM ${sqlTable}`;

  return await db.getFirstAsync<_count>(query);
};
