import type { Character } from '@/useCase';

export interface CharacterInsert {
  $id: number;
  $name: string;
  $status: string;
  $type: string;
  $species: string;
  $gender: string;
  $image: string;
  $origin: string;
  $location: string;
}

export interface CharacterSelect {
  id: number;
  name: string;
  status: string;
  type: string;
  species: string;
  gender: string;
  image: string;
  origin: string;
  location: string;
}

export const retypeToCharacter = (item: CharacterSelect): Character => {
  return {
    id: item.id,
    name: item.name,
    status: item.status,
    species: item.species,
    type: item.type,
    gender: item.gender,
    image: item.image,
    origin: { name: item.origin, url: '' },
    location: { name: item.location, url: '' },
    episode: [],
    url: '',
    created: '',
  };
};

export const retypeToCharacterInsert = (item: Character): CharacterInsert => {
  return {
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
};
