import { SQLiteDatabase } from 'expo-sqlite';

import type { Character, CharacterInsert } from '@/useCase';

export const saveCharacterToLocal = async (db: SQLiteDatabase, item: Character) => {
  const data = await insert(db, item);
  return data;
};

const insert = async (db: SQLiteDatabase, item: Character) => {
  const _charDb: CharacterInsert = {
    $id: item.id,
    $name: item.name,
    $status: item.status,
    $type: item.type,
    $species: item.species,
    $gender: item.gender,
    $image: item.image,
    $origin: item.origin.name,
    $location: item.location.name,
  };
  const result_insert = await db.runAsync(
    'INSERT INTO characters (id, name, status, type, species, gender, image, origin, location) VALUES ($id, $name, $status, $type, $species, $gender, $image, $origin, $location)',
    { ..._charDb },
  );

  return result_insert;
};
