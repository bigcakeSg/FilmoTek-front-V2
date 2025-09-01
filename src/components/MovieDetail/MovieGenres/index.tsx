import { Dispatch, SetStateAction } from 'react';
import { genreTag, movieDetailGenres } from './movieGenres.styles';
import { Genre } from '@interfaces/movies.interfaces';
import useUiStore from '@stores/ui.store';

interface MovieGenresProps {
  genres: Genre[];
  setGenre: Dispatch<SetStateAction<Genre | null>>;
}

export default function MovieGenres({
  genres,
  setGenre
}: Readonly<MovieGenresProps>) {
  const { openRightPanel } = useUiStore();

  const handleSelectGenre = (genre: Genre | null) => {
    setGenre(genre);
    openRightPanel();
  };

  return (
    <div className={movieDetailGenres}>
      {genres.map((genre) => (
        <button
          key={genre.id}
          className={genreTag}
          onClick={() => handleSelectGenre(genre)}
        >
          {genre.text}
        </button>
      ))}
    </div>
  );
}
