import { format } from 'date-fns';
import {
  companiesStyles,
  countriesStyles,
  durationStyles,
  frenchTitleStyles,
  originalTitleStyles,
  releaseInfoStyles,
  relesaeDateStyles
} from './movieDetailTitle.styles';

interface MovieDetailTitleProps {
  originalTitle: string;
  frenchTitle?: string;
  releaseDate: string;
  duration: number;
  countries: string[];
  companies: { id: string; name: string }[];
}

export default function MovieDetailTitle({
  originalTitle,
  frenchTitle,
  releaseDate,
  duration,
  countries,
  companies
}: Readonly<MovieDetailTitleProps>) {
  return (
    <>
      <div className={originalTitleStyles}>{originalTitle}</div>
      {originalTitle.toLowerCase() !== frenchTitle?.toLowerCase() && (
        <div className={frenchTitleStyles}>{frenchTitle}</div>
      )}
      <div className={releaseInfoStyles}>
        <div className={relesaeDateStyles}>
          {format(new Date(releaseDate), 'yyyy')}
        </div>
        <div
          className={`${durationStyles}${countries.length ? ' countries' : ''}`}
        >
          {`${Math.floor(duration / 60)}h${String(Math.floor(duration % 60)).padStart(2, '0')}`}
        </div>
        {!!countries.length && (
          <div className={countriesStyles}>{countries.join(' · ')}</div>
        )}
      </div>
      <div className={companiesStyles}>
        {companies.map((company) => company.name).join(', ')}
      </div>
    </>
  );
}
