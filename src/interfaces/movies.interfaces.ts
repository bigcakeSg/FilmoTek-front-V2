export interface Name {
  name: { _id: string; id: string; text: string; picture?: string };
  characters?: string[];
  attributes: string[];
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
  normalizedOriginalTitle: string;
  frenchTitle?: string;
  normalizedFrenchTitle?: string;
  englishTitle?: string;
  normalizedEnglishTitle?: string;
  picture: string;
  releaseDate: string;
  duration: number;
  plot: string;
  genres: {
    id: string;
    text: string;
  }[];
  directors: Name[];
  writers: Name[];
  casting: {
    principal: Name[];
    extended: Name[];
  };
  supports: Array<'vhs' | 'ld' | 'dvd' | 'bd' | 'uhd'>;
  videos: string[];
  collections: string[];
}
