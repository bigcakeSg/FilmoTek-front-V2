import { useGetMovieDetail, useGetRandomMovie } from '@/hooks/movies.hook';
import useRouteStore from '@/stores/route.store';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

export default function RandomTrailers() {
  const queryClient = useQueryClient();

  const { filter } = useRouteStore();
  const { data: movieId, refetch } = useGetRandomMovie(
    filter.map((f) => `${f.name}+${f.value}`)
  );
  const { data: movie } = useGetMovieDetail(movieId);

  const [currentTrailer, setCurrentTrailer] = useState<string | undefined>();
  const [nextTrailer, setNextTrailer] = useState<string | undefined>();
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * (movie?.videos.length || 0));
    const video = movie?.videos[randomIndex]; // Random video

    if (video && video !== currentTrailer) {
      if (!currentTrailer || isError) {
        setCurrentTrailer(video);
        setIsError(false);
      } else setNextTrailer(video);
    } else {
      queryClient.resetQueries({ queryKey: ['randomMovie'] });
      refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movie]);

  if (currentTrailer)
    return (
      <div style={{ height: '80vh', aspectRatio: '16/9' }}>
        <ReactPlayer
          playing
          style={{ width: '100%', height: '100%' }}
          src={currentTrailer}
          onStart={() => {
            queryClient.resetQueries({ queryKey: ['randomMovie'] });
            refetch();
          }}
          onEnded={() => setCurrentTrailer(nextTrailer)}
          onError={() => {
            setIsError(true);
            queryClient.resetQueries({ queryKey: ['randomMovie'] });
            refetch();
          }}
        />
      </div>
    );
}
