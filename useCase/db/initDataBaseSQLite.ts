import { SQLiteDatabase } from 'expo-sqlite';

export const initDataBaseSQLite = async (db: SQLiteDatabase) => {
  // //   const DATABASE_VERSION = 1;
  // //   let data = await db.getFirstAsync<{ user_version: number }>('PRAGMA user_version');
  // //   let currentDbVersion = data?.user_version || 2;
  // //   if (currentDbVersion >= DATABASE_VERSION) return;

  // //   if (currentDbVersion === 0) {
  // //     await db.execAsync(`
  // // PRAGMA journal_mode = 'wal';
  // // CREATE TABLE todos (id INTEGER PRIMARY KEY NOT NULL, value TEXT NOT NULL, intValue INTEGER);
  // // `);
  // //     await db.runAsync('INSERT INTO todos (value, intValue) VALUES (?, ?)', 'hello', 1);
  // //     await db.runAsync('INSERT INTO todos (value, intValue) VALUES (?, ?)', 'world', 2);
  // //     currentDbVersion = 1;
  // //   }
  // //   if (currentDbVersion === 1) {
  // //     Add more migrations
  // //   }
  // //   await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);

  await db.execAsync(drop);
  await db.execAsync(create);
};

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

const drop = `DROP TABLE IF EXISTS characters`;
