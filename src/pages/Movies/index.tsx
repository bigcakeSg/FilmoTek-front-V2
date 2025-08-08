import React, { useEffect, useRef } from 'react';
import { useGetMovieList } from '@/hooks/movies.hooks';
import {
  loaderRefStyle,
  moviesContainer,
  moviesContent
} from './movies.styles';
import MovieTile from '@components/MovieTile';
import { useTranslation } from 'react-i18next';
import { movieTile } from '@/components/MovieTile/movieTile.styles';
import { useCollections } from '@/hooks/collections.hooks';

export default function Movies() {
  const { t } = useTranslation();

  const containerRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);

  const { data: collections } = useCollections();
  const { data: moviesData, fetchNextPage, isFetching } = useGetMovieList();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { root: containerRef.current, threshold: 1 }
    );
    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }
    return () => {
      if (loaderRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(loaderRef.current);
      }
    };
  }, [fetchNextPage, loaderRef]);

  const collectionWatchedId = collections.find(
    (c) => c.name === 'collection.watched'
  )?._id;
  const collectionFavoriteId = collections.find(
    (c) => c.name === 'collection.favorite'
  )?._id;
  const collectionPinnedId = collections.find(
    (c) => c.name === 'collection.pinned'
  )?._id;

  const countToEnd =
    moviesData?.pages[moviesData.pages.length - 1].countToEnd || 0;

  return (
    <div ref={containerRef} className={moviesContainer}>
      <div className={moviesContent}>
        {moviesData?.pages.map((page) => (
          <React.Fragment key={page.start}>
            {page.data.map((movie) => {
              const finalMovie = {
                ...movie,
                watched: collectionWatchedId
                  ? movie.collections.includes(collectionWatchedId)
                  : undefined,
                favorite: collectionFavoriteId
                  ? movie.collections.includes(collectionFavoriteId)
                  : undefined,
                pinned: collectionPinnedId
                  ? movie.collections.includes(collectionPinnedId)
                  : undefined
              };
              return <MovieTile key={movie._id} {...finalMovie} />;
            })}
          </React.Fragment>
        ))}
        {/* TODO: loader */}
        {isFetching &&
          Array.from({ length: countToEnd }).map((_, i) => (
            <div key={i} className={movieTile}>
              {t('loading')}
            </div>
          ))}
        <div ref={loaderRef} className={loaderRefStyle}></div>
      </div>
    </div>
  );
}
