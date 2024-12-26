export interface CharacterFromApi {
  info: Info;
  results: Character[];
}

export interface EpisodeFromApi {
  info: Info;
  results: Episode[];
}

export interface LocationFromApi {
  info: Info;
  results: Location[];
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Origin;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface Origin {
  name: string;
  url: string;
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev?: any;
}
