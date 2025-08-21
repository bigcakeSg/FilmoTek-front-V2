import { format } from 'date-fns';
import {
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
}

export default function MovieDetailTitle({
  originalTitle,
  frenchTitle,
  releaseDate,
  duration
}: Readonly<MovieDetailTitleProps>) {
  return (
    <>
      <div className={originalTitleStyles}>{originalTitle}</div>
      {originalTitle !== frenchTitle && (
        <div className={frenchTitleStyles}>{frenchTitle}</div>
      )}
      <div className={releaseInfoStyles}>
        <div className={relesaeDateStyles}>
          {format(new Date(releaseDate), 'yyyy')}
        </div>
        <div className={durationStyles}>
          {`${Math.floor(duration / 60)}h${String(Math.floor(duration % 60)).padStart(2, '0')}`}
        </div>
      </div>
    </>
  );
}
