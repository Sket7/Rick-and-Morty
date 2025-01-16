export const SqlTables = {
  locations: 'locations',
  characters: 'characters',
  episodes: 'episodes',
} as const;

export type SqlTablesType = (typeof SqlTables)[keyof typeof SqlTables];
