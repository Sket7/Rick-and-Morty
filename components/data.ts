export const data = {
  id: 379,
  name: 'Wedding Bartender',
  status: 'unknown',
  species: 'Alien',
  type: '',
  gender: 'Male',
  origin: {
    name: 'unknown',
    url: '',
  },
  location: {
    name: 'Planet Squanch',
    url: 'https://rickandmortyapi.com/api/location/35',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/379.jpeg',
  episode: ['https://rickandmortyapi.com/api/episode/21'],
  url: 'https://rickandmortyapi.com/api/character/379',
  created: '2018-01-10T19:37:41.375Z',
};

export const data2 = {
  id: 244,
  name: 'Mr. Poopybutthole',
  status: 'Alive',
  species: 'Poopybutthole',
  type: '',
  gender: 'Male',
  origin: {
    name: 'unknown',
    url: '',
  },
  location: {
    name: 'Earth (Replacement Dimension)',
    url: 'https://rickandmortyapi.com/api/location/20',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/244.jpeg',
  episode: [
    'https://rickandmortyapi.com/api/episode/15',
    'https://rickandmortyapi.com/api/episode/21',
    'https://rickandmortyapi.com/api/episode/29',
    'https://rickandmortyapi.com/api/episode/30',
    'https://rickandmortyapi.com/api/episode/31',
    'https://rickandmortyapi.com/api/episode/34',
    'https://rickandmortyapi.com/api/episode/51',
  ],
  url: 'https://rickandmortyapi.com/api/character/244',
  created: '2017-12-30T18:03:48.054Z',
};

export type Character = typeof data;
