import { useTranslation } from 'react-i18next';
import { MdMovie, MdMovieEdit } from 'react-icons/md';
import { BiSolidBarChartSquare } from 'react-icons/bi';
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
import { toaster } from '@/components/ui/ToasterComponent/toaster';
// import { useToaster } from '@/hooks/toaster.hook';

export default function NavButtons() {
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
        onClick={async () => {
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
        to="/statistics/genre"
        label={t('mainNav.stats')}
        icon={<BiSolidBarChartSquare />}
        tootltipMessage={t('mainNav.statsTooltip')}
      />
      <button
        onClick={() => {
          toaster.success({
            title: 'Success!',
            description: 'Your changes have been saved.'
          });
        }}
      >
        Success
      </button>
      <button
        onClick={() => {
          toaster.error({
            title: 'Success!',
            description: 'Your changes have been saved.',
            duration: Infinity
          });
        }}
      >
        Error
      </button>
    </div>
  );
}
