import type { SQLiteDatabase } from 'expo-sqlite';

import type { Character, Episode, Location, SqlTablesType } from '@/useCase';
import { SqlTables } from '@/useCase/db/sql-names';
import {
  retypeToCharacterInsert,
  retypeToEpisodeInsert,
  retypeToLocationInsert,
} from '@/useCase/db/types';

type _all = Character | Location | Episode;

const _queryCh =
  'INSERT INTO characters (id, name, status, type, species, gender, image, origin, location) VALUES ($id, $name, $status, $type, $species, $gender, $image, $origin, $location)';
const _queryLoc =
  'INSERT INTO locations (id, name, type, dimension) VALUES ($id, $name, $type, $dimension)';
const _queryEp =
  'INSERT INTO episodes (id, name, air_date, episode) VALUES ($id, $name, $air_date, $episode)';

export const saveOneToLocal = async <T extends _all>(
  sqlTables: SqlTablesType,
  db: SQLiteDatabase,
  item: T,
) => {
  if (sqlTables === SqlTables.characters) {
    const insert = retypeToCharacterInsert(item as Character);
    return db.runAsync(_queryCh, { ...insert });
  }
  if (sqlTables === SqlTables.locations) {
    const insert = retypeToLocationInsert(item as Location);
    return db.runAsync(_queryLoc, { ...insert });
  }
  if (sqlTables === SqlTables.episodes) {
    const insert = retypeToEpisodeInsert(item as Episode);
    return db.runAsync(_queryEp, { ...insert });
  }
  return null;
};
