export const SupportsEnum = {
  vhs: 'VHS',
  ld: 'Laserdisc',
  dvd: 'DVD',
  bd: 'Blu-Ray',
  uhd: 'Blu-Ray 4K UHD'
};

export type Supports = (typeof SupportsEnum)[keyof typeof SupportsEnum];

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
