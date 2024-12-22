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
