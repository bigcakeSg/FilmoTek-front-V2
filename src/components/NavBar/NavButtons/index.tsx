import { useTranslation } from 'react-i18next';
import { MdMovie, MdMovieEdit } from 'react-icons/md';
import { BiSolidBarChartSquare } from 'react-icons/bi';
import { RiMovie2Fill } from 'react-icons/ri';
import { FaDice } from 'react-icons/fa';
import { navButtons } from './navButtons.sttyles';
import NavButton from './NavButton';
import useRouteStore from '@stores/route.store';
import AddMovie from '@components/AddMovie';
import useUiStore from '@stores/ui.store';
import { useRole } from '@hooks/auth.hook';
import { css } from '@styled-system/css';
import { useGetRandomMovie } from '@/hooks/movies.hook';
import { useNavigate } from '@tanstack/react-router';
import RandomTrailers from '@/components/RandomTrailers';
import { useQueryClient } from '@tanstack/react-query';

export default function NavButtons() {
  const queryClient = useQueryClient();
  const { t } = useTranslation();
  const navigate = useNavigate({ from: '/movie/$movieId' });
  const { page, limit, sort, filter } = useRouteStore();
  const { openModal } = useUiStore();
  const { isAdmin } = useRole();
  const { refetch: fetchRandomMovie } = useGetRandomMovie(
    filter.map((f) => `${f.name}+${f.value}`)
  );

  return (
    <div className={navButtons}>
      <NavButton
        to="/"
        searchParams={{
          page,
          limit,
          sortBy: sort.name,
          direction: sort.direction,
          filter: filter.map((f) => `${f.name}+${f.value}`)
        }}
        label={t('mainNav.movieList')}
        icon={<MdMovie />}
        tootltipMessage={t('mainNav.movieListTooltip')}
      />
      {isAdmin && (
        <NavButton
          label={t('mainNav.addMovie')}
          icon={<MdMovieEdit />}
          tootltipMessage={t('mainNav.addMovieTooltip')}
          onClick={() =>
            openModal({
              title: (
                <div
                  className={css({
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                  })}
                >
                  <MdMovieEdit /> {t('mainNav.addMovie')}
                </div>
              ),
              content: <AddMovie />
            })
          }
        />
      )}
      <NavButton
        onClick={() => {
          fetchRandomMovie().then((randomMovie) => {
            if (randomMovie.isSuccess && randomMovie.data)
              navigate({
                to: '/movie/$movieId',
                params: { movieId: randomMovie.data }
              });
          });
        }}
        label={t('mainNav.randomMovie')}
        icon={<FaDice />}
        tootltipMessage={
          <>
            {t('mainNav.randomMovieTooltip')}
            <br />
            {t('mainNav.filters')}
          </>
        }
      />
      <NavButton
        onClick={() => {
          queryClient.resetQueries({ queryKey: ['randomMovie'] });
          openModal({
            content: <RandomTrailers />
          });
        }}
        label={t('mainNav.trailers')}
        icon={<RiMovie2Fill />}
        tootltipMessage={<>{t('mainNav.trailersTooltip')}</>}
      />
      <NavButton
        to="/statistics/genre"
        label={t('mainNav.stats')}
        icon={<BiSolidBarChartSquare />}
        tootltipMessage={t('mainNav.statsTooltip')}
      />
    </div>
  );
}
