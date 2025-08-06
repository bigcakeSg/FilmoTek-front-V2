import { useEffect, useRef } from 'react';
import { useGetMovieList } from '@/hooks/movies.hooks';
import { axiosInstance } from '@/config/axiosInstance';
import {
  loaderRefStyle,
  moviesContainer,
  moviesContent
} from './movies.styles';
import MovieTile from '@/components/MovieTile';
import { useQueryClient } from '@tanstack/react-query';
import { Collection } from '@/interfaces/collections.interface';

export default function Movies() {
  const queryClient = useQueryClient();
  const containerRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);

  const { data: moviesData, fetchNextPage, isFetching } = useGetMovieList();

  const handleTest = async () => {
    try {
      const response = await axiosInstance.get('/auth/me');
      alert(`Hello ${response.data.firstname} ${response.data.lastname}`);
    } catch (error) {
      console.log('Error fetching user data:', error);
      alert('Error fetching user data');
    }
  };

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

  const collections: Collection[] =
    queryClient.getQueryData(['collections']) || [];

  const collectionWatchedId = collections.find(
    (c) => c.name === 'collection.watched'
  )?._id;
  const collectionFavoriteId = collections.find(
    (c) => c.name === 'collection.favorite'
  )?._id;
  const collectionPinnedId = collections.find(
    (c) => c.name === 'collection.pinned'
  )?._id;

  const movieList =
    moviesData?.pages.flatMap((page) =>
      page.data.map((movie) => ({
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
      }))
    ) || [];

  return (
    <div>
      <h3>Liste de films</h3>
      <div>
        Filtres - Tier par : date / titre original / titre français - Aller à :
        décénnie / lettre
      </div>
      <button onClick={() => handleTest()}>Test</button>
      <div ref={containerRef} className={moviesContainer}>
        <div className={moviesContent}>
          {movieList.map((movie) => (
            <MovieTile key={movie._id} {...movie} />
          ))}
          <div ref={loaderRef} className={loaderRefStyle}></div>
        </div>
      </div>
      {isFetching && <div>Loading...</div>}
    </div>
  );
}
