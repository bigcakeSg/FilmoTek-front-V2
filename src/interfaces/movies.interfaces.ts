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
  genres: {
    id: string;
    text: string;
  }[];
  supports: string[];
  videos: string[];
  collections: string[];
}
