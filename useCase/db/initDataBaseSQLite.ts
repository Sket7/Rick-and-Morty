import type { SQLiteDatabase } from 'expo-sqlite';

export const initDataBaseSQLite = async (db: SQLiteDatabase) => {
  await db.execAsync(drop);
  await db.execAsync(create);
};

const drop = `DROP TABLE IF EXISTS characters`;

const create = `
PRAGMA journal_mode = WAL;
CREATE TABLE IF NOT EXISTS characters (
  id INTEGER PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  status TEXT NOT NULL,
  type TEXT NOT NULL,
  species TEXT NOT NULL,
  gender TEXT NOT NULL,
  image TEXT NOT NULL,
  origin TEXT NOT NULL,
  location TEXT NOT NULL
) 
`;
