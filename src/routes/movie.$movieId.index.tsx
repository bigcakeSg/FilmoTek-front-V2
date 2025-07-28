import {
  // useQueryErrorResetBoundary,
  useSuspenseQuery
} from '@tanstack/react-query';
import {
  createFileRoute
  // ErrorComponent,
  // useRouter,
  // type ErrorComponentProps,
} from '@tanstack/react-router';
// import { useEffect } from "react";

export class MovieNotFoundError extends Error {}

const movieQuery = (movieId: string) => ({
  queryKey: ['movie', movieId],
  queryFn: async () => {
    console.log('FETCH MOVIE', movieId);
    // throw new MovieNotFoundError(`Movie with id "${movieId}" not found!`);
    return { id: movieId, title: 'Movie Title' };
  }
});

export const Route = createFileRoute('/movie/$movieId/')({
  loader: ({ context: { queryClient }, params: { movieId } }) => {
    return queryClient.ensureQueryData(movieQuery(movieId));
  },
  // errorComponent: MovieErrorComponent,
  component: Movie
});

// export function MovieErrorComponent({ error }: ErrorComponentProps) {
//   const router = useRouter();
//   if (error instanceof MovieNotFoundError) {
//     return <div>{error.message}</div>;
//   }
//   const queryErrorResetBoundary = useQueryErrorResetBoundary();

//   useEffect(() => {
//     queryErrorResetBoundary.reset();
//   }, [queryErrorResetBoundary]);

//   return (
//     <div>
//       <button
//         onClick={() => {
//           router.invalidate();
//         }}
//       >
//         retry
//       </button>
//       <ErrorComponent error={error} />
//     </div>
//   );
// }

function Movie() {
  const movieId = Route.useParams().movieId;
  const {
    data: { title }
  } = useSuspenseQuery(movieQuery(movieId));

  return (
    <>
      {title} - {movieId}
    </>
  );
}
