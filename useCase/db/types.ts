import type { Character, Location, Episode } from '@/useCase';

// * Characters
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

// * Locations
export interface LocationInsert {
  $id: number;
  $name: string;
  $type: string;
  $dimension: string;
}

export interface LocationSelect {
  id: number;
  name: string;
  type: string;
  dimension: string;
}

export const retypeToLocation = (item: LocationSelect): Location => {
  return {
    id: item.id,
    name: item.name,
    type: item.type,
    dimension: item.dimension,
    residents: [],
    url: '',
    created: '',
  };
};

export const retypeToLocationInsert = (item: Location): LocationInsert => {
  return {
    $id: item.id,
    $name: item.name,
    $type: item.type,
    $dimension: item.dimension,
  };
};

// * Episodes
export interface EpisodeInsert {
  $id: number;
  $name: string;
  $air_date: string;
  $episode: string;
}

export interface EpisodeSelect {
  id: number;
  name: string;
  air_date: string;
  episode: string;
}

export const retypeToEpisode = (item: EpisodeSelect): Episode => {
  return {
    id: item.id,
    name: item.name,
    air_date: item.air_date,
    episode: item.episode,
    characters: [],
    url: '',
    created: '',
  };
};

export const retypeToEpisodeInsert = (item: Episode): EpisodeInsert => {
  return {
    $id: item.id,
    $name: item.name,
    $air_date: item.air_date,
    $episode: item.episode,
  };
};
