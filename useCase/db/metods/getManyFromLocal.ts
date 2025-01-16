import type { SQLiteDatabase } from 'expo-sqlite';
import { SqlTables, SqlTablesType } from '../sql-names';
import {
  type CharacterSelect,
  type EpisodeSelect,
  type LocationSelect,
  retypeToCharacter,
  retypeToEpisode,
  retypeToLocation,
} from '../types';

export const getManyFromLocal = async (
  sqlTables: SqlTablesType,
  db: SQLiteDatabase,
  page: number,
  limit: number = 3,
) => {
  const query = `SELECT * FROM ${sqlTables} LIMIT $limit OFFSET $offset`;
  const variables = { $limit: limit, $offset: page > 1 ? (page - 1) * limit : 0 };

  if (sqlTables === SqlTables.characters) {
    const select = await db.getAllAsync<CharacterSelect>(query, variables);
    const result = select.map(item => retypeToCharacter(item));
    return result;
  }
  if (sqlTables === SqlTables.locations) {
    const select = await db.getAllAsync<LocationSelect>(query, variables);
    const result = select.map(item => retypeToLocation(item));
    return result;
  }
  if (sqlTables === SqlTables.episodes) {
    const select = await db.getAllAsync<EpisodeSelect>(query, variables);
    const result = select.map(item => retypeToEpisode(item));
    return result;
  }
  return [];
};
