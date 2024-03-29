export interface CharactersResponse {
  info: CharacterInfoType;
  results: CharacterType[];
}

export interface CharacterType {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface CharacterInfoType {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}
