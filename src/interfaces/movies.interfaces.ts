export interface MovieLite {
  _id: string;
  imdbId: string;
  originalTitle: string;
  frenchTitle?: string;
  picture: string;
  releaseDate: string;
  duration: number;
  genres: {
    id: string;
    text: string;
  }[];
  supports: string[];
  watched?: boolean;
}
