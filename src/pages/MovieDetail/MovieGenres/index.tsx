import { genreTag, movieDetailGenres } from './movieGenres.styles';

interface MovieGenresProps {
  genres: Array<{
    id: string;
    text: string;
  }>;
}

export default function MovieGenres({ genres }: Readonly<MovieGenresProps>) {
  return (
    <div className={movieDetailGenres}>
      {genres.map((genre) => (
        <div key={genre.id} className={genreTag}>
          {genre.text}
        </div>
      ))}
    </div>
  );
}
