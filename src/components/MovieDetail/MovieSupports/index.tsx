import Vhs from '@assets/VHS_logo.svg?react';
import Ld from '@assets/LD_logo.svg?react';
import Dvd from '@assets/DVD_logo.svg?react';
import Bd from '@assets/BD_logo.svg?react';
import Uhd from '@assets/UHD_logo.svg?react';
import { movieDetailSupport, supportLogo } from './movieSupports.styles';
import { usePatchMovie } from '@hooks/movies.hook';
import { Supports } from '@interfaces/movies.interfaces';
import { useRole } from '@hooks/auth.hook';

interface MovieSupportsProps {
  movieId: string;
  supports: Supports[];
}

export default function MovieSupports({
  movieId,
  supports
}: Readonly<MovieSupportsProps>) {
  const { mutate } = usePatchMovie();
  const { isAdmin } = useRole();

  const handleChangeVideoSupport = (support: Supports) => {
    if (!isAdmin) return;

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
        className={supportLogo({
          status: supports.includes('vhs') ? 'active' : 'inactive',
          role: isAdmin ? 'admin' : 'user'
        })}
        onClick={() => handleChangeVideoSupport('vhs')}
      >
        <Vhs />
      </button>
      <button
        className={supportLogo({
          status: supports.includes('ld') ? 'active' : 'inactive',
          role: isAdmin ? 'admin' : 'user'
        })}
        onClick={() => handleChangeVideoSupport('ld')}
      >
        <Ld />
      </button>
      <button
        className={supportLogo({
          status: supports.includes('dvd') ? 'active' : 'inactive',
          role: isAdmin ? 'admin' : 'user'
        })}
        onClick={() => handleChangeVideoSupport('dvd')}
      >
        <Dvd />
      </button>
      <button
        className={supportLogo({
          status: supports.includes('bd') ? 'active' : 'inactive',
          role: isAdmin ? 'admin' : 'user'
        })}
        onClick={() => handleChangeVideoSupport('bd')}
      >
        <Bd />
      </button>
      <button
        className={supportLogo({
          status: supports.includes('uhd') ? 'active' : 'inactive',
          role: isAdmin ? 'admin' : 'user'
        })}
        onClick={() => handleChangeVideoSupport('uhd')}
      >
        <Uhd />
      </button>
    </div>
  );
}
