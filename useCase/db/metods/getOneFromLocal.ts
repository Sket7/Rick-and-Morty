import type { SQLiteDatabase } from 'expo-sqlite';

import type {
  Character,
  CharacterSelect,
  Episode,
  EpisodeSelect,
  Location,
  LocationSelect,
} from '@/useCase';
import { retypeToCharacter, retypeToEpisode, retypeToLocation } from '@/useCase/db/types';
import { SqlTables, SqlTablesType } from '@/useCase/db/sql-names';

type _all = Character | Location | Episode;

export const getOneFromLocal = async <T extends _all>(
  sqlTables: SqlTablesType,
  db: SQLiteDatabase,
  id: number,
): Promise<T | null> => {
  const query = `SELECT * FROM ${sqlTables} WHERE id = $id`;
  const variables = { $id: id };

  if (sqlTables === SqlTables.characters) {
    const select = await db.getFirstAsync<CharacterSelect>(query, variables);
    return !select ? null : (retypeToCharacter(select) as T);
  }
  if (sqlTables === SqlTables.locations) {
    const select = await db.getFirstAsync<LocationSelect>(query, variables);
    return !select ? null : (retypeToLocation(select) as T);
  }
  if (sqlTables === SqlTables.episodes) {
    const select = await db.getFirstAsync<EpisodeSelect>(query, variables);
    return !select ? null : (retypeToEpisode(select) as T);
  }
  return null;
};
