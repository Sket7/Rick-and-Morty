export const getCharactersFromApi = async (page: number = 0): Promise<CharactersFromApi> => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page < 0 ? 0 : page | 0}`,
  );
  const data: CharactersFromApi = await response.json();
  return data;
};

export interface CharactersFromApi {
  info: Info;
  results: Character[];
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
