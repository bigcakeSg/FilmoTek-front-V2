export type Supports = 'vhs' | 'ld' | 'dvd' | 'bd' | 'uhd';

export interface Name {
  name: { _id: string; id: string; text: string; picture?: string };
}

export interface Genre {
  _id: string;
  id: string;
  text: string;
}

export interface MovieLite {
  _id: string;
  imdbId: string;
  originalTitle: string;
  frenchTitle?: string;
  englishTitle?: string;
  picture: string;
  releaseDate: string;
  collections: string[];
}

export interface Movie {
  _id: string;
  imdbId: string;
  originalTitle: string;
  frenchTitle?: string;
  englishTitle?: string;
  picture: string;
  releaseDate: string;
  duration: number;
  plot: string;
  countriesOfOrigin: string[];
  spokenLanguages: string[];
  companies: { id: string; name: string }[];
  genres: Genre[];
  casting: (Name & { characters: string[]; job: string })[];
  supports: Supports[];
  videos: string[];
  collections: string[];
}
