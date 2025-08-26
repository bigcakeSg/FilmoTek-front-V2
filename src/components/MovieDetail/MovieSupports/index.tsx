import Vhs from '@assets/VHS_logo.svg?react';
import Ld from '@assets/LD_logo.svg?react';
import Dvd from '@assets/DVD_logo.svg?react';
import Bd from '@assets/BD_logo.svg?react';
import Uhd from '@assets/UHD_logo.svg?react';
import { movieDetailSupport, supportLogo } from './movieSupports.styles';
import { usePatchMovie } from '@/hooks/movies.hook';
import { Supports } from '@/interfaces/movies.interfaces';

interface MovieSupportsProps {
  movieId: string;
  supports: Supports[];
}

export default function MovieSupports({
  movieId,
  supports
}: Readonly<MovieSupportsProps>) {
  const { mutate } = usePatchMovie();

  const handleChangeVideoSupport = (support: Supports) => {
    let newSupports = [...supports];

    if (supports.includes(support)) {
      newSupports = newSupports.filter((s) => s !== support);
    } else {
      newSupports.push(support);
    }

    mutate({ movieId, movieData: { supports: newSupports } });
  };

  return (
    <div className={movieDetailSupport}>
      <button
        className={`support__video`}
        onClick={() => handleChangeVideoSupport('vhs')}
      >
        <Vhs
          className={supportLogo({
            status: supports.includes('vhs') ? 'active' : 'inactive'
          })}
        />
      </button>
      <button
        className={`support__video`}
        onClick={() => handleChangeVideoSupport('ld')}
      >
        <Ld
          className={supportLogo({
            status: supports.includes('ld') ? 'active' : 'inactive'
          })}
        />
      </button>
      <button
        className={`support__video`}
        onClick={() => handleChangeVideoSupport('dvd')}
      >
        <Dvd
          className={supportLogo({
            status: supports.includes('dvd') ? 'active' : 'inactive'
          })}
        />
      </button>
      <button
        className={`support__video`}
        onClick={() => handleChangeVideoSupport('bd')}
      >
        <Bd
          className={supportLogo({
            status: supports.includes('bd') ? 'active' : 'inactive'
          })}
        />
      </button>
      <button
        className={`support__video`}
        onClick={() => handleChangeVideoSupport('uhd')}
      >
        <Uhd
          className={supportLogo({
            status: supports.includes('uhd') ? 'active' : 'inactive'
          })}
        />
      </button>
    </div>
  );
}
