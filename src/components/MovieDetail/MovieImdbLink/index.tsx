import ImdbLogo from '@assets/IMDB_logo.svg?react';
import { useTranslation } from 'react-i18next';
import {
  imdbLogo,
  movieLink,
  movieLinkContainer
} from './movieImdbLink.styles';

interface MovieImdbLinkProps {
  imdbIdLink: string;
}

export default function MovieImdbLink({
  imdbIdLink
}: Readonly<MovieImdbLinkProps>) {
  const { t } = useTranslation();

  return (
    <div className={movieLinkContainer}>
      <a
        href={imdbIdLink}
        target="_blank"
        rel="noopener noreferrer"
        title={t('goImdb')}
        className={movieLink}
      >
        <ImdbLogo className={imdbLogo} />
        <span>{t('goImdb')}</span>
      </a>
    </div>
  );
}
