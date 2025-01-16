import type { SQLiteDatabase } from 'expo-sqlite';
import { SqlTables } from './sql-names';

export const initDataBaseSQLite = async (db: SQLiteDatabase) => {
  // await db.execAsync(drop);
  await db.execAsync(create);
};

const drop = `
DROP TABLE IF EXISTS ${SqlTables.characters};
DROP TABLE IF EXISTS ${SqlTables.locations};
DROP TABLE IF EXISTS ${SqlTables.episodes};
`;

const create = `
PRAGMA journal_mode = WAL;
CREATE TABLE IF NOT EXISTS ${SqlTables.characters} (
  id INTEGER PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  status TEXT NOT NULL,
  type TEXT NOT NULL,
  species TEXT NOT NULL,
  gender TEXT NOT NULL,
  image TEXT NOT NULL,
  origin TEXT NOT NULL,
  location TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS ${SqlTables.locations} (
  id INTEGER PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  type TEXT NOT NULL,
  dimension TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS ${SqlTables.episodes} (
  id INTEGER PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  air_date TEXT NOT NULL,
  episode TEXT NOT NULL
)
`;
